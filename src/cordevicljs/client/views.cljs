(ns cordevicljs.client.views
  (:require [cordevicljs.client.ws :as socket]))

(defn footer []
  [:ons-row {:style {:margin-top "10px" :text-align "center"}}
    [:ons-col
      [:p {:style {:color "#999" :font-size "13px"}}
        "Click top left icon to close/open menu"
        [:br]
        "You can also swipe the page left/right."]]])

(defn main [data]
  [:div
   [:span "Hello Clojure World!"]
   [:br][:br]
   [:ons-button  {:modifier "large" :on-click socket/test-socket-callback} "Send Callback"]
   [:br][:br]
   [:ons-button {:modifier "large" :on-click socket/test-socket-event} "Send Event"]
   [footer]])

