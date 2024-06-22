import {View, Text, TouchableOpacity, Platform} from 'react-native';
import React from 'react';

import {hooks} from '../hooks';
import {custom} from '../custom';
import {product} from '../product';
import {theme} from '../constants';
import {ProductType} from '../types';

type Props = {item: ProductType; isLast: boolean};

const OrderItem: React.FC<Props> = ({item, isLast}) => {
  const navigation = hooks.useAppNavigation();

  const renderImage = () => {
    return (
      <custom.ImageBackground
        source={{uri: item.image}}
        style={{width: 100, height: '100%'}}
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
              padding: 4,
              bottom: 0,
              left: 0,
            }}
          />
        )}
      </custom.ImageBackground>
    );
  };

  const renderInfo = () => {
    return (
      <View
        style={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: theme.colors.antiFlashWhite,
          width: '100%',
          paddingRight: 0,
          flexDirection: 'row',
          flex: 1,
        }}
      >
        <View
          style={{
            marginRight: 'auto',
            paddingLeft: 14,
            paddingTop: 14,
            paddingBottom: 14,
          }}
        >
          <product.ProductName item={item} style={{marginBottom: 3}} />
          <product.ProductPrice item={item} />
          {item.color && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 'auto',
              }}
            >
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 12 : 10,
                  color: theme.colors.textColor,
                  marginRight: 14,
                }}
              >
                Color: {item.color}
              </Text>
            </View>
          )}
        </View>
        <product.ProductCounter item={item} />
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 100,
        marginBottom: isLast ? 0 : 14,
      }}
      onPress={() => navigation.navigate('Product', {item})}
    >
      {renderImage()}
      {renderInfo()}
    </TouchableOpacity>
  );
};

export default OrderItem;
