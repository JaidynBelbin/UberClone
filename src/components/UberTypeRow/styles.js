import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 70,
    width: 90,
    resizeMode: 'contain',
    marginRight: 10,
  },
  middleContainer: {
    flex: 1,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  time: {
    color: '#5d5d5d',
  },
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 7,
  },
});

export default styles;
