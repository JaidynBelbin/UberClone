import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchResults from '../screens/SearchResults';
import DestinationSearch from '../screens/DestinationSearch';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

// Our root navigator container.
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'DestinationSearch'} component={DestinationSearch} />
      <Stack.Screen name={'SearchResults'} component={SearchResults} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
