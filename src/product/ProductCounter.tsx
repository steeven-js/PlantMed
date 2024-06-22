import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import Svg, {Path} from 'react-native-svg';

import {theme} from '../constants';
import {ProductType} from '../types';
import {hooks} from '../hooks';
import {actions} from '../store/actions';

type Props = {item: ProductType};

const ProductCounter: React.FC<Props> = ({item}): JSX.Element => {
  const dispatch = hooks.useAppDispatch();
  // const quantity = quantityInCart(item);

  const addToCartButton = (): JSX.Element => {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 20,
          paddingVertical: 16,
        }}
        onPress={() => {
          dispatch(actions.addToCart(item));
        }}
      >
        <Svg width={10} height={10} fill='none'>
          <Path
            stroke='#4A6973'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.2}
            d='M5 2.083v5.834M2.083 5h5.834'
          />
        </Svg>
      </TouchableOpacity>
    );
  };

  const removeFromCartButton = () => {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 20,
          paddingVertical: 16,
        }}
        onPress={() => {
          dispatch(actions.removeFromCart(item));
        }}
      >
        <Svg width={10} height={10} fill='none'>
          <Path
            stroke='#4A6973'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.2}
            d='M2.157 5H7.99'
          />
        </Svg>
      </TouchableOpacity>
    );
  };

  const renderQty = () => {
    return (
      <Text
        style={{
          fontSize: Platform.OS === 'ios' ? 12 : 10,
          color: theme.colors.textColor,
        }}
      >
        {item.quantity}
      </Text>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {addToCartButton()}
      {renderQty()}
      {removeFromCartButton()}
    </View>
  );
};

export default ProductCounter;
