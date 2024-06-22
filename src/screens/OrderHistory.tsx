import React, {useState, useEffect} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {View, TouchableOpacity, Text, ScrollView, Platform} from 'react-native';

import {text} from '../text';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {actions} from '../store/actions';
import {queryHooks} from '../store/slices/apiSlice';

const OrderHistory: React.FC = () => {
  const dispatch = hooks.useAppDispatch();
  const navigation = hooks.useAppNavigation();
  const user = hooks.useAppSelector(state => state.userSlice.user);

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = queryHooks.useGetUserQuery(user?.id || 0);

  const {
    data: ordersData,
    error: ordersError,
    isLoading: ordersLoading,
    refetch: refetchOrders,
  } = queryHooks.useGetOrdersQuery(user?.id || 0);

  useEffect(() => {
    refetchOrders();
  }, []);

  const [activeSections, setActiveSections] = useState([]);
  const setSections = (sections: any) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} title='Order history' />;
  };

  const accordionHeader = (section: any): JSX.Element => {
    return (
      <View
        style={{
          borderTopWidth: 1,
          marginHorizontal: 20,
          paddingVertical: 20,
          borderColor: theme.colors.antiFlashWhite,
        }}
      >
        <View
          style={{
            ...theme.flex.rowCenterSpaceBetween,
            marginBottom: utils.responsiveHeight(8),
          }}
        >
          <text.H5 numberOfLines={1}>#{section.id}</text.H5>
          <text.H5 numberOfLines={1}>${section.total}</text.H5>
        </View>
        <View style={{...theme.flex.rowCenterSpaceBetween}}>
          {section.orderStatus === 'shipping' && (
            <Text style={{color: '#FFA462'}}>Shipping</Text>
          )}
          {section.orderStatus === 'delivered' && (
            <Text style={{color: '#00824B'}}>Delivered</Text>
          )}
          {section.orderStatus === 'canceled' && (
            <Text style={{color: '#F84C6B'}}>Canceled</Text>
          )}
          {section.orderStatus === 'pending' && (
            <Text style={{color: '#FFA462'}}>Pending</Text>
          )}
          {section.orderStatus === 'processing' && (
            <Text style={{color: '#28a745'}}>Processing</Text>
          )}
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 12 : 10,
              lineHeight: Platform.OS === 'ios' ? 12 * 1.5 : 10 * 1.5,
              ...theme.fonts.DM_Sans_400Regular,
              color: theme.colors.textColor,
            }}
          >
            {section.createdAt}
          </Text>
        </View>
      </View>
    );
  };

  const accordionContent = (section: any): JSX.Element => {
    return (
      <View style={{marginHorizontal: 20}}>
        <components.Container
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
        >
          {section.products.map((item: any, index: number, array: any) => {
            const lastItem = index === array.length - 1;

            return (
              <View
                key={item.id}
                style={{
                  marginBottom: utils.responsiveHeight(10),
                  ...theme.flex.rowCenterSpaceBetween,
                }}
              >
                <text.T14 numberOfLines={1}>{item.name}</text.T14>
                <text.T14 numberOfLines={1}>
                  {item.quantity} x ${item.price}
                </text.T14>
              </View>
            );
          })}
          <View
            style={{
              borderBottomWidth: 1,
              marginBottom: utils.responsiveHeight(10),
              paddingBottom: utils.responsiveHeight(10),
              ...theme.flex.rowCenterSpaceBetween,
              borderBottomColor: theme.colors.antiFlashWhite,
            }}
          >
            <text.T14 style={{textTransform: 'capitalize'}} numberOfLines={1}>
              Delivery
            </text.T14>
            <text.T14 style={{textTransform: 'capitalize'}} numberOfLines={1}>
              {section.delivery}$
            </text.T14>
          </View>
          <View style={{...theme.flex.rowCenterSpaceBetween}}>
            <text.T14
              style={{
                textTransform: 'capitalize',
                color: theme.colors.mainColor,
              }}
              numberOfLines={1}
            >
              Total
            </text.T14>
            <text.T14 style={{textTransform: 'capitalize'}} numberOfLines={1}>
              {section.total}$
            </text.T14>
          </View>
        </components.Container>
      </View>
    );
  };

  const renderAccordion = (): JSX.Element | null => {
    return (
      <Accordion
        duration={400}
        onChange={setSections}
        activeSections={activeSections}
        renderHeader={accordionHeader}
        renderContent={accordionContent}
        sections={ordersData?.orders || []}
        touchableComponent={TouchableOpacity}
      />
    );
  };

  const renderContent = (): JSX.Element | null => {
    const isError = userError || ordersError;
    const isLoading = userLoading || ordersLoading;

    if (isError) return <components.Error />;
    if (isLoading) return <components.Loader />;
    if (!ordersData.orders.length) return <components.NoData />;

    if (ordersData.orders.length > 0) {
      return (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: utils.responsiveHeight(15),
          }}
          showsVerticalScrollIndicator={false}
        >
          {renderAccordion()}
        </ScrollView>
      );
    }

    return null;
  };

  const renderButton = (): JSX.Element => {
    return (
      <View>
        <components.Button
          title='My Profile'
          onPress={() => {
            dispatch(actions.setScreen('Profile'));
            navigation.reset({index: 0, routes: [{name: 'TabNavigator'}]});
          }}
          containerStyle={{padding: 20}}
        />
      </View>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
    </custom.SafeAreaView>
  );
};

export default OrderHistory;
