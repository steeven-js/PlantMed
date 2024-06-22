import React from 'react';
import {PropsWithChildren} from 'react';
import {View, ViewStyle} from 'react-native';

import {theme} from '../constants';

type Props = PropsWithChildren<{
  containerStyle?: ViewStyle;
  children: React.ReactNode;
}>;

const Container: React.FC<Props> = ({containerStyle, children}) => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.imageBackground,
        padding: 20,
        borderRadius: 15,
        ...containerStyle,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
