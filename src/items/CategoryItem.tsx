import {View, Text, TouchableOpacity, Platform, Alert} from 'react-native';
import React from 'react';

import {utils} from '../utils';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {theme} from '../constants';
import {ProductType, CategoryType} from '../types';

type Props = {
  qty: number;
  isLast: boolean;
  item: CategoryType;
  dataFilter: ProductType[] | undefined;
};

const CategoryItem: React.FC<Props> = ({item, isLast, qty, dataFilter}) => {
  const navigation = hooks.useAppNavigation();

  const onPress = () => {
    if (qty > 0) {
      navigation.navigate('Shop', {
        title: item.name,
        products: dataFilter ?? [],
      });
    }
    if (qty === 0) {
      Alert.alert('No data', 'No data available for this category');
    }
  };

  return (
    <TouchableOpacity
      style={{
        width: utils.responsiveWidth(90),
        height: utils.responsiveWidth(90),
        marginRight: isLast ? 20 : 14,
      }}
      onPress={onPress}
    >
      <custom.ImageBackground
        source={{uri: item.image ?? 'default_image_uri'}}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          paddingHorizontal: 10,
          paddingTop: 10,
          paddingBottom: 8,
        }}
        imageStyle={{
          borderRadius: 10,
          backgroundColor: theme.colors.imageBackground,
        }}
      >
        <View
          style={{
            backgroundColor: '#CFF5CE',
            alignSelf: 'flex-start',
            borderRadius: 50,
            width: 16,
            height: 14,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 'auto',
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: 8,
              color: '#50858B',
              ...theme.fonts.DM_Sans_400Regular,
            }}
          >
            {qty}
          </Text>
        </View>
        <Text
          numberOfLines={1}
          style={{
            fontSize: Platform.OS === 'ios' ? 10 : 8,
            textTransform: 'capitalize',
            color: theme.colors.mainColor,
            ...theme.fonts.DM_Sans_400Regular,
            lineHeight: 10 * 1.5,
          }}
        >
          {item.name}
        </Text>
      </custom.ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryItem;
