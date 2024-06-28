import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

import {alert} from '../alert';
import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {ProductType} from '../types';
import {actions} from '../store/actions';

type Props = {
  version?: number;
  item: ProductType;
  containerStyle?: ViewStyle;
};

const ProductInCart: React.FC<Props> = ({
  item,
  containerStyle,
}): JSX.Element => {
  const dispatch = hooks.useAppDispatch();
  const cart = hooks.useAppSelector(state => state.cartSlice.list);
  const exist = (item: ProductType) => cart.find(i => i.id === item.id);

  return (
    <TouchableOpacity
      style={{...containerStyle}}
      onPress={() => {
        if (exist(item)) {
          alert.alreadyAdded();
        }
        if (!exist(item)) {
          dispatch(actions.addToCart(item));
        }
      }}
    >
      <svg.PlusSvg />
    </TouchableOpacity>
  );
};

export default ProductInCart;
