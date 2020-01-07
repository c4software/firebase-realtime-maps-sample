# firebase-realtime-maps-sample

Sample application to show the Realtime aspect of Firebase with Leaflet and realtime marker sync.

![Maps Sample](./carte_marker.png)

## Configure your Firebase Database

In order to make this sample to work you have to edit the configuration file. This file is located in `./src/config/firebase.js`. After editing its should look like to something like :

```js
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

export default config;
```

All this value can be found in your Firebase Project Settings.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```
