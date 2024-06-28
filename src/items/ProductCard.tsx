import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';

import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {product} from '../product';
import {ProductType} from '../types';

type Props = {version: 1 | 2 | 3; item: ProductType; isLast?: boolean};

const PlantCard: React.FC<Props> = ({
  version,
  item,
  isLast,
}): JSX.Element | null => {
  const navigation = hooks.useAppNavigation();

  const cart = hooks.useAppSelector(state => state.cartSlice.list);

  const onPress = () => {
    navigation.navigate('Product', {item});
  };

  const ifInCart = cart.find(i => i.id === item.id);
  const quantity = ifInCart ? ifInCart.quantity : 0;

  // ############ SHOP > PRODUCTS ############ //
  if (version === 1) {
    return (
      <TouchableOpacity
        style={{
          width: utils.responsiveWidth(160, true),
          marginBottom: 20,
          borderRadius: 5,
        }}
        onPress={onPress}
      >
        <custom.ImageBackground
          source={{uri: item.image}}
          style={{
            width: '100%',
            aspectRatio: 160 / 200,
            marginBottom: 14,
            alignItems: 'flex-end',
          }}
          imageStyle={{
            borderRadius: 10,
            backgroundColor: theme.colors.imageBackground,
          }}
          resizeMode='cover'
        >
          <product.ProductInWishlist
            item={item}
            version={1}
            containerStyle={{marginBottom: 'auto', padding: 10}}
          />

          {quantity !== undefined && quantity === 0 && (
            <product.ProductInCart
              item={item}
              version={1}
              containerStyle={{padding: 10}}
            />
          )}
          {quantity !== undefined && quantity > 0 && (
            <product.ProductQuantity
              quantity={quantity}
              containerStyle={{padding: 10}}
            />
          )}
          {item.oldPrice && (
            <product.ProductSaleBadge
              containerStyle={{
                position: 'absolute',
                padding: 10,
                bottom: 0,
                left: 0,
              }}
            />
          )}
        </custom.ImageBackground>
        <View
          style={{
            width: utils.responsiveWidth(160, true),
          }}
        >
          <product.ProductName item={item} style={{marginBottom: 3}} />
          <product.ProductPrice item={item} />
        </View>
      </TouchableOpacity>
    );
  }

  // ############ HOME > FEATURED PRODUCTS ############ //
  if (version === 2) {
    return (
      <TouchableOpacity onPress={onPress}>
        <custom.ImageBackground
          source={{uri: item.image}}
          style={{
            width: utils.responsiveWidth(138, true),
            aspectRatio: 138 / 170,
            marginRight: isLast ? 20 : 14,
            marginBottom: utils.responsiveHeight(14),
          }}
          imageStyle={{
            borderRadius: 10,
            backgroundColor: theme.colors.imageBackground,
          }}
        >
          <product.ProductInWishlist
            item={item}
            containerStyle={{
              position: 'absolute',
              padding: 14,
              top: 0,
              right: 0,
            }}
          />

          {quantity !== undefined && quantity === 0 && (
            <product.ProductInCart
              item={item}
              containerStyle={{
                position: 'absolute',
                padding: 14,
                bottom: 0,
                right: 0,
              }}
            />
          )}
          {quantity !== undefined && quantity > 0 && (
            <product.ProductQuantity
              quantity={quantity}
              containerStyle={{
                padding: 10,
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}
            />
          )}
        </custom.ImageBackground>
        <View style={{width: utils.rsHeight(138, true)}}>
          <product.ProductName item={item} style={{marginBottom: 3}} />
          <product.ProductPrice item={item} />
        </View>
      </TouchableOpacity>
    );
  }

  // ############ HOME > BEST SELLER ############ //
  if (version === 3) {
    const width = utils.responsiveWidth(200, true);

    return (
      <TouchableOpacity onPress={onPress}>
        <custom.ImageBackground
          source={{uri: item.image}}
          style={{
            width: width,
            aspectRatio: 200 / 250,
            marginRight: isLast ? 20 : 14,
            marginBottom: utils.responsiveHeight(14),
          }}
          imageStyle={{
            borderRadius: 10,
            backgroundColor: theme.colors.imageBackground,
          }}
        >
          <product.ProductInWishlist
            item={item}
            containerStyle={{
              position: 'absolute',
              padding: 14,
              top: 0,
              right: 0,
            }}
          />
          <product.ProductInCart
            item={item}
            containerStyle={{
              position: 'absolute',
              padding: 14,
              bottom: 0,
              right: 0,
            }}
          />
          {quantity !== undefined && quantity > 0 && (
            <product.ProductQuantity
              quantity={quantity}
              containerStyle={{
                padding: 14,
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}
            />
          )}
        </custom.ImageBackground>
        <View style={{width: width}}>
          <product.ProductName item={item} style={{marginBottom: 3}} />
          <product.ProductPrice item={item} />
        </View>
      </TouchableOpacity>
    );
  }

  return null;
};

export default PlantCard;
