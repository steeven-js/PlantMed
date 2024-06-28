import React from 'react';
import {View, TouchableOpacity, ViewStyle} from 'react-native';

import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {product} from '../product';
import {ProductType} from '../types';

type Props = {item: ProductType; containerStyle?: ViewStyle; isLast?: boolean};

const WishlistItem: React.FC<Props> = ({
  item,
  containerStyle,
  isLast,
}): JSX.Element => {
  const navigation = hooks.useAppNavigation();

  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
        flexDirection: 'row',
        marginBottom: isLast ? 0 : utils.responsiveHeight(14),
      }}
      onPress={() => {
        navigation.navigate('Product', {item});
      }}
    >
      {/* IMAGE */}
      <custom.ImageBackground
        source={{uri: item.image}}
        style={{width: 100, height: 100}}
        imageStyle={{
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          backgroundColor: theme.colors.imageBackground,
        }}
        resizeMode='contain'
      >
        {item.oldPrice && (
          <product.ProductSaleBadge
            containerStyle={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              padding: 10,
            }}
          />
        )}
      </custom.ImageBackground>
      {/* BLOCK INFO */}
      <View
        style={{
          flex: 1,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: theme.colors.antiFlashWhite,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            paddingLeft: 14,
            paddingTop: 14,
            paddingBottom: 10,
            paddingRight: 14,
            justifyContent: 'space-between',
          }}
        >
          <product.ProductName item={item} />
          <product.ProductPrice item={item} />
          <product.ProductRating rating={item.rating} />
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <product.ProductInWishlist
            item={item}
            version={1}
            containerStyle={{
              paddingHorizontal: 20,
              paddingVertical: 14,
            }}
          />
          <product.ProductInCart
            item={item}
            containerStyle={{
              paddingHorizontal: 20,
              paddingVertical: 14,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WishlistItem;
