import React from 'react';
import {View, Text} from 'react-native';

import {theme} from '../constants';

const Error: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          color: theme.colors.mainColor,
          textAlign: 'center',
        }}
      >
        {'Something went wrong'}
      </Text>
    </View>
  );
};

export default Error;
