import {View, Text, TouchableOpacity, Platform, Alert} from 'react-native';
import React from 'react';

import {utils} from '../utils';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {theme} from '../constants';
import {PlantMedType, SymptomType} from '../types';
import PreniumSvg from '../assets/svg/PreniumSvg';

type Props = {
  qty: number;
  isLast: boolean;
  item: SymptomType;
  dataFilter: PlantMedType[] | undefined;
};

const SymptomItem: React.FC<Props> = ({item, isLast, qty, dataFilter}) => {
  const navigation = hooks.useAppNavigation();
  const isPremium = hooks.useAppSelector(
    state => state.userSlice.user?.isPremium,
  );

  const onPress = () => {
    if (qty > 0) {
      if (isPremium) {
        navigation.navigate('PlantMedList', {
          title: item.name,
          products: dataFilter ?? [],
        });
      } else if (!isPremium && item.is_premium == false) {
        navigation.navigate('PlantMedList', {
          title: item.name,
          products: dataFilter ?? [],
        });
      } else {
        navigation.navigate('PreniumContent');
      }
    }
    if (qty === 0) {
      Alert.alert('No data', 'No data available for this category');
    }
  };

  return (
    <TouchableOpacity
      style={{
        width: utils.responsiveWidth(130, true),
        height: utils.responsiveWidth(130, true),
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
          justifyContent: 'space-between',
        }}
        imageStyle={{
          borderRadius: 10,
          backgroundColor: theme.colors.imageBackground,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              backgroundColor: '#CFF5CE',
              alignSelf: 'flex-start',
              paddingHorizontal: 9,
              paddingVertical: 1,
              borderRadius: 50,
              minWidth: 23,
              height: 23,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                fontSize: Platform.OS === 'ios' ? 16 : 14,
                color: '#50858B',
                // textTransform: 'capitalize',
                ...theme.fonts.DM_Sans_500Medium,
              }}
            >
              {qty}
            </Text>
          </View>

          <View
            style={{
              alignSelf: 'flex-start',
              paddingHorizontal: 9,
              paddingVertical: 1,
              minWidth: 23,
              height: 23,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PreniumSvg
              width='30px'
              height='30px'
              fillColor={
                item.is_premium
                  ? theme.colors.yellowStar
                  : theme.colors.pastelMint
              }
              strokeColor={
                item.is_premium
                  ? theme.colors.yellowStar
                  : theme.colors.pastelMint
              }
            />
          </View>
        </View>

        <Text
          numberOfLines={2}
          style={{
            fontSize: Platform.OS === 'ios' ? 16 : 14,
            // textTransform: 'capitalize',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: theme.colors.mainColor,
            ...theme.fonts.DM_Sans_700Bold,
          }}
        >
          {item.name}
        </Text>
      </custom.ImageBackground>
    </TouchableOpacity>
  );
};

export default SymptomItem;
