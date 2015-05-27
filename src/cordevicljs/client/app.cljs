(ns cordevicljs.client.app
    (:require-macros [cljs.core.async.macros :refer [go-loop]])
    (:require [reagent.core :as reagent]
              [reagent-onsenui.core :as onsen]
              [cordevicljs.client.views :as views]
              [cordevicljs.client.ws :as ws]))

;; State used for Reagent Components
(defonce state (reagent/atom {:title "CorDeviCLJS"
                              :messages []
                              :re-render-flip false}))

;; Event handler for Web socket (TODO: Move out)
(defmulti handle-event (fn [data [ev-id ev-data]] ev-id))

(defmethod handle-event :default
  [data [_ msg]]
  (swap! data update-in [:messages] #(conj % msg)))

;; Main Reagent Component
(defn app [data]
  (:re-render-flip @data)
  [views/main data])

;; To be called when Cordova Device is ready
(defn ^:export onDeviceReady []  
  (-> (js* "navigator")
    (.-notification)
      (.alert "Device Native Bridge works!"
      (fn [] nil)
      ""
      "")))

;; Listen for Cordova Device Ready event
(defn ^:export prepare-device []
  (.addEventListener js/document "deviceready" onDeviceReady true))

;; App main entry point
(defn ^:export main []
  (onsen/app "app" app "app" state prepare-device))
