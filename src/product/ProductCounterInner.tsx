import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {View, Text, TouchableOpacity, Platform} from 'react-native';

import {hooks} from '../hooks';
import {theme} from '../constants';
import {ProductType} from '../types';
import {actions} from '../store/actions';

type Props = {item: ProductType};

const renderMinusSvg = () => (
  <Svg width={14} height={14} fill='none'>
    <Path
      stroke='#23374A'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M2.898 7h8.114'
    />
  </Svg>
);

const renderPlusSvg = () => (
  <Svg width={14} height={14} fill='none'>
    <Path
      stroke='#23374A'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M6.955 2.917v8.166M2.898 7h8.114'
    />
  </Svg>
);

const PlantCounterInner: React.FC<Props> = ({item}) => {
  const dispatch = hooks.useAppDispatch();

  const cart = hooks.useAppSelector(state => state.cartSlice.list);

  const quantityInCart = (item: ProductType, cart: ProductType[]): number => {
    const ifItemInCart = cart.find(el => el.id === item.id);
    const quantity =
      ifItemInCart && ifItemInCart.quantity ? ifItemInCart.quantity : 0;
    return quantity;
  };

  const quantity = quantityInCart(item, cart);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          dispatch(actions.removeFromCart(item));
        }}
        style={{paddingHorizontal: 20, paddingVertical: 23}}
      >
        {renderMinusSvg()}
      </TouchableOpacity>
      <Text
        style={{
          ...theme.fonts.DM_Sans_700Bold,
          fontSize: Platform.OS === 'ios' ? 14 : 12,
          color: theme.colors.textColor,
          lineHeight: Platform.OS === 'ios' ? 14 * 1.5 : 12 * 1.5,
        }}
        numberOfLines={1}
      >
        {quantity || 0}
      </Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(actions.addToCart(item));
        }}
        style={{paddingHorizontal: 20, paddingVertical: 23}}
      >
        {renderPlusSvg()}
      </TouchableOpacity>
    </View>
  );
};

export default PlantCounterInner;
