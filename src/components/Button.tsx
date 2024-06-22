import {
  View,
  Text,
  Platform,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import {theme} from '../constants';

type Props = {
  loading?: boolean;
  title: string;
  onPress?: () => void;
  textStyle?: TextStyle;
  transparent?: boolean;
  containerStyle?: ViewStyle;
  touchableOpacityStyle?: ViewStyle;
};

const Button: React.FC<Props> = ({
  title,
  loading = false,
  onPress,
  textStyle,
  containerStyle,
  transparent = false,
  touchableOpacityStyle,
}): JSX.Element => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          borderRadius: 25,
          borderColor: theme.colors.textColor,
          backgroundColor: transparent ? theme.colors.transparent : '#50858B',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          ...touchableOpacityStyle,
        }}
        onPress={onPress}
      >
        {loading && (
          <ActivityIndicator
            color={transparent ? theme.colors.mainColor : theme.colors.white}
            size='small'
          />
        )}
        {!loading && (
          <Text
            style={{
              textTransform: 'capitalize',
              fontSize: Platform.OS === 'ios' ? 14 : 12,
              color: transparent ? theme.colors.white : theme.colors.white,
              ...textStyle,
              ...theme.fonts.DM_Sans_700Bold,
            }}
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Button);
