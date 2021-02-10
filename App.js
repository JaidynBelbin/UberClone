/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {PermissionsAndroid, StatusBar, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import Router from './src/navigation/Root';

navigator.geolocation = require('@react-native-community/geolocation');

const App: () => React$Node = () => {
  // Getting Android location permissions on start up
  const androidPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission Request',
          message:
            'We need to access your location to display cars ' +
            'near you and so you can track your route.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the users location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      // Request Android permissions
      androidPermissions();
    } else {
      // request iOS permissions
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
