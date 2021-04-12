import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  Platform
} from 'react-native';
const {height, width} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/images/h2.png')}
        style={styles.image}>
        <View style={styles.loginCard}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.textInputWrapper}>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.submitButton}>
            <Text style={styles.submitText}> Submit</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
    // opacity: 0.9,
  },
  loginCard: {
    marginHorizontal: 30,
    backgroundColor: 'rgba( 0, 0, 0,0.9)',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 350,
  },
  loginText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 35,
  },
  textInputWrapper: {
    backgroundColor: '#6D6D6D',
    padding: Platform.OS === 'ios' ? 15 : 0,
    borderRadius: 10,
    width: 230,
    height: 52,
  },
  textInput: {
    color: '#fff',
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 10,
    width: 230,
    marginTop: 50,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;