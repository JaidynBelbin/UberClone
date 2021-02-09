import React from 'react';
import {Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Config from 'react-native-config';

const RouteMap = () => {
  const APIkey = Config.GOOGLE_MAPS_API_KEY;

  const start = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const end = {
    latitude: 28.460267,
    longitude: -16.269045,
  };

  return (
    <MapView
      style={{width: '100%', height: 450}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={start}
        destination={end}
        apikey={APIkey}
        strokeWidth={5}
        strokeColor="#0e92f0"
      />
      <Marker title={'Origin'} coordinate={start} />
      <Marker title={'Destination'} coordinate={end} />
    </MapView>
  );
};

export default RouteMap;
