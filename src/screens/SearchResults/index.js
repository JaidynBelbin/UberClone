import React from 'react';
import {View, Text, Pressable} from 'react-native';
import UberTypes from '../../components/UberTypes';
import RouteMap from '../../components/RouteMap';

const SearchResults = () => {
  const confirm = () => {
    console.warn('Confirmed');
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <RouteMap />
        <UberTypes />
      </View>

      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          height: 50,
          padding: 10,
          margin: 10,
          borderRadius: 25,
          marginBottom: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default SearchResults;
