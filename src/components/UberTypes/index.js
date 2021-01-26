import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRow';

import typesData from '../../assets/data/types';

const UberTypes = () => {
  return (
    /** For each data type in our file (3), generate an UberTypeRow,
    and pass in the type data as a prop to the component */
    <View>
      {typesData.map((type) => (
        <UberTypeRow type={type} />
      ))}
    </View>
  );
};

export default UberTypes;
