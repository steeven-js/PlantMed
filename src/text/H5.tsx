import React from 'react';
import {Text, TextStyle} from 'react-native';

import {theme} from '../constants';

type Props = {
  style?: TextStyle;
  numberOfLines?: number;
  children: React.ReactNode;
};

const H5: React.FC<Props> = ({children, style, numberOfLines}): JSX.Element => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        ...theme.fonts.Inter_600SemiBold,
        ...style,
        color: theme.colors.mainColor,
      }}
    >
      {children}
    </Text>
  );
};

export default H5;
