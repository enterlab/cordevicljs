(ns cordevicljs.app
  (:require [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]
            [cordevicljs.ws :as ws]))

(defrecord App [ws-connection]
  component/Lifecycle
  (start [component]
    (log/debug "Application logic started")
    component)
  (stop [component]
    (log/debug "Application logic stopped")
    component))

(defn new-app []
  (map->App {}))
