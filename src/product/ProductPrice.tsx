import React, {PropsWithChildren} from 'react';
import {View, Text, ViewStyle, Platform} from 'react-native';

import {theme} from '../constants';
import {ProductType} from '../types';

type Props = PropsWithChildren<{item: ProductType; containerStyle?: ViewStyle}>;

const ProductPrice: React.FC<Props> = ({item, containerStyle}): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      {item.oldPrice && (
        <Text
          style={{
            marginRight: 4,
            color: theme.colors.textColor,
            textDecorationLine: 'line-through',
            ...theme.fonts.DM_Sans_400Regular,
            fontSize: Platform.OS === 'ios' ? 12 : 10,
            lineHeight: Platform.OS === 'ios' ? 12 * 1.5 : 10 * 1.5,
          }}
          numberOfLines={1}
        >
          ${item.oldPrice}
        </Text>
      )}
      <Text
        style={{
          fontSize: Platform.OS === 'ios' ? 14 : 12,
          ...theme.fonts.DM_Sans_500Medium,
          lineHeight: Platform.OS === 'ios' ? 14 * 1.5 : 12 * 1.5,
          color: theme.colors.mainColor,
        }}
        numberOfLines={1}
      >
        ${item.price}
      </Text>
    </View>
  );
};

export default ProductPrice;
