import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useRoute} from '@react-navigation/native';
import UberTypes from '../../components/UberTypes';
import RouteMap from '../../components/RouteMap';
import styles from './styles';

const SearchResults = () => {
  const confirm = () => {
    console.warn('Confirmed');
  };

  const route = useRoute();

  if (route.params) {
    console.warn('Data received!');

    // Do something with these two locations: show on map, draw route between them
    // maybe find time?
  }
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <RouteMap />
        <UberTypes />
      </View>

      <Pressable onPress={confirm} style={styles.confirmButton}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default SearchResults;
