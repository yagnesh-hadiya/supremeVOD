import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,

} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PopUpMenu from './popUpMenu';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {

  return (
    <LinearGradient colors={['#000', '#fff']} style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Image
            source={require('../assets/Images/logoHome.png')}
            style={styles.logo}
          />
          <View style={styles.headerList}>
            <Text style={styles.headerText}>Series</Text>
            <Text style={styles.headerText}>Films</Text>
            <Text style={styles.headerText}>List</Text>
          </View>
          <View style={styles.headerRight}>
            <Icon
              name="search"
              size={20}
              color="black"
              style={{ paddingRight: 10 }}
            />
            <PopUpMenu />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'transparent',
    // zIndex: 999,
    // height:'10%',
    // top:0,
    // position:'relative',
    backgroundColor: 'rgba( 0, 0, 0,0.9)',
  },
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  logo: {
    resizeMode: 'contain',
    width: '18%',
    height: 50,
  },
  headerList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '40%',
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '42%',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },

});
export default Header;
