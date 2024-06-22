import React from 'react';
import {View, StatusBar, ViewStyle, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {theme} from '../constants';

type SafeAreaViewProps = {
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  statusBarColor?: string;
  children: React.ReactNode;
  insets?: ('top' | 'bottom' | 'left' | 'right')[];
  statusBarStyle?: 'default' | 'light-content' | 'dark-content';
};

const SafeAreaView: React.FC<SafeAreaViewProps> = ({
  children,
  style,
  insets = [],
  statusBarColor = 'transparent',
  statusBarStyle = 'dark-content',
}) => {
  const safeAreaInsets = useSafeAreaInsets();

  const containerStyle: ViewStyle = {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: insets.includes('top') ? safeAreaInsets.top : 0,
    paddingBottom: insets.includes('bottom') ? safeAreaInsets.bottom : 0,
    paddingLeft: insets.includes('left') ? safeAreaInsets.left : 0,
    paddingRight: insets.includes('right') ? safeAreaInsets.right : 0,
    ...style,
  };

  return (
    <View style={containerStyle}>
      <StatusBar
        backgroundColor={Platform.OS === 'android' ? statusBarColor : undefined}
        barStyle={statusBarStyle}
        translucent={Platform.OS === 'android'}
      />
      {children}
    </View>
  );
};

export default SafeAreaView;
