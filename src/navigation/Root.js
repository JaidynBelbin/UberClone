import React from 'react';
import {View, Text} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchResults from '../screens/SearchResults';
import DestinationSearch from '../screens/DestinationSearch';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

// Our root navigator container.
const RootNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen
          name={'DestinationSearch'}
          component={DestinationSearch}
        />
        <Stack.Screen name={'SearchResults'} component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
