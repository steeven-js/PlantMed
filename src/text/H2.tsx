import React from 'react';
import {Text, TextStyle, Platform} from 'react-native';

import {theme} from '../constants';

type Props = {
  style?: TextStyle;
  numberOfLines?: number;
  children: React.ReactNode;
};

const H2: React.FC<Props> = ({children, style, numberOfLines}): JSX.Element => {
  return (
    <Text
      style={{
        color: theme.colors.mainColor,
        ...theme.fonts.Inter_700Bold,
        fontSize: Platform.OS === 'ios' ? 22 : 20,
        lineHeight: Platform.OS === 'ios' ? 22 * 1.4 : 20 * 1.4,
        textTransform: 'capitalize',
        ...style,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default H2;
