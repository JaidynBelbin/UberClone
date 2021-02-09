import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  autocompleteInput: {
    padding: 15,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    marginLeft: 20,
  },
  topListView: {
    position: 'absolute',
    top: 114,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 30,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 55,
    backgroundColor: 'black',
    position: 'absolute',
    top: 40,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 100,
    left: 15,
  },
});

export default styles;
