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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SearchResults />
    </>
  );
};

export default App;
