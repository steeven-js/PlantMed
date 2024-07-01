import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';

import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {plantmed} from '../plantmed';
import {PlantMedType} from '../types';

type Props = {version: 1 | 2 | 3; item: PlantMedType; isLast?: boolean};

const PlantmedCard: React.FC<Props> = ({
  version,
  item,
  isLast,
}): JSX.Element | null => {
  const navigation = hooks.useAppNavigation();
  const isPrenium = hooks.useAppSelector(
    state => state.userSlice.user?.isPrenium,
  );

  const onPress = () => {
    if (isPrenium) {
      navigation.navigate('PlantMed', {item});
    } else if (!isPrenium && item.is_prenium == false) {
      navigation.navigate('PlantMed', {item});
    } else {
      navigation.navigate('IsPreniumContent');
    }
  };

  // ############ SHOP > PLANTS ############ //
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
            flexDirection: 'row',
            aspectRatio: 160 / 200,
            marginBottom: 14,
            justifyContent: 'space-between',
          }}
          imageStyle={{
            borderRadius: 10,
            backgroundColor: theme.colors.imageBackground,
          }}
          resizeMode='cover'
        >
          <plantmed.PlantPrenium
            item={item}
            containerStyle={{marginBottom: 'auto', padding: 10}}
          />
          <plantmed.PlantmedInWishlist
            item={item}
            version={1}
            containerStyle={{marginBottom: 'auto', padding: 10}}
          />
        </custom.ImageBackground>
        <View
          style={{
            width: utils.responsiveWidth(160, true),
          }}
        >
          <plantmed.PlantmedName item={item} style={{marginBottom: 3}} />
        </View>
      </TouchableOpacity>
    );
  }

  // ############ HOME > FEATURED PLANTS ############ //
  if (version === 2) {
    return (
      <TouchableOpacity onPress={onPress}>
        <custom.ImageBackground
          source={{uri: item.image}}
          style={{
            width: utils.responsiveWidth(138, true),
            aspectRatio: 138 / 138,
            marginRight: isLast ? 20 : 14,
            marginBottom: utils.responsiveHeight(14),
          }}
          imageStyle={{
            borderRadius: 10,
            backgroundColor: theme.colors.imageBackground,
          }}
        >
          <plantmed.PlantmedInWishlist
            item={item}
            containerStyle={{
              position: 'absolute',
              padding: 14,
              top: 0,
              right: 0,
            }}
          />
        </custom.ImageBackground>
        <View style={{width: utils.rsHeight(138, true)}}>
          <plantmed.PlantmedName item={item} style={{marginBottom: 3}} />
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
            aspectRatio: 150 / 150,
            marginRight: isLast ? 20 : 14,
            marginBottom: utils.responsiveHeight(14),
          }}
          imageStyle={{
            borderRadius: 10,
            backgroundColor: theme.colors.imageBackground,
          }}
        >
          <plantmed.PlantmedInWishlist
            item={item}
            containerStyle={{
              position: 'absolute',
              padding: 14,
              top: 0,
              right: 0,
            }}
          />
        </custom.ImageBackground>
        <View style={{width: width}}>
          <plantmed.PlantmedName item={item} style={{marginBottom: 3}} />
        </View>
      </TouchableOpacity>
    );
  }

  return null;
};

export default PlantmedCard;
