import React from 'react';
import {Image, FlatList, View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars.js';

const HomeMap = () => {
  // Function that retrieves the image depending on the type
  // of car passed in to UberTypeRow
  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
  };

  return (
    <MapView
      style={{width: '100%', height: 450}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map((car) => (
        <Marker
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
          key={car.id}>
          <Image
            style={{width: 60, height: 60, resizeMode: 'contain'}}
            source={getImage(car.type)}
          />
        </Marker>
      ))}

      <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
        <Image
          style={{width: 50, height: 50, resizeMode: 'contain'}}
          source={require('../../assets/images/top-UberX.png')}
        />
      </Marker>
    </MapView>
  );
};

export default HomeMap;
