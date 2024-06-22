import {Text, TextStyle, Platform} from 'react-native';
import React from 'react';

import {theme} from '../constants';

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
  numberOfLines?: number;
};

const H4: React.FC<Props> = ({children, numberOfLines, style}): JSX.Element => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        ...theme.fonts.Inter_500Medium,
        ...style,
        fontSize: Platform.OS === 'ios' ? 18 : 16,
        color: theme.colors.mainColor,
      }}
    >
      {children}
    </Text>
  );
};

export default H4;
