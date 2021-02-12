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

  const {originPlace, destinationPlace} = route.params;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
        <UberTypes />
      </View>

      <Pressable onPress={confirm} style={styles.confirmButton}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default SearchResults;
