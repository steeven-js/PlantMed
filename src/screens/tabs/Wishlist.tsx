import React, {useState} from 'react';
import {ScrollView, RefreshControl} from 'react-native';

import {text} from '../../text';
import {items} from '../../items';
import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';
import {queryHooks} from '../../store/slices/apiSlice';

const Wishlist: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const wishlist = hooks.useAppSelector(state => state.wishlistSlice.list);

  const {
    data: plantsData,
    error: plantsError,
    refetch: refetchPlants,
    isLoading: plantsLoading,
  } = queryHooks.useGetPlantsQuery();

  const renderProducts = (): JSX.Element | null => {
    if (wishlist.length > 0) {
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, padding: 20}}
        >
          {wishlist.map((item, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <items.WishlistItem key={index} item={item} isLast={isLast} />
            );
          })}
        </ScrollView>
      );
    }

    return null;
  };

  const renderEmpty = (): JSX.Element | null => {
    if (wishlist.length === 0) {
      return (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            padding: 20,
            justifyContent: 'center',
          }}
        >
          <custom.Image
            source={require('../../assets/icons/03.png')}
            style={{
              height: utils.responsiveHeight(120),
              aspectRatio: 123.39 / 120,
              marginBottom: utils.responsiveHeight(14),
            }}
          />
          <text.H2
            numberOfLines={1}
            style={{marginBottom: utils.responsiveHeight(14)}}
          >
            Your wishlist is empty!
          </text.H2>
          <text.T16 numberOfLines={2}>
            Looks like you haven't chosen the {'\n'}items you like.
          </text.T16>
        </ScrollView>
      );
    }

    return null;
  };

  const renderButton = (): JSX.Element | null => {
    if (wishlist.length === 0) {
      return (
        <components.Button
          title='shop now'
          containerStyle={{padding: 20}}
          textStyle={{color: theme.colors.steelTeal}}
          touchableOpacityStyle={{backgroundColor: theme.colors.pastelMint}}
          onPress={() =>
            navigation.navigate('Shop', {
              title: 'Shop',
              products: plantsData?.plants || [],
            })
          }
        />
      );
    }

    return null;
  };

  const renderContent = (): JSX.Element => {
    if (plantsLoading) {
      return <components.Loader />;
    }

    return (
      <React.Fragment>
        {renderProducts()}
        {renderEmpty()}
        {renderButton()}
      </React.Fragment>
    );
  };

  return renderContent();
};

export default Wishlist;
