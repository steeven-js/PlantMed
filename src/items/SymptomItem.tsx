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
  const isPrenium = hooks.useAppSelector(
    state => state.userSlice.user?.isPrenium,
  );

  const onPress = () => {
    if (qty > 0) {
      if (isPrenium) {
        navigation.navigate('PlantMedList', {
          title: item.name,
          products: dataFilter ?? [],
        });
      } else if (!isPrenium && item.is_prenium == false) {
        navigation.navigate('PlantMedList', {
          title: item.name,
          products: dataFilter ?? [],
        });
      } else {
        navigation.navigate('Prenium');
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
              width: 40,
              height: 40,
              borderRadius: 40 / 2,
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
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PreniumSvg
              width='40px'
              height='40px'
              fillColor={
                item.is_prenium
                  ? theme.colors.yellowStar
                  : theme.colors.steelTeal
              }
              strokeColor={
                item.is_prenium
                  ? theme.colors.yellowStar
                  : theme.colors.steelTeal
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
