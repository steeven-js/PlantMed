import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Spacing from '../constants/Spacing';
import colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View
      style={{
        padding: Spacing * 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* <Image
            source={require('./assets/images/user/avatar.png')}
            style={{ width: Spacing * 4, height: Spacing * 4 }}
          /> */}
          <Text
            style={{
              fontSize: Spacing * 2,
              marginLeft: Spacing,
              color: colors.primary,
              fontWeight: 'bold',
            }}>
            App Plant
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              padding: Spacing / 2,
            }}>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: Spacing / 2,
            }}>
            <Icon name="menu" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
