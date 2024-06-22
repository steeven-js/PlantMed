import {View} from 'react-native';
import React, {useEffect} from 'react';

import Home from '../screens/tabs/Home';
import Order from '../screens/tabs/Order';
import Profile from '../screens/tabs/Profile';
import Wishlist from '../screens/tabs/Wishlist';
import Categories from '../screens/tabs/Categories';

import {hooks} from '../hooks';
import {custom} from '../custom';
import getTabs from '../utils/getTabs';
import {actions} from '../store/actions';
import {components} from '../components';
import BottomTabBar from './BottomTabBar';
import {queryHooks} from '../store/slices/apiSlice';
import SignIn from '../screens/SignIn';

const TabNavigator: React.FC = () => {
  const dispatch = hooks.useAppDispatch();
  const navigation = hooks.useAppNavigation();
  const user = hooks.useAppSelector(state => state.userSlice.user);
  const currentTabScreen = hooks.useAppSelector(state => state.tabSlice.screen);

  const tabs = getTabs();

  console.log('user', JSON.stringify(user, null, 2));

  // useEffect(() => {
  //   if (!user) {
  //     navigation.navigate('SignIn');
  //   }
  // }, [user, navigation]);

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
      return 'My profile';
    }

    // if (currentTabScreen === 'Order') {
    //   return 'Order';
    // }

    if (currentTabScreen === 'Wishlist') {
      return 'Wishlist';
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
        {currentTabScreen === tabs[1].name && <Categories />}
        {/* {currentTabScreen === tabs[2].name && <Order />} */}
        {currentTabScreen === tabs[2].name && <Wishlist />}
        {/* {currentTabScreen === tabs[3].name && <Profile />} */}
        {currentTabScreen === tabs[3].name && (user ? <Profile /> : <SignIn />)}
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
