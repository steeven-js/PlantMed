import React from 'react';
import {View, Text} from 'react-native';

import {utils} from '../utils';
import {theme} from '../constants';
import {ProductType} from '../types';

type Props = {item: ProductType; containerStyle?: object};

const PlantSale: React.FC<Props> = ({
  item,
  containerStyle,
}): JSX.Element | null => {
  if (item.oldPrice) {
    return (
      <View
        style={{
          backgroundColor: '#9AC173',
          borderColor: theme.colors.antiFlashWhite,
          alignSelf: 'flex-end',
          paddingHorizontal: 6,
          paddingVertical: 1,
          borderTopLeftRadius: 6,
          ...containerStyle,
        }}
      >
        <Text
          style={{
            // ...theme.fonts.Hind_700Bold,
            fontSize: 8,
            color: theme.colors.white,
            lineHeight: 8 * 1.7,
            textTransform: 'uppercase',
          }}
        >
          Sale
        </Text>
      </View>
    );
  }

  return null;
};

export default PlantSale;
