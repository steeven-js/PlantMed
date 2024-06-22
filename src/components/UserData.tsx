import React from 'react';
import {View, Text, TouchableOpacity, Platform, ViewStyle} from 'react-native';

import {utils} from '../utils';
import {hooks} from '../hooks';
import {theme} from '../constants';

type Props = {
  onPress?: () => void;
  containerStyle?: ViewStyle;
};

const UserData: React.FC<Props> = ({containerStyle, onPress}) => {
  const navigation = hooks.useAppNavigation();
  const user = hooks.useAppSelector(state => state.userSlice.user);
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: utils.responsiveHeight(30),
        backgroundColor: theme.colors.imageBackground,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 15,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <View>
        <Text
          style={{
            ...theme.fonts.Inter_600SemiBold,
            textTransform: 'capitalize',
            color: theme.colors.mainColor,
            fontSize: Platform.OS === 'ios' ? 14 : 12,
            marginBottom: utils.responsiveHeight(6),
          }}
          numberOfLines={1}
        >
          {user?.name}
        </Text>
        <Text
          style={{
            ...theme.fonts.DM_Sans_400Regular,
            color: theme.colors.textColor,
            fontSize: Platform.OS === 'ios' ? 14 : 12,
          }}
          numberOfLines={1}
        >
          {user?.email}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserData;
