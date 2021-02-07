import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Config from 'react-native-config';

const DestinationSearch = () => {
  // State variables to hold the autocomplete text values

  const [originPlace, setFromPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');

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
            setFromPlace({data, details});
          }}
          styles={{
            textInput: styles.placesAutocomplete,
          }}
          query={{
            key: APIkey,
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          styles={{
            textInput: styles.placesAutocomplete,
          }}
          query={{
            key: APIkey,
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
