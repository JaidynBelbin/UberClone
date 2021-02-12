import React from 'react';
import {View, Text} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './Home';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const DummyScreen = (props) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>{props.name}</Text>
  </View>
);

// Our root navigator container.
const RootNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Your Trips">
          {() => <DummyScreen name={'Your Trips'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Help">
          {() => <DummyScreen name={'Help'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Wallet">
          {() => <DummyScreen name={'Wallet'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Settings">
          {() => <DummyScreen name={'Settings'} />}
        </Drawer.Screen>
      </Drawer.Navigator>
      {/*<HomeNavigator />*/}
    </NavigationContainer>
  );
};

export default RootNavigator;
