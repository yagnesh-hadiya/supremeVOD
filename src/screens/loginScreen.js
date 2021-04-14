import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');

const LoginScreen = props => {
  return (
    <ImageBackground source={require('../assets/Images/h2.png')} style={styles.image}>
      <KeyboardAvoidingView behavior={'height'} style={styles.keyboard}>
        <View style={styles.loginCardContainer}>
          <View style={styles.loginCard}>
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.textInputWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your access code"
                placeholderTextColor="#fff"
              />
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('HomeScreen')}>
              <View style={styles.submitButton}>
                <Text style={styles.submitText}> Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
    opacity: 0.9,
  },
  loginCardContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  loginCard: {
    marginHorizontal: 30,
    backgroundColor: 'rgba( 0, 0, 0,0.9)',
    alignItems: 'center',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    height: 350,
    width: 300,
  },
  loginText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 35,
  },
  keyboard: {
    flex: 1,
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
    marginTop: 60,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default LoginScreen;
