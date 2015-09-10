## Usage

Clone, and cd into the `cordevicljs` folder.

```
lein figwheel
```

Wait for figwheel to finish and notify browser of changed files!

Then in another terminal tab:

```
lein run
```

Be sure to have the [Apache Cordova CLI](http://cordova.apache.org/docs/en/5.0.0/guide_cli_index.md.html) installed and then in a third tab:

```
cd resources
cordova platform add browser
cordova platform add ios|android
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-dialogs
cordova plugin add cordova-plugin-splashscreen
```

If the plugins return 404s, you can try installing directly from git

```
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git
```

If you want to test in the browser, you need to remove the splashscreen plugin from the browser platform. To do this, perform the steps below. If you don't care, you can skip directly to testing on devices!

## Test in browser

1. Inside the resources/platforms/browser/www folder, open the cordova_plugins.js file and remove the two references to splashscreen plugin under module.exports.

2. Remove the folder resources/platforms/browser/www/plugins/cordova-plugin-splashscreen

3. Inside the resources/plugins folder, edit the browser.json file and remove the reference to the splashscreen plugin under installed_plugins.

Now you can test in browser. Still in `resources`, where `config.xml` resides, run

```
cordova run browser
```

This should show a mobile flat UI native like interface with a slider menu and a JavaScript alert telling you that Native Device bridge is working.

(If you are running linux you have to patch `platforms/browser/cordova/run` as documented here http://stackoverflow.com/questions/29730482)

## Test on device emulators

Then to test in device emulator:

```
cordova run ios|android
```

Refer to XCode/Android SDK manuals if this won't work.

If it works you should see the same app as before, but this time with a real native dialog instead of a JavaScript alert.

## Test on real device

```
cordova run ios|android --device
```

It's that simple! :)

## Comments & Suggestions

Please don't hesitate to contact us if you have any questions/suggestions etc.!

## From Rente to CorDeviCLJS

If you want to know all the steps we've went through to convert Rente to CorDeviCLJS, read cordevicljs-howto.textile (might be converted to Markdown at some point).

## Special Thanks goes to

Ourselves - CorDeviCLJS is based on Enterlab Rente, which can be found here:
https://github.com/enterlab/rente.

And the people enabling the tech that Rente is based upon (see Special Thanks in the Rente README for further info).

## License

Copyright © Enterlab 2015

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
