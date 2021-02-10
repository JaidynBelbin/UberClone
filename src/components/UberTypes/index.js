import React from 'react';
import {View} from 'react-native';
import UberTypeRow from '../UberTypeRow';

import typesData from '../../assets/data/types';

const UberTypes = () => {
  return (
    /** For each data type in our file (3), generate an UberTypeRow,
    and pass in the type data as a prop to the component */
    <View>
      {typesData.map((type, id) => (
        <UberTypeRow type={type} key={id} />
      ))}
    </View>
  );
};

export default UberTypes;
