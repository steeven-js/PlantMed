import React from 'react';
import {Text, TextStyle, Platform} from 'react-native';

import {theme} from '../constants';

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
  numberOfLines?: number;
};

const H3: React.FC<Props> = ({children, style, numberOfLines}): JSX.Element => {
  return (
    <Text
      style={{
        ...theme.fonts.Inter_500Medium,
        ...style,
        color: theme.colors.mainColor,
        lineHeight: 20 * 1.3,
        fontSize: Platform.OS === 'ios' ? 20 : 18,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default H3;
