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
      showsUserLocation={true}
      initialRegion={{
        latitude: -32.08163,
        longitude: 115.94994,
        latitudeDelta: 0.0121,
        longitudeDelta: 0.0121,
      }}>
      {cars.map((car) => (
        <Marker
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
          key={car.id}>
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: 'contain',
              transform: [
                {
                  /* Will eventually get heading from the GPS directions */
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
