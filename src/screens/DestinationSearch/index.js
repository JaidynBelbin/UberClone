import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Config from 'react-native-config';
import PlaceRow from './PlaceRow';

const DestinationSearch = () => {
  // State variables to hold the autocomplete text values

  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');

  const homePlace = {
    description: 'Home',
    geometry: {location: {lat: -32.08163, lng: 115.94994}},
  };

  const workPlace = {
    description: 'Work',
    geometry: {location: {lat: -32.11159, lng: 115.93554}},
  };

  const APIkey = Config.GOOGLE_MAPS_API_KEY;

  // Navigates to results page when both input fields are filled.
  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results page');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          currentLocation={true}
          currentLocationLabel="Current location"
          predefinedPlaces={[homePlace, workPlace]}
          styles={{
            textInput: styles.autocompleteInput,
            container: {
              ...styles.autocompleteContainer,
              top: 10,
            },
            listView: styles.topListView,
          }}
          fetchDetails
          query={{
            key: APIkey,
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          styles={{
            textInput: {
              ...styles.autocompleteInput,
              color: 'black',
            },
            container: {
              ...styles.autocompleteContainer,
              top: 70,
            },
          }}
          fetchDetails
          query={{
            key: APIkey,
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        <View style={styles.circle} />
        <View style={styles.line} />
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
