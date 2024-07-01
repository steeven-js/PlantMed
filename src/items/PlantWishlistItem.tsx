import React from 'react';
import {View, TouchableOpacity, ViewStyle} from 'react-native';

import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {plantmed} from '../plantmed';
import {PlantMedType} from '../types';

type Props = {item: PlantMedType; containerStyle?: ViewStyle; isLast?: boolean};

const PlantWishlistItem: React.FC<Props> = ({
  item,
  containerStyle,
  isLast,
}): JSX.Element => {
  const navigation = hooks.useAppNavigation();

  const isPremium = hooks.useAppSelector(
    state => state.userSlice.user?.isPremium,
  );

  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
        flexDirection: 'row',
        marginBottom: isLast ? 0 : utils.responsiveHeight(14),
      }}
      onPress={() => {
        if (isPremium) {
          navigation.navigate('PlantMed', {item});
        } else if (!isPremium && item.is_premium == false) {
          navigation.navigate('PlantMed', {item});
        } else {
          navigation.navigate('PreniumContent');
        }
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
      ></custom.ImageBackground>
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
          <plantmed.PlantmedName item={item} />
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <plantmed.PlantmedInWishlist
            item={item}
            version={1}
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

export default PlantWishlistItem;
