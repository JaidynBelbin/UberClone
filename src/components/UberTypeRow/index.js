import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = (props) => {
  // Pulling the data out of the prop
  const {type} = props;

  // Function that retrieves the image depending on the type
  // of car passed in to UberTypeRow
  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../../assets/images/Comfort.jpeg');
    }
    return require('../../assets/images/UberXL.jpeg');
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} {'  '}
          <Ionicons name={'person'} size={14} />3
        </Text>
        <Text style={styles.time}>8:03pm drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#309430'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;
