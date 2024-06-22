import {View, Text, ViewStyle} from 'react-native';
import React from 'react';

import {theme} from '../constants';

type Props = {
  containerStyle?: ViewStyle;
};

const ProductSaleBadge: React.FC<Props> = ({containerStyle}) => {
  return (
    <View style={{...containerStyle}}>
      <View
        style={{
          backgroundColor: theme.colors.pastelMint,
          alignSelf: 'flex-start',
          paddingVertical: 1,
          paddingHorizontal: 6,
          borderRadius: 50,
        }}
      >
        <Text
          style={{
            ...theme.fonts.DM_Sans_700Bold,
            fontSize: 8,
            lineHeight: 8 * 1.7,
            textTransform: 'uppercase',
            color: theme.colors.steelTeal,
          }}
          numberOfLines={1}
        >
          sale
        </Text>
      </View>
    </View>
  );
};

export default ProductSaleBadge;
