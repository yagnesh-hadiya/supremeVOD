import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import Popover, {PopoverPlacement} from 'react-native-popover-view';
import {Country} from '../data/data';

const HomeScreen = () => {
  const [language, setLanguage] = useState([]);
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
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
              style={{paddingRight: 10}}
            />
            {
              <Popover
              onPress={()=>visible}
                arrowStyle={{backgroundColor: '#000'}}
                isVisible={visible}
                placement={PopoverPlacement.BOTTOM}
                from={
                  <TouchableOpacity
                    style={styles.country}
                    onPress={() => setVisible(true)}>
                    {/* <Image
                      source={
                        language === item.name
                         
                      }
                      style={styles.countryImg}
                    /> */}
                    <Icon name="chevron-down-outline" size={20} color="black" />
                  </TouchableOpacity>
                }>
                <View style={styles.countryPopUp}>
                  <Text style={styles.textLanuages}>Choose App Language</Text>
                  {Country.map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          setLanguage(item.name), setVisible(false);
                        }}>
                        <View style={styles.countryPopUpItem}>
                          <Image
                            source={item.image}
                            style={styles.countryImg}
                          />
                          <Text style={styles.textItemLanuages}>
                            {item.name}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </Popover>
            }
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  country: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryImg: {
    height: 25,
    width: 30,
  },
  countryPopUp: {
    padding: 10,
    backgroundColor: '#000',
  },
  textLanuages: {
    color: '#fff',
    fontSize: 11,
  },
  countryPopUpItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  textItemLanuages: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 15,
  },
});
export default HomeScreen;
