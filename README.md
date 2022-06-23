# Get project
## Download ZIP
https://chamilo.iut2.univ-grenoble-alpes.fr/main/lp/lp_controller.php?cidReq=INFOMIAMINFO1&id_session=0&gidReq=0&gradebook=0&origin=&action=view&lp_id=2205

## Run setup commands in unzipped folder
```bash
npm i -g ionic@4
npm i
ionic build
ionic cordova platform add android@9
ionic cordova platform add browser # Necessary for camera plugin
```

## Plugins
### Camera plugin
```bash
ionic cordova plugin add cordova-plugin-camera 
npm install @ionic-native/camera --force
```

### Toast plugin
```bash
ionic cordova plugin add cordova-plugin-x-toast 
npm install @ionic-native/toast@4 --force
```

### InAppBrowser (deletion slider)
```bash
ionic cordova plugin add cordova-plugin-inappbrowser
npm i @ionic-native/in-app-browser --force
```

###
```bash
ionic cordova plugin add cordova-plugin-nativestorage
npm i @ionic-native/native-storage --force
```

# Start project
## Default (Camera won't work on browser)
```bash
ionic serve
```

## Browser
```bash
ionic cordova run browser
```

## Android
```bash
ionic cordova run android
```