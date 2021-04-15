import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, StatusBar, ScrollView, ImageBackground } from 'react-native';
import Header from '../components/header';

const { height, width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <>
      <StatusBar translucent={false} backgroundColor='transparent' hidden={true} />
      <Header />

      <ScrollView >
        <View style={styles.container}>
          <ImageBackground source={require('../assets/Images/homebg.png')} style={{ width: width, resizeMode: 'contain',height: 240,}}  >

          </ImageBackground>
          {/* <Image source={require('../assets/Images/loginBg.png')} /> */}
        </View>
      </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    // flex:1,
  },
})
export default HomeScreen;