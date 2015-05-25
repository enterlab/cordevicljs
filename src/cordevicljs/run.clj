(ns cordevicljs.run
  (:gen-class)
  (:require [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]
            [cordevicljs.config :as config]
            [cordevicljs.system :refer [system]]))

(defn -main [& args]
  (let [config (config/get-config)]
    (component/start (system config))
    (log/info "cordevicljs started")))
