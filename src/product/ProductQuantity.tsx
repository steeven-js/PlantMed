import React from 'react';
import {View, Text, ViewStyle, Platform} from 'react-native';

import {theme} from '../constants';

type Props = {
  quantity: number;
  containerStyle?: ViewStyle;
};

const ProductQuantity: React.FC<Props> = ({quantity, containerStyle}) => {
  return (
    <View style={{...containerStyle}}>
      <View
        style={{
          backgroundColor: theme.colors.mainColor,
          borderRadius: 50,
          paddingHorizontal: 6,
          paddingVertical: 2,
          minWidth: 16,
          height: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: theme.colors.white,
            fontSize: Platform.OS === 'ios' ? 8 : 7,
            ...theme.fonts.DM_Sans_700Bold,
          }}
        >
          {quantity}
        </Text>
      </View>
    </View>
  );
};

export default ProductQuantity;
