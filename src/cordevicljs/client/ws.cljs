(ns cordevicljs.client.ws
  (:require [taoensso.sente :as sente]))

(defmulti push-msg-handler (fn [[id _]] id)) ; Dispatch on event key which is 1st elem in vector

(defmethod push-msg-handler :cordevicljs/testevent
  [[_ event]]
  (js/console.log "PUSHed :cordevicljs/testevent from server: %s " (pr-str event)))

(defmethod push-msg-handler :chsk/ws-ping
  [[_ event]]
  (js/console.log "ping from server"))

(defmulti event-msg-handler :id) ; Dispatch on event-id
;; Wrap for logging, catching, etc.:

(defmethod event-msg-handler :default ; Fallback
  [{:as ev-msg :keys [event]}]
  (js/console.log "Unhandled event: %s" (pr-str event)))

(defmethod event-msg-handler :chsk/handshake
  [_]
  (js/console.log "Channel socket handshake"))

(defmethod event-msg-handler :chsk/state
  [{:keys [?data]}]
  (let [[_ new-state] ?data]
    (if (-> new-state :first-open? true?)
      (js/console.log "Channel socket successfully established!")
      (js/console.log "Channel socket state change: %s" (pr-str new-state)))))

(defmethod event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (push-msg-handler ?data))

(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (event-msg-handler ev-msg))

(let [packer :edn
      {:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" {:type :auto
                                           :packer packer
                                           :chsk-url-fn (constantly "ws://localhost:8080/chsk")})]
  (def chsk       chsk)
  (def ch-chsk    ch-recv)
  (def chsk-send! send-fn)
  (def chsk-state state))

(sente/start-chsk-router! ch-chsk event-msg-handler*)

(defn test-socket-callback []
  (chsk-send!
    [:cordevicljs/testevent {:message "Hello socket Callback!"}]
    2000
    #(js/console.log "CALLBACK from server: " (pr-str %))))

(defn test-socket-event []
  (chsk-send! [:cordevicljs/testevent {:message "Hello socket Event!"}]))
