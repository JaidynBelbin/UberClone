import React from 'react';
import {View, Text} from 'react-native';

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
