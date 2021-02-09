import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const PlaceRow = ({data}) => {
  const home = data.description === 'Home';
  const work = data.description === 'Work';

  let icon;

  // Conditional styling for the home and work rows
  if (home) {
    icon = (
      <View style={[styles.iconContainer, styles.iconHome]}>
        <Entypo name="home" size={20} color={'white'} />
      </View>
    );
  } else if (work) {
    icon = (
      <View style={[styles.iconContainer, styles.iconWork]}>
        <Entypo name="briefcase" size={20} color={'white'} />
      </View>
    );
  } else {
    icon = (
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={20} color={'white'} />
      </View>
    );
  }

  return (
    <View style={styles.row}>
      {/*// Change styles for home and work: different icon and blue background*/}
      {icon}
      <Text>{data.description || data.vicinity}</Text>
    </View>
  );
};

export default PlaceRow;
