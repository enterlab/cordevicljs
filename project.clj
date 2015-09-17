(defproject cordevicljs "1.0.0"
  :description "CorDeviCLJS - Cordova, Device and CLJS. Hybrid mobile app using Cordova with native device bridge, UI based on OnsenUI and Facebook React, based on Enterlab Rente"
  :url "http://enterlab.com"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [com.stuartsierra/component "0.2.3"]
                 [environ "1.0.1"]
                 [ch.qos.logback/logback-classic "1.1.3"]
                 [org.clojure/tools.logging "0.3.1"]

                 [ring/ring-core "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [compojure "1.4.0"]
                 [http-kit "2.1.19"]

                 [com.taoensso/sente "1.6.0" :exclusions [org.clojure/tools.reader]]
                 [com.cognitect/transit-clj "0.8.281" :exclusions [commons-codec]]
                 [com.cognitect/transit-cljs "0.8.225"]

                 [reagent "0.5.1"]]

  :plugins [[lein-cljsbuild "1.0.5"]]

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
                   {:dependencies [[org.clojure/tools.namespace "0.2.7"]
                                   [figwheel "0.2.5"]]

                    :plugins [[lein-figwheel "0.2.5" :exclusions [org.clojure/tools.reader org.clojure/clojurescript clj-stacktrace]]
                              [lein-environ "1.0.0"]]

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
                               :port 3449
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
