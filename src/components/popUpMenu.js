import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Popover, { PopoverPlacement } from 'react-native-popover-view';
import { Country } from '../data/data';

const PopUpMenu = () => {
  const [language, setLanguage] = useState(require('../assets/Images/english.png'));
  const [visible, setVisible] = useState(false);
  return (

    <Popover
      onPress={() => visible}
      arrowStyle={{ backgroundColor: '#000' }}
      isVisible={visible}
      placement={PopoverPlacement.BOTTOM}
      from={
        <TouchableOpacity
          style={styles.country}
          onPress={() => setVisible(true)}>
          <Image
            source={language}
            style={styles.countryImg}
          />
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
                setLanguage(item.image), setVisible(false);
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
  );
};
const styles = StyleSheet.create({
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
export default PopUpMenu;
