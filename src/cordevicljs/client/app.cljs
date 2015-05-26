(ns cordevicljs.client.app
    (:require-macros [cljs.core.async.macros :refer [go-loop]])
    (:require [reagent.core :as reagent]
              [cordevicljs.client.views :as views]
              [cordevicljs.client.ws :as ws]))

(defonce state (reagent/atom {:title "cordevicljs"
                              :messages []
                              :re-render-flip false}))

;; OnsenUI Interop

(defn ons-component [component dom-id & [callback]]
  (with-meta component
    {:component-did-mount
     (fn [this]
      (.compile js/ons (.getElementById js/document dom-id))
      (when callback (callback)))}))

(defn ons-render [component dom-id state-wrapper & [callback]]
  (reagent/render-component
    [(ons-component component dom-id callback) state-wrapper]
     (.getElementById js/document dom-id)))

(defmulti handle-event (fn [data [ev-id ev-data]] ev-id))

(defmethod handle-event :default
  [data [_ msg]]
  (swap! data update-in [:messages] #(conj % msg)))

(defn app [data]
  (:re-render-flip @data)
  [views/main data])

(defn ^:export onDeviceReady []  
  (-> (js* "navigator")
    (.-notification)
      (.alert "Device Native Bridge works!"
      (fn [] nil)
      ""
      "")))

(defn ^:export prepare-device []
  (.addEventListener js/document "deviceready" onDeviceReady true))

(defn ^:export main []
  (.module (.-angular js/window) "app" #js ["onsen"])
  (.ready js/ons
    (fn []
      (ons-render app "app" state)
      (prepare-device))))
