import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loader: React.FC = (): JSX.Element => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator
        size='large'
        color='black'
      />
    </View>
  );
};

export default Loader;
