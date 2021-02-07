/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';
import HomeMap from './src/components/HomeMap';
import DestinationSearch from './src/screens/DestinationSearch';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </>
  );
};

export default App;
