import { View, Text, TextInput } from 'react-native';
import React from 'react';
import SPACING from '../constants/Spacing';
import colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.light,
        marginVertical: SPACING * 2,
        paddingHorizontal: SPACING * 1.5,
        borderRadius: SPACING,
      }}>
      <Icon name="search" color={colors.primary} size={SPACING * 2.7} /> 
      <TextInput
        placeholder="Quelle plante cherchez-vous?"
        placeholderTextColor={colors.primary}
        style={{
          color: colors.primary,
          fontSize: SPACING * 2,
          marginLeft: SPACING,
          borderColor: colors.darkText,
          borderWidth: 1,
          borderRadius: SPACING,
          height: SPACING * 4,
        }}
      />
    </View>
  );
};

export default SearchBar;