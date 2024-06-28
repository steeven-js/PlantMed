import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {PlantMedType} from '../types';
import {actions} from '../store/actions';

type Props = {
  version?: number;
  item: PlantMedType;
  containerStyle?: object;
};

const PlantmedInWishlist: React.FC<Props> = ({
  containerStyle,
  item,
  version = 1,
}) => {
  const dispatch = hooks.useAppDispatch();

  const wishlist = hooks.useAppSelector(
    state => state.plantmedWishlistSlice.list,
  );
  const itemExist = (item: PlantMedType) =>
    wishlist.find(i => i.id === item.id);

  const fillColor = itemExist(item) ? theme.colors.red : theme.colors.white;
  const strokeColor = itemExist(item) ? theme.colors.red : theme.colors.red;

  const itemExistMessage = () => {
    return Alert.alert(
      'Product already in wishlist',
      'Are you sure you want to delete from wishlist ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => dispatch(actions.removeFromPlantMedWishlist(item)),
        },
      ],
    );
  };

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => {
        if (itemExist(item)) {
          itemExistMessage();
        }
        if (!itemExist(item)) {
          dispatch(actions.addToPlantMedWishlist(item));
        }
      }}
    >
      {version === 1 && (
        <svg.HeartSvg fillColor={fillColor} strokeColor={strokeColor} />
      )}
      {version === 2 && (
        <svg.HeartBigSvg fillColor={fillColor} strokeColor={strokeColor} />
      )}
    </TouchableOpacity>
  );
};

export default PlantmedInWishlist;
