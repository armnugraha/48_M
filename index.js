/**
 * @format
 */

import {AppRegistry} from 'react-native';
// fix
import App from './App';
// import App from './src2/App';
// import App from './src/screens/MainActivity/index';
// import App from './App1';
// import App from './AppGeolocation';
// import App from './AppDownload';
// import App from './AppOfflineMap';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);