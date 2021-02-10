import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const HomeSearch = () => {
  const navigation = useNavigation();

  return (
    <View>
      {/* Input box */}
      <Pressable
        onPress={() => navigation.navigate('DestinationSearch')}
        style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </Pressable>

      {/* Last destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#fff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>

      {/* Home destination */}

      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name={'home'} size={16} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
