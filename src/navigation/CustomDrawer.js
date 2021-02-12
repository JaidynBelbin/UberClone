import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
//import userImage from '../assets/images/my-pic.jpeg';

const CustomDrawer = (props) => {
  const userImage = require('../assets/images/my-pic.jpeg');
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: '#212121',
          padding: 10,
          marginBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 55,
              height: 55,
              borderRadius: 50,
              marginRight: 10,
            }}
            source={userImage}
          />

          <View>
            <Text style={{color: 'white', fontSize: 24}}>Jaidyn Belbin</Text>
            <Text style={{color: 'lightgray', fontSize: 16}}>5.00 *</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#919191',
            borderTopWidth: 1,
            borderTopColor: '#919191',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Pressable onPress={() => console.warn('Messages pressed')}>
            <Text
              style={{
                color: '#ddd',
                paddingVertical: 5,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Messages
            </Text>
          </Pressable>
        </View>
        <Pressable onPress={() => console.warn('Do more pressed')}>
          <Text style={{color: '#ddd', paddingVertical: 5}}>
            Do more with your account >
          </Text>
        </Pressable>

        <Pressable onPress={() => console.warn('Money pressed')}>
          <Text style={{color: 'white', paddingVertical: 5}}>
            Make money driving >
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
