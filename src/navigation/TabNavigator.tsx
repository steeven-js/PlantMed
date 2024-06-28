import {View} from 'react-native';
import React, {useEffect} from 'react';

import Home from '../screens/tabs/Home';
import Order from '../screens/tabs/Order';
import Profile from '../screens/tabs/Profile';
import Wishlist from '../screens/tabs/Wishlist';
import Symptoms from '../screens/tabs/Symptoms';
import Categories from '../screens/tabs/Categories';
import PlantWishlist from '../screens/tabs/PlantWishlist';

import {hooks} from '../hooks';
import {custom} from '../custom';
import getTabs from '../utils/getTabs';
import {actions} from '../store/actions';
import {components} from '../components';
import BottomTabBar from './BottomTabBar';
import {queryHooks} from '../store/slices/apiSlice';

const TabNavigator: React.FC = () => {
  const dispatch = hooks.useAppDispatch();
  const user = hooks.useAppSelector(state => state.userSlice.user);
  const currentTabScreen = hooks.useAppSelector(state => state.tabSlice.screen);

  const tabs = getTabs();

  console.log('user', JSON.stringify(user, null, 2));

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
    refetch: refetchUser,
  } = queryHooks.useGetUserQuery(user?.id || 0);

  useEffect(() => {
    dispatch(actions.resetFilters());
    refetchUser();
  }, [currentTabScreen]);

  const getTitle = (): string | null => {
    if (currentTabScreen === 'Profile') {
      return 'Mon profil';
    }

    if (currentTabScreen === 'Order') {
      return 'Order';
    }

    if (currentTabScreen === 'Wishlist') {
      return 'Mes favoris';
    }

    return null;
  };

  const getSearch = (): boolean => {
    if (currentTabScreen === 'Category') {
      return true;
    }

    return false;
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        burgerIcon={true}
        userAvatar={true}
        bottomLine={true}
        basketIcon={true}
        title={getTitle()}
        search={getSearch()}
      />
    );
  };

  const renderScreens = (): JSX.Element => {
    return (
      <View style={{flex: 1}}>
        {currentTabScreen === tabs[0].name && <Home />}
        {/* {currentTabScreen === tabs[1].name && <Categories />} */}
        {currentTabScreen === tabs[1].name && <Symptoms />}
        {currentTabScreen === tabs[2].name && <PlantWishlist />}
        {currentTabScreen === tabs[3].name && <Profile />}
      </View>
    );
  };

  const renderBottomTabBar = (): JSX.Element => {
    return <BottomTabBar />;
  };

  return (
    <custom.SafeAreaView insets={['top']}>
      {renderHeader()}
      {renderScreens()}
      {renderBottomTabBar()}
    </custom.SafeAreaView>
  );
};

export default TabNavigator;
