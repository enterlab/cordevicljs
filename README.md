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

Then in a third tab:

```
cd resources
cordova platform add browser
cordova platform add ios|android
cordova plugin add cordova-plugin-device
cordova plugin add org.apache.cordova.dialogs
cordova plugin add ordova-plugin-splashscreen
```

If you want to test in the browser, you need to remove the splashscreen plugin from the browser platform. To do this, perform the steps below. If you don't care, you can skip directly to testing on devices!

## Test in browser

1. Inside the resources/platforms/browser/www folder, open the cordova_plugins.js file and remove the two references to splashscreen plugin under module.exports.

2. Remove the folder resources/platforms/browser/www/plugins/cordova-plugin-splashscreen

3. Inside the resources/plugins folder, edit the browser.json file and remove the reference to the splashscreen plugin under installed_plugins.

4. Remove the folder resources/plugins/

Then you can test in browser:

```
cordova run browser
```

This should show a mobile flat UI native like interface with a slider menu and a JavaScript alert telling you that Native Device bridge is working.

## Test on devices

Then to test in device emulator:

```
cordova run ios|android
```

Refer to XCode/Android SDK manuals if this won't work.

If it works you should see the same app as before, but this time with a real native dialog instead of a JavaScript alert.


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
