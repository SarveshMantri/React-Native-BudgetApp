import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  // Navigator Header
  headercontainer: {
    alignItems: 'center',
    marginVertical: 25,
  },
  buttonContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 15,
  },
  headerButton: {
    flex: 1,
    marginHorizontal: 10,
  },
  // screen
  container: {
    margin: 15,
  },

  // New Budget Screen
  textInput: {
    marginVertical: 15,
  },
  button: {
    marginVertical: screenWidth * 0.2,
  },
});

export default styles;
