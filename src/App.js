import React, { Component } from 'react';
// import Router from './libs/Routers';
import Router from './Navigation/AppNavigation';
import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';

export default class App extends Component {

  render () {
    return (
      <Router/>
    );
  }
}

// AppRegistry.registerComponent(appName, () => App)