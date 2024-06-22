import React from 'react';
import {View, Text, TouchableOpacity, ViewStyle, Platform} from 'react-native';

interface Props {
  title: string;
  icon?: JSX.Element;
  onPress?: () => void;
  emailVerify?: boolean;
  goNavigation?: boolean;
  containerStyle?: ViewStyle;
}

import {svg} from '../assets/svg';
import {theme} from '../constants';

const ProfileItem: React.FC<Props> = ({
  icon,
  title,
  onPress,
  goNavigation,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 14,
        borderColor: '#E7EBEB',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomStartRadius: 10,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {icon}
      <Text
        style={{
          ...theme.fonts.DM_Sans_400Regular,
          fontSize: Platform.OS === 'ios' ? 16 : 14,
          color: theme.colors.mainColor,
          marginLeft: 14,
          lineHeight: 16 * 1.7,
        }}
      >
        {title}
      </Text>
      {onPress && goNavigation && (
        <View style={{marginLeft: 'auto'}}>
          <svg.RightArrowSvg />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ProfileItem;
