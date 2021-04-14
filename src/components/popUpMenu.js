import {MenuProvider} from 'react-native-popup-menu';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const PopUpMenu = () => {
  return (
    <MenuProvider >
      <Menu>
        <MenuTrigger text={<Icon name="search" size={20} color="#5751D9" />} />
        <MenuOptions disabled={true}>
          <Text style={{color: 'red', width: 50, backgroundColor: 'gray'}}>
            save
          </Text>
          <Text style={{color: 'red', width: 50, backgroundColor: 'gray'}}>
            Delete
          </Text>
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};
export default PopUpMenu;
