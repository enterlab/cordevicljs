(ns taoensso.sente
  "Channel sockets. Otherwise known as The Shiz.

      Protocol  | client>server | client>server ?+ ack/reply | server>user push
    * WebSockets:       ✓              [1]                           ✓
    * Ajax:            [2]              ✓                           [3]

    [1] Emulate with cb-uuid wrapping.
    [2] Emulate with dummy-cb wrapping.
    [3] Emulate with long-polling.

  Abbreviations:
    * chsk   - Channel socket. Sente's own pseudo \"socket\".
    * net-ch - Network channel. Underlying web server's channel. Must implement
               Sente's async net channel interface.
    * uid    - User-id. An application-level user identifier used for async push.
               May have semantic meaning (e.g. username, email address), or not
               (e.g. client/random id) - app's discretion.
    * cb     - Callback.
    * tout   - Timeout.
    * ws     - WebSocket/s.
    * pstr   - Packed string. Arbitrary Clojure data serialized as a string (e.g.
               edn) for client<->server comms.

  Special messages:
    * Callback wrapping: [<clj> <?cb-uuid>] for [1],[2].
    * Callback replies: :chsk/closed, :chsk/timeout, :chsk/error.
    * Client-side events:
        [:chsk/handshake [<?uid> <?csrf-token> <?handshake-data>]],
        [:chsk/state <new-state>],
        [:chsk/recv <[buffered-evs]>] ; server>user push

    * Server-side events:
        [:chsk/ws-ping],
        [:chsk/bad-package <packed-str>],
        [:chsk/bad-event   <chsk-event>],
        [:chsk/uidport-open],
        [:chsk/uidport-close].

  Notable implementation details:
    * core.async is used liberally where brute-force core.async allows for
      significant implementation simplifications. We lean on core.async's strong
      efficiency here.
    * For WebSocket fallback we use long-polling rather than HTTP 1.1 streaming
      (chunked transfer encoding). Http-kit _does_ support chunked transfer
      encoding but a small minority of browsers &/or proxies do not. Instead of
      implementing all 3 modes (WebSockets, streaming, long-polling) - it seemed
      reasonable to focus on the two extremes (performance + compatibility). In
      any case client support for WebSockets is growing rapidly so fallback
      modes will become increasingly irrelevant while the extra simplicity will
      continue to pay dividends.

  General-use notes:
    * Single HTTP req+session persists over entire chsk session but cannot
      modify sessions! Use standard a/sync HTTP Ring req/resp for logins, etc.
    * Easy to wrap standard HTTP Ring resps for transport over chsks. Prefer
      this approach to modifying handlers (better portability)."
  {:author "Peter Taoussanis"}

       
           
                               
                                                                
                                                     
                                        
                                                                
                                                                
                                                       
                                                                                   
                                              

        
  (:require
   [clojure.string  :as str]
   [cljs.core.async :as async :refer (<! >! put! chan)]
   ;; [cljs.reader  :as edn]
   [taoensso.encore :as enc :refer (format swap-in! reset-in! swapped
                                    tracef debugf infof warnf errorf)]
   [taoensso.sente.interfaces :as interfaces])

        
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]
   [taoensso.encore        :as enc    :refer (have? have have-in)]))

;;;; Encore version check

     
                                                                
                                                                            
                                
          
              
               
                                                                                                                                                  
                             
                                             

;;;; Logging

(defn set-logging-level! [level]
                                     
         (set! enc/*log-level* level))

;; (set-logging-level! :trace) ; For debugging

;;;; Ajax

      
(def ajax-call
  "Alpha - subject to change.
  Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
  Ref. https://developers.google.com/closure/library/docs/xhrio.

  (ajax-call \"/my-post-route\"
    {:method     :post
     :params     {:username \"Rich Hickey\"
                  :type     \"Awesome\"}
     :headers    {\"Foo\" \"Bar\"}
     :resp-type  :text
     :timeout-ms 7000}
    (fn async-callback [resp-map]
      (let [{:keys [?status ?error ?content ?content-type]} resp-map]
        ;; ?status - 200, 404, ..., or nil on no response
        ;; ?error  - e/o #{:xhr-pool-depleted :exception :http-error :abort
        ;;                 :timeout <http-error-status> nil}
        (js/alert (str \"Ajax response: \" resp-map)))))"
  enc/ajax-lite)

;;;; Events
;; * Clients & server both send `event`s and receive (i.e. route) `event-msg`s.

(defn- validate-event [x]
  (cond
    (not (vector? x))        :wrong-type
    (not (#{1 2} (count x))) :wrong-length
    :else (let [[ev-id _] x]
            (cond (not (keyword? ev-id))  :wrong-id-type
                  (not (namespace ev-id)) :unnamespaced-id
                  :else nil))))

(defn event? "Valid [ev-id ?ev-data] form?" [x] (nil? (validate-event x)))

(defn as-event [x] (if (event? x) x [:chsk/bad-event x]))

(defn assert-event [x]
  (when-let [?err (validate-event x)]
    (let [err-fmt
          (str
           (case ?err
             :wrong-type   "Malformed event (wrong type)."
             :wrong-length "Malformed event (wrong length)."
             (:wrong-id-type :unnamespaced-id)
             "Malformed event (`ev-id` should be a namespaced keyword)."
             :else "Malformed event (unknown error).")
           " Event should be of `[ev-id ?ev-data]` form: %s")]
      (throw (ex-info (format err-fmt (str x)) {:malformed-event x})))))

(defn event-msg? [x]
        
  (and
    (map? x)
    (enc/keys= x #{:ch-recv :send-fn :state :event :id :?data})
    (let [{:keys [ch-recv send-fn state event]} x]
      (and
        (enc/chan? ch-recv)
        (ifn?      send-fn)
        (enc/atom? state)
        (event?    event))))

       
      
            
                                                    
                                       
                                                 
                                                
                                                         
          
                                 
                                 
                                        
          
                                  
                                   
                               
                            
                                )

     
                             
                                                 
                                                
                                                         
                                                     
                                                   
                                               
                                                     
                                
                                                   
                               

      
(defn cb-success? "Note that cb reply need _not_ be `event` form!"
  [cb-reply-clj] (not (#{:chsk/closed :chsk/timeout :chsk/error} cb-reply-clj)))

;;;; Packing
;; * Client<->server payloads are arbitrary Clojure vals (cb replies or events).
;; * Payloads are packed for client<->server transit.
;; * Packing includes ->str encoding, and may incl. wrapping to carry cb info.

(defn- unpack* "pstr->clj" [packer pstr]
  (try
    (interfaces/unpack packer (have string? pstr))
    (catch                        :default t
      (debugf "Bad package: %s (%s)" pstr t)
                                     
             (throw t) ; Let client rethrow on bad pstr from server
      )))

(defn- with-?meta [x ?m] (if (seq ?m) (with-meta x ?m) x))
(defn- pack* "clj->prefixed-pstr"
  ([packer ?packer-meta clj]
     (str "-" ; => Unwrapped (no cb metadata)
       (interfaces/pack packer (with-?meta clj ?packer-meta))))

  ([packer ?packer-meta clj ?cb-uuid]
     (let [;;; Keep wrapping as light as possible:
           ?cb-uuid    (if (= ?cb-uuid :ajax-cb) 0 ?cb-uuid)
           wrapped-clj (if ?cb-uuid [clj ?cb-uuid] [clj])]
       (str "+" ; => Wrapped (cb metadata)
         (interfaces/pack packer (with-?meta wrapped-clj ?packer-meta))))))

(defn- pack [& args]
  (let [pstr (apply pack* args)]
    (tracef "Packing: %s -> %s" args pstr)
    pstr))

(defn- unpack "prefixed-pstr->[clj ?cb-uuid]"
  [packer prefixed-pstr]
  (have? string? prefixed-pstr)
  (let [prefix   (enc/substr prefixed-pstr 0 1)
        pstr     (enc/substr prefixed-pstr 1)
        clj      (unpack* packer pstr) ; May be un/wrapped
        wrapped? (case prefix "-" false "+" true)
        [clj ?cb-uuid] (if wrapped? clj [clj nil])
        ?cb-uuid (if (= 0 ?cb-uuid) :ajax-cb ?cb-uuid)]
    (tracef "Unpacking: %s -> %s" prefixed-pstr [clj ?cb-uuid])
    [clj ?cb-uuid]))

(comment
  (do (require '[taoensso.sente.packers.transit :as transit])
      (def edn-packer   interfaces/edn-packer)
      (def flexi-packer (transit/get-flexi-packer)))
  (unpack edn-packer   (pack edn-packer   nil          "hello"))
  (unpack flexi-packer (pack flexi-packer nil          "hello"))
  (unpack flexi-packer (pack flexi-packer {}           [:foo/bar {}] "my-cb-uuid"))
  (unpack flexi-packer (pack flexi-packer {:json true} [:foo/bar {}] "my-cb-uuid"))
  (unpack flexi-packer (pack flexi-packer {}           [:foo/bar {}] :ajax-cb)))

;;;; Server API

                                                      
                                                         

     
                          
                                                             
                                                                                     
                                                     
                                                                                 
                                                                           
                                                                                  

                 
                                                                                
                                                                      
                                                                                     
                            
                            
                                                                                     

                                                                        
                                                                      
                                                                               
                                                        

                                                                     
                                                                             
                                                                             
                                                               

                                                                            
                                                           
                                                                
                                                       
                                  
                                 
                                                                             
                                          
                                                                          
                                                                                                               
                                                                                       
                                                   
                             

                                                             
                                                                      
                                

                                                 
                                    
                                                                
                                                                                        
                         
                                                           
                                                                                           

                    
                                           
                                
                                            
                                                       
                               
                                    
                                                                                               
                                                                                                 
                                    
                                                  
                                                   
                                                                  
                                                                  
                                                   
                              

                                                          
                                      
                                   
                                            
                                                       
                                        
                                                                          
                                                                          
                                                               
                                                                  
                               
                                                                                       
                                                                                       
                                                                                         
                                    
                                                  
                                                   
                                                                 
                                                                   
                                                      
                                 

                                           
                                                      
                                                                                       
                                                                  
                                   
                                                                                         
                                                                                         
                                         
                                      

                             
                          
                           
                             
                                                     
                                
                                                                            
                                                                               
                                                                         
                                                                             
                                                                        
                                                              
                                                          
                                                             
                                                      
                                                       
                                                   
                                                         
                                                  
                                              

                                                                         
                                                                               
                                                             
                                                                       
                                                                 
                                                                       
                                                                  
                                  
                                                                       
                                                         
                                                                       
                                                               

                                                             
                 
                                                                      
                            
                                           
                                          

                                                                 
                                             

                                                                        
                                            
                                                 

                 
                               
                                         
                                                    
                            
                                
                                         
                                                         
                                                 
                                                            

                                                                
                                                                       
                                                             
                                                                                  
                                                                      
                                                                         
                                        
                                                                           
                                             

                                                                             
                        
              

                                             
                                             
                                                       

                            
                            
                                    

                                                                              
                   
                                                                    
                  
                      
                                                      
                                                     
                                                                            
                                                      

                                             
                                   
                                                            
                                      
                                 
                             
                                
                                                           
                                                                     
                                                    
                                               
                                                               
                                                

                               
                                                               
                                        
                                                      
                                          

                                                                               
                   
                                                
                                              
                                                 
                                       
                                                                 
                                                                              
                                                                    
                                    
                                              

                                         
                                      
                                              
                                    
                                        
                                       
                                    
                                            

                       
                         
                                    
                                                                 
                                 
                                                                        
                                                                         
                                                           
                                         
                                                 
                                       

                                   
                                                                                                                                                                                
                                                  
                                                            

                                                                        
                      
                          
                              
                                           
                                                            
                                                                     
                                                                 
                                                
                                                                
                                        

                                                    
                                                 
                                                              
                                                                               

                                                                
                                                             

                                                  
                                                                

                                                      
                                                            

                                           
                                    
                                                               
                                                        
                                  
                                                            
                                                                    
                                                     
                                                
                                                                               

                                                                            
                                 
                                                                             
                                            

                              
                                       
                                              
                              
                                                          
                                                                   

                                                     
                                                                    

                       
                                                                             
                                        
                                               

                                                                          
                                                                                  
                                                                            
                                                                                
                        
                                                    
                                                                     

                                  
                                                          
                                                                                  

                                                         
                         
                                                                          
                                                 
                                           
                                                          
                                        
                                                                                  
                                                     
                                                                               
                                                              
                                                                    
                                                         
                                                                      
                                                                        
                                                
                                                                                
                                                              
                                             
                                                          
                                                                                        

     
                                    
                                                                                 
                                
                                                                
                                                   
                                                 

     
                                      
                                                                           
                                                        
                                                                         
                                                                         
                                                          
                                                           
                                                               
                                   
                                                            
                                                                   
                                             
                                                                     
                                             
                                                                             
                                          
                                                                        
                                                                          
                                                           
                                           
                                     
                              
                               
                                   
                                                                         
                                                                    
                                       
                                                        
                                         
                                
                             
                            
                                                
                                           
                                                                                   
                                                                             
                                                        
                        
                                                         
                                                                           
                                                         
                                          
                                                                                
                                                                
                                                                 
                                                  

;;;; Client API

      
(defprotocol IChSocket
  (chsk-init!      [chsk] "Implementation detail.")
  (chsk-destroy!   [chsk] "Kills socket, stops auto-reconnects.")
  (chsk-reconnect! [chsk] "Drops connection, allows auto-reconnect. Useful for reauthenticating after login/logout.")
  (chsk-send!*     [chsk ev opts] "Implementation detail."))

      
(defn chsk-send!
  "Sends `[ev-id ev-?data :as event]`, returns true on apparent success."
  ([chsk ev]                 (chsk-send! chsk ev {}))
  ([chsk ev ?timeout-ms ?cb] (chsk-send! chsk ev {:timeout-ms ?timeout-ms
                                                  :cb         ?cb}))
  ([chsk ev opts]
     (tracef "Chsk send: (%s) %s" (assoc opts :cb (boolean (:cb opts))) ev)
     (chsk-send!* chsk ev opts)))

      
(defn- assert-send-args [x ?timeout-ms ?cb]
  (assert-event x)
  (assert (or (and (nil? ?timeout-ms) (nil? ?cb))
              (and (enc/nneg-int? ?timeout-ms)))
          (format "cb requires a timeout; timeout-ms should be a +ive integer: %s"
           ?timeout-ms))
  (assert (or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))
          (format "cb should be nil, an ifn, or a channel: %s" (type ?cb))))

      
(defn- pull-unused-cb-fn! [cbs-waiting_ ?cb-uuid]
  (when-let [cb-uuid ?cb-uuid]
    (swap-in! cbs-waiting_ [cb-uuid]
      (fn [?f] (swapped :swap/dissoc ?f)))))

      
(defn- merge>chsk-state! [{:keys [chs state_] :as chsk} merge-state]
  (let [[old-state new-state]
        (swap-in! state_ []
          (fn [old-state]
            (let [new-state (merge old-state merge-state)
                  ;; Is this a reasonable way of helping client distinguish
                  ;; cause of an auto reconnect? Didn't give it much thought...
                  new-state (if-not (and (:requested-reconnect-pending? old-state)
                                              (:open? new-state)
                                         (not (:open? old-state)))
                              new-state
                              (-> new-state
                                  (dissoc :requested-reconnect-pending?)
                                  (assoc  :requested-reconnect? true)))]
              (swapped new-state [old-state new-state]))))]
    (when (not= old-state new-state)
      ;; (debugf "Chsk state change: %s" new-state)
      (put! (:state chs) new-state)
      new-state)))

      
(defn- cb-chan-as-fn
  "Experimental, undocumented. Allows a core.async channel to be provided
  instead of a cb-fn. The channel will receive values of form
  [<event-id>.cb <reply>]."
  [?cb ev]
  (if (or (nil? ?cb) (ifn? ?cb)) ?cb
    (do (have? enc/chan? ?cb)
        (assert-event ev)
        (let [[ev-id _] ev
              cb-ch ?cb]
          (fn [reply]
            (put! cb-ch [(keyword (str (enc/fq-name ev-id) ".cb"))
                         reply]))))))

      
(defn- receive-buffered-evs! [chs clj]
  (tracef "receive-buffered-evs!: %s" clj)
  (let [buffered-evs (have vector? clj)]
    (doseq [ev buffered-evs]
      (assert-event ev)
      (put! (:<server chs) ev))))

      
(defn- handle-when-handshake! [chsk chs clj]
  (let [handshake? (and (vector? clj) ; Nb clj may be callback reply
                        (= (first clj) :chsk/handshake))]
    (tracef "handle-when-handshake (%s): %s"
      (if handshake? :handshake :non-handshake) clj)

    (when handshake?
      (let [[_ [?uid ?csrf-token ?handshake-data] :as handshake-ev] clj
            ;; Another idea? Not fond of how this places restrictions on the
            ;; form and content of ?handshake-data:
            ;; handshake-ev [:chsk/handshake
            ;;               (merge
            ;;                 (have [:or nil? map?] ?handshake-data)
            ;;                 {:?uid        ?uid
            ;;                  :?csrf-token ?csrf-token})]
            ]
        (when (str/blank? ?csrf-token)
          (warnf "SECURITY WARNING: no CSRF token available for use by Sente"))

        (merge>chsk-state! chsk
          {:open?      true
           :uid        ?uid
           :csrf-token ?csrf-token

           ;; Could also just merge ?handshake-data into chsk state here, but
           ;; it seems preferable (?) to instead register a unique
           ;; :chsk/handshake event
           })

        (assert-event handshake-ev)
        (put! (:internal chs) handshake-ev)

        :handled))))

      
(defn set-exp-backoff-timeout! [nullary-f & [nattempt]]
  (.setTimeout js/window nullary-f (enc/exp-backoff (or nattempt 0))))

       ;; Handles reconnects, keep-alives, callbacks:
(defrecord ChWebSocket
    [client-id url chs socket_ kalive-ms kalive-timer_ kalive-due?_ nattempt_
     cbs-waiting_ ; {<cb-uuid> <fn> ...}
     state_       ; {:type _ :open? _ :uid _ :csrf-token _ :destroyed? _}
     packer       ; IPacker
     ]

  IChSocket
  (chsk-send!* [chsk ev {:as opts ?timeout-ms :timeout-ms ?cb :cb :keys [flush?]}]
    (assert-send-args ev ?timeout-ms ?cb)
    (let [?cb-fn (cb-chan-as-fn ?cb ev)]
      (if-not (:open? @state_) ; Definitely closed
        (do (warnf "Chsk send against closed chsk.")
            (when ?cb-fn (?cb-fn :chsk/closed)))

        ;; TODO Buffer before sending (but honor `:flush?`)
        (let [?cb-uuid (when ?cb-fn (enc/uuid-str 6))
              ppstr    (pack packer (meta ev) ev ?cb-uuid)]

          (when-let [cb-uuid ?cb-uuid]
            (reset-in! cbs-waiting_ [cb-uuid] (have ?cb-fn))
            (when-let [timeout-ms ?timeout-ms]
              (go (<! (async/timeout timeout-ms))
                  (when-let [cb-fn* (pull-unused-cb-fn! cbs-waiting_ ?cb-uuid)]
                    (cb-fn* :chsk/timeout)))))

          (try
            (.send @socket_ ppstr)
            (reset! kalive-due?_ false)
            :apparent-success
            (catch js/Error e
              (errorf "Chsk send error: %s" e)
              (when-let [cb-uuid ?cb-uuid]
                (let [cb-fn* (or (pull-unused-cb-fn! cbs-waiting_ cb-uuid)
                                 (have ?cb-fn))]
                  (cb-fn* :chsk/error)))
              false))))))

  (chsk-reconnect!  [chsk]
    (merge>chsk-state! chsk {:open? false :requested-reconnect-pending? true})
    (when-let [s @socket_] (.close s 3000 "SENTE_RECONNECT")))

  (chsk-destroy!    [chsk]
    (merge>chsk-state! chsk {:open? false :destroyed? true})
    (when-let [s @socket_] (.close s 1000 "CLOSE_NORMAL")))

  (chsk-init! [chsk]
    (when-let [WebSocket (or (aget js/window "WebSocket")
                             (aget js/window "MozWebSocket"))]
      ((fn connect! []
         (when-not (:destroyed? @state_)
           (let [retry!
                 (fn []
                   (let [nattempt* (swap! nattempt_ inc)]
                     (.clearInterval js/window @kalive-timer_)
                     (warnf "Chsk is closed: will try reconnect (%s)." nattempt*)
                     (set-exp-backoff-timeout! connect! nattempt*)))]

             (if-let [socket
                      (try
                        (WebSocket. (enc/merge-url-with-query-string url
                                      {:client-id client-id}))
                        (catch js/Error e
                          (errorf "WebSocket js/Error: %s" e)
                          nil))]

               (reset! socket_
                 (doto socket
                   (aset "onerror" (fn [ws-ev] (errorf "WebSocket error: %s" ws-ev)))
                   (aset "onmessage" ; Nb receives both push & cb evs!
                     (fn [ws-ev]
                       (let [;; Nb may or may NOT satisfy `event?` since we also
                             ;; receive cb replies here! This is actually why
                             ;; we prefix our pstrs to indicate whether they're
                             ;; wrapped or not.
                             ppstr (aget ws-ev "data")
                             [clj ?cb-uuid] (unpack packer ppstr)]
                         ;; (assert-event clj) ;; NO!
                         (or
                           (and (handle-when-handshake! chsk chs clj)
                                (reset! nattempt_ 0))
                           (if-let [cb-uuid ?cb-uuid]
                             (if-let [cb-fn (pull-unused-cb-fn! cbs-waiting_
                                              cb-uuid)]
                               (cb-fn clj)
                               (warnf "Cb reply w/o local cb-fn: %s" clj))
                             (let [buffered-evs clj]
                               (receive-buffered-evs! chs buffered-evs)))))))

                   (aset "onopen"
                     (fn [_ws-ev]
                       (reset! kalive-timer_
                         (.setInterval js/window
                           (fn []
                             (when @kalive-due?_ ; Don't ping unnecessarily
                               (chsk-send! chsk [:chsk/ws-ping]))
                             (reset! kalive-due?_ true))
                           kalive-ms))
                       ;; NO, better for server to send a handshake!:
                       ;; (merge>chsk-state! chsk {:open? true})
                       ))

                   ;; Fires repeatedly (on each connection attempt) while
                   ;; server is down:
                   (aset "onclose"
                     (fn [_ws-ev]
                       (merge>chsk-state! chsk {:open? false})
                       (retry!)))))

               ;; Couldn't even get a socket:
               (retry!))))))
      chsk)))

      
(defrecord ChAjaxSocket [client-id url chs timeout-ms curr-xhr_ state_ packer]
  IChSocket
  (chsk-send!* [chsk ev {:as opts ?timeout-ms :timeout-ms ?cb :cb :keys [flush?]}]
    (assert-send-args ev ?timeout-ms ?cb)
    (let [?cb-fn (cb-chan-as-fn ?cb ev)]
      (if-not (:open? @state_) ; Definitely closed
        (do (warnf "Chsk send against closed chsk.")
            (when ?cb-fn (?cb-fn :chsk/closed)))

        ;; TODO Buffer before sending (but honor `:flush?`)
        (do
          (ajax-call url
           {:method :post :timeout-ms ?timeout-ms
            :resp-type :text ; We'll do our own pstr decoding
            :params
            (let [ppstr (pack packer (meta ev) ev (when ?cb-fn :ajax-cb))]
              {:_           (enc/now-udt) ; Force uncached resp
               :csrf-token  (:csrf-token @state_)
               ;; :client-id client-id ; Unnecessary here
               :ppstr       ppstr})}

           (fn ajax-cb [{:keys [?error ?content]}]
             (if ?error
               (if (= ?error :timeout)
                 (when ?cb-fn (?cb-fn :chsk/timeout))
                 (do (merge>chsk-state! chsk {:open? false})
                     (when ?cb-fn (?cb-fn :chsk/error))))

               (let [content      ?content
                     resp-ppstr   content
                     [resp-clj _] (unpack packer resp-ppstr)]
                 (if ?cb-fn (?cb-fn resp-clj)
                   (when (not= resp-clj :chsk/dummy-cb-200)
                     (warnf "Cb reply w/o local cb-fn: %s" resp-clj)))
                 (merge>chsk-state! chsk {:open? true})))))

          :apparent-success))))

  (chsk-reconnect!  [chsk]
    (merge>chsk-state! chsk {:open? false :requested-reconnect-pending? true})
    (when-let [x @curr-xhr_] (.abort x)))

  (chsk-destroy!    [chsk]
    (merge>chsk-state! chsk {:open? false :destroyed? true})
    (when-let [x @curr-xhr_] (.abort x)))

  (chsk-init! [chsk]
    ((fn async-poll-for-update! [nattempt]
       (tracef "async-poll-for-update!")
       (when-not (:destroyed? @state_)
         (let [retry!
               (fn []
                 (let [nattempt* (inc nattempt)]
                   (warnf "Chsk is closed: will try reconnect (%s)." nattempt*)
                   (set-exp-backoff-timeout!
                     (partial async-poll-for-update! nattempt*)
                     nattempt*)))]

           (reset! curr-xhr_
             (ajax-call url
               {:method :get :timeout-ms timeout-ms
                :resp-type :text ; Prefer to do our own pstr reading
                :params (merge
                          {:_          (enc/now-udt) ; Force uncached resp
                           :client-id  client-id}

                          ;; A truthy :handshake? param will prompt server to
                          ;; reply immediately with a handshake response,
                          ;; letting us confirm that our client<->server comms
                          ;; are working:
                          (when-not (:open? @state_) {:handshake? true}))}

               (fn ajax-cb [{:keys [?error ?content]}]
                 (if ?error
                   (cond
                     (= ?error :timeout) (async-poll-for-update! 0)
                     ;; (= ?error :abort) ; Abort => intentional, not an error
                     :else
                     (do (merge>chsk-state! chsk {:open? false})
                         (retry!)))

                   ;; The Ajax long-poller is used only for events, never cbs:
                   (let [content ?content
                         ppstr   content
                         [clj _] (unpack packer ppstr)]
                     (or
                       (handle-when-handshake! chsk chs clj)
                       ;; Actually poll for an application reply:
                       (let [buffered-evs clj]
                         (receive-buffered-evs! chs buffered-evs)
                         (merge>chsk-state! chsk {:open? true})))
                     (async-poll-for-update! 0)))))))))
     0)
    chsk))

      
(def default-chsk-url-fn
  "(ƒ [path window-location websocket?]) -> server-side chsk route URL string.

    * path       - As provided to client-side `make-channel-socket!` fn
                   (usu. \"/chsk\").
    * websocket? - True for WebSocket connections, false for Ajax (long-polling)
                   connections.
    * window-location - Map with keys:
      :href     ; \"http://www.example.org:80/foo/bar?q=baz#bang\"
      :protocol ; \"http:\" ; Note the :
      :hostname ; \"example.org\"
      :host     ; \"example.org:80\"
      :pathname ; \"/foo/bar\"
      :search   ; \"?q=baz\"
      :hash     ; \"#bang\"

  Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
  routes should be configured accordingly."
  (fn [path {:as window-location :keys [protocol host pathname]} websocket?]
    (str (if-not websocket? protocol (if (= protocol "https:") "wss:" "ws:"))
         "//" host (or path pathname))))

      
(defn make-channel-socket!
  "Returns a map with keys:
    :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
             ; May `put!` (inject) arbitrary `event`s to this channel.
    :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
    :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
    :chsk    ; IChSocket implementer. You can usu. ignore this.

  Common options:
    :type         ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
    :ws-kalive-ms ; Ping to keep a WebSocket conn alive if no activity w/in given
                  ; number of milliseconds.
    :lp-kalive-ms ; Ping to keep a long-polling (Ajax) conn alive ''.
    :chsk-url-fn  ; Please see `default-chsk-url-fn` for details.
    :packer       ; :edn (default), or an IPacker implementation (experimental)."
  [path &
   & [{:keys [type recv-buf-or-n ws-kalive-ms lp-timeout-ms chsk-url-fn packer
              client-id]
       :as   opts
       :or   {type          :auto
              recv-buf-or-n (async/sliding-buffer 2048) ; Mostly for buffered-evs
              ws-kalive-ms  25000 ; < Heroku 30s conn timeout
              lp-timeout-ms 25000 ; ''
              chsk-url-fn   default-chsk-url-fn
              packer        :edn
              client-id     (or (:client-uuid opts) ; Backwards compatibility
                                (enc/uuid-str))}}
      _deprecated-more-opts]]

  {:pre [(have? [:in #{:ajax :ws :auto}] type)
         (have? enc/nblank-str?          client-id)]}

  (when (not (nil? _deprecated-more-opts))
    (warnf "`make-channel-socket!` fn signature CHANGED with Sente v0.10.0."))
  (when (contains? opts :lp-timeout)
    (warnf ":lp-timeout opt has CHANGED; please use :lp-timout-ms."))

  (let [packer (interfaces/coerce-packer packer)
        window-location (enc/get-window-location)
        private-chs {:state    (chan (async/sliding-buffer 10))
                     :internal (chan (async/sliding-buffer 10))
                     :<server  (chan recv-buf-or-n)}

        ever-opened?_ (atom false)
        state*        (fn [state]
                        (if (or (not (:open? state)) @ever-opened?_) state
                          (do (reset! ever-opened?_ true)
                              (assoc state :first-open? true))))

        ;;; TODO
        ;; * map< is deprecated in favour of transducers.
        ;; * Maybe allow a flag to skip wrapping of :chsk/recv events?.
        public-ch-recv
        (async/merge
          [(:internal private-chs)
           (async/map< (fn [state] [:chsk/state (state* state)]) (:state private-chs))
           (async/map< (fn [ev]    [:chsk/recv  ev])          (:<server  private-chs))]
          ;; recv-buf-or-n ; Seems to be malfunctioning
          )

        chsk
        (or
         (and (not= type :ajax)
              (chsk-init!
                (map->ChWebSocket
                  {:client-id     client-id
                   :url           (chsk-url-fn path window-location :ws)
                   :chs           private-chs
                   :packer        packer
                   :socket_       (atom nil)
                   :kalive-ms     ws-kalive-ms
                   :kalive-timer_ (atom nil)
                   :kalive-due?_  (atom true)
                   :nattempt_     (atom 0)
                   :cbs-waiting_  (atom {})
                   :state_        (atom {:type :ws :open? false
                                         :destroyed? false})})))

         (and (not= type :ws)
              (chsk-init!
                (map->ChAjaxSocket
                  {:client-id  client-id
                   :url        (chsk-url-fn path window-location (not :ws))
                   :chs        private-chs
                   :packer     packer
                   :timeout-ms lp-timeout-ms
                   :curr-xhr_  (atom nil)
                   :state_     (atom {:type :ajax :open? false
                                      :destroyed? false})}))))

        _ (assert chsk "Failed to create channel socket")
        send-fn (partial chsk-send! chsk)

        public-ch-recv
        (async/map<
          ;; All client-side `event-msg`s go through this (allows client to
          ;; inject arbitrary synthetic events into router for handling):
          (fn ev->ev-msg [ev]
            (let [[ev-id ev-?data :as ev] (as-event ev)]
              {:ch-recv  public-ch-recv
               :send-fn  send-fn
               :state    (:state_ chsk)
               :event    ev
               :id       ev-id
               :?data    ev-?data}))
          public-ch-recv)]

    (when chsk
      {:chsk    chsk
       :ch-recv public-ch-recv ; `ev`s->`ev-msg`s ch
       :send-fn send-fn
       :state   (:state_ chsk)})))

;;;; Router wrapper

(defn start-chsk-router!
  "Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
  `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
  write their own loop against `ch-recv`."
  [ch-recv event-msg-handler & [{:as opts :keys [trace-evs?]}]]
  (let [ch-ctrl (chan)]
    (go-loop []
      (when-not
        (enc/kw-identical? ::stop
          (try
            (let [[v p] (async/alts! [ch-recv ch-ctrl])]
              (if (enc/kw-identical? p ch-ctrl) ::stop
                  (let [{:as event-msg :keys [event]} v]
                  (try
                    (when trace-evs?
                      (tracef "Pre-handler event: %s" event))
                    (if-not (event-msg? event-msg)
                      ;; Shouldn't be possible here, but we're being cautious:
                      (errorf "Bad event: %s" event) ; Log 'n drop
                      (event-msg-handler event-msg))
                    nil
                    (catch
                                     
                             js/Error ; :default ; Temp workaround for [1]
                      t
                      (errorf        
                        "Chsk router handling error: %s" event))))))
            (catch
                             
                     js/Error ; :default [1] Temp workaround for [1]
              t
              (errorf        
                "Chsk router channel error!"))))

        ;; TODO [1]
        ;; @shaharz reported (https://github.com/ptaoussanis/sente/issues/97)
        ;; that current releases of core.async have trouble with :default error
        ;; catching, Ref. http://goo.gl/QFBvfO.
        ;; The issue's been fixed but we're waiting for a new core.async
        ;; release.

        (recur)))
    (fn stop! [] (async/close! ch-ctrl))))

;;;; Deprecated

     
                             
                                                        
                             
                             
                                              
                                                                

      
(defn start-chsk-router-loop!
  "DEPRECATED: Please use `start-chsk-router!` instead."
  [event-handler ch-recv]
  (start-chsk-router! ch-recv
    ;; Old handler form: (fn [ev ch-recv])
    (fn [ev-msg] (event-handler (:event ev-msg) (:ch-recv ev-msg)))))

;;;;;;;;;;;; This file autogenerated from src/taoensso/sente.cljx
