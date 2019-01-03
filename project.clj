(defproject cordevicljs "1.1"
  :description "CorDeviCLJS - Cordova, Device and ClojureScript. Hybrid mobile app using Cordova with native device bridge, App connecting to backend (included) via websocket. UI based on OnsenUI and Facebook React, based on Enterlab Rente"
  :url "http://enterlab.com"
  :min-lein-version "2.8.3"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.439"]
                 [org.clojure/core.async "0.4.490"]
                 [com.stuartsierra/component "0.4.0"]
                 [environ "1.1.0"]
                 [ch.qos.logback/logback-classic "1.2.3"]
                 [org.clojure/tools.logging "0.4.1"]

                 [ring/ring-core "1.7.1"]
                 [ring/ring-defaults "0.3.2"]
                 [compojure "1.6.1"]
                 [http-kit "2.4.0-alpha2"]

                 [com.taoensso/sente "1.13.1"]
                 [com.cognitect/transit-clj "0.8.313"]
                 [com.cognitect/transit-cljs "0.8.256"]

                 [reagent "0.8.1"]]

  :plugins [[lein-cljsbuild "1.1.7"]]

  :source-paths ["src"]
  :resource-paths ["resources" "resources-index/prod"]
  :target-path "target/%s"

  :main ^:skip-aot cordevicljs.run

  :cljsbuild
  {:builds
   {:client {:source-paths ["src/cordevicljs/client" "src/reagent_onsenui"]
             :compiler
             {:output-to "resources/www/js/app.js"
              :output-dir "resources/www/js/out"}}}}

  :profiles {:dev-config {}

             :dev [:dev-config
                   {:dependencies [[org.clojure/tools.namespace "0.2.11"]
                                   [figwheel "0.5.18"]]

                    :plugins [[lein-figwheel "0.5.18"]]

                    :source-paths ["dev"]
                    :resource-paths ^:replace
                    ["resources" "dev-resources" "resources-index/dev"]

                    :cljsbuild
                    {:builds
                     {:client {:source-paths ["dev"]
                               :compiler
                               {:optimizations :none
                                :source-map true}}}}

                    :figwheel {:http-server-root "www"
                               :server-port 3449
                               :repl false
                               :css-dirs ["resources/www/css"]}}]

             :prod {:cljsbuild
                    {:builds
                     {:client {:compiler
                               {:optimizations :advanced
                                :pretty-print false}}}}}}

  :aliases {"package"
            ["with-profile" "prod" "do"
             "clean" ["cljsbuild" "once"]]})
