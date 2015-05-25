(ns cordevicljs.system
  (:require [com.stuartsierra.component :as component]
            [cordevicljs.ws :as ws]
            [cordevicljs.server :as server]
            [cordevicljs.app :as app]))

(defn system [config]
  (component/system-map
   :ws-connection
   (ws/new-ws-connection)
   :http-server
   (component/using (server/new-http-server (:port config)) [:ws-connection])
   :app
   (component/using (app/new-app) [:ws-connection])))
