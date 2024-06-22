import React from 'react';
import {Text, TextStyle, Platform} from 'react-native';

import {theme} from '../constants';

type Props = {
  style?: TextStyle;
  children: React.ReactNode;
  numberOfLines?: number;
};

const H1: React.FC<Props> = ({children, style, numberOfLines}): JSX.Element => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        fontSize: Platform.OS === 'ios' ? 32 : 28,
        lineHeight: Platform.OS === 'ios' ? 32 * 1.3 : 28 * 1.3,
        color: theme.colors.mainColor,
        ...theme.fonts.Inter_700Bold,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default H1;
