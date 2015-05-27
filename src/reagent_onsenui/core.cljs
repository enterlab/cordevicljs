(ns reagent-onsenui.core
  (:require [reagent.core :as reagent]))

(defn component
  "Creates an OnsenUI aware Reagent/React Component.
   @param component The standard Reagent Component to make OnsenUI-aware
   @param dom-id The ID of the DOM element to make OnsenUI-aware
   @param callback Optional callback fn to invoke after the Component has been mounted by Reagent/React"
  [reagent-component dom-id & [callback]]
  (with-meta reagent-component
    {:component-did-mount
     (fn [this]
      (.compile js/ons (.getElementById js/document dom-id))
      (when callback (callback)))}))

(defn render
  "Renders an OnsenUI Component into the HTML DOM.
   @param reagent-component The standard Reagent Component to make OnsenUI-aware
   @param dom-id The ID of the DOM element to make OnsenUI-aware
   @state-wrapper The Reagent Atom/cursor/wrapper to use for Reagent Component state
   @param callback Optional callback fn to invoke after the Component has been mounted by Reagent/React"
  [reagent-component dom-id state-wrapper & [callback]]
  (reagent/render-component
    [(component reagent-component dom-id callback) state-wrapper]
     (.getElementById js/document dom-id)))

(defn app
  "Initializes an OnsenUI backed Reagent App into the HTML DOM.
   @angular-app-id The ID of the angular app (ng-app) to hookup with (OnsenUI uses AngularJS behind the scenes). E.g. <html ng-app='app'>
   @param reagent-component The standard Reagent Component to make OnsenUI-aware
   @param reagent-id The ID of the DOM element to mount the root Reagent Component into
   @state-wrapper The Reagent Atom/cursor/wrapper to use for Reagent Component state
   @param callback Optional callback fn to invoke after the Component has been mounted by Reagent/React. A common usage is prepare-device or similar that hooks up listeners such as deviceready from Cordova"
  [angular-app-id reagent-component reagent-id state-wrapper & [callback]]
  (.module (.-angular js/window) angular-app-id #js ["onsen"])
  (.ready js/ons
    (fn []
      (render reagent-component reagent-id state-wrapper callback))))

