import axios from 'axios';
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';

import {text} from '../text';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {ENDPOINTS, CONFIG} from '../config';

const Checkout: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const [loading, setLoading] = useState(false);

  const user = hooks.useAppSelector(state => state.userSlice.user);
  const cart = hooks.useAppSelector(state => state.cartSlice.list);
  const total = hooks.useAppSelector(state => state.cartSlice.total);
  const discount = hooks.useAppSelector(state => state.cartSlice.discount);
  const delivery = hooks.useAppSelector(state => state.cartSlice.delivery);
  const subtotal = hooks.useAppSelector(state => state.cartSlice.subtotal);

  const {name, address, cardNumber, cardHolderName} = hooks.useAppSelector(
    state => state.paymentSlice,
  );

  const handleConfirmOrder = async () => {
    setLoading(true);
    try {
      const data = {
        name,
        total,
        address,
        discount,
        delivery,
        subtotal,
        cardHolderName,
        products: cart,
        userId: user?.id,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
      };
      const response = await axios({
        data: data,
        method: 'post',
        headers: CONFIG.headers,
        url: ENDPOINTS.ORDER_CREATE,
      });

      if (response.status === 200) {
        navigation.reset({
          index: 0,
          routes: [{name: 'OrderSuccessful'}],
        });
        return;
      }
      navigation.reset({
        index: 0,
        routes: [{name: 'OrderFailed'}],
      });
    } catch (error) {
      navigation.reset({
        index: 0,
        routes: [{name: 'OrderFailed'}],
      });
    } finally {
      setLoading(false);
    }
  };

  const renderHeader = (): JSX.Element => {
    return <components.Header title='Checkout' goBackIcon={true} />;
  };

  const renderMyOrder = (): JSX.Element => {
    return (
      <View
        style={{
          padding: 20,
          borderRadius: 15,
          marginBottom: utils.responsiveHeight(20),
          backgroundColor: theme.colors.imageBackground,
        }}
      >
        <View
          style={{
            borderBottomWidth: 1,
            ...theme.flex.rowCenterSpaceBetween,
            marginBottom: utils.responsiveHeight(20),
            paddingBottom: utils.responsiveHeight(20),
            borderBottomColor: theme.colors.antiFlashWhite,
          }}
        >
          <text.H4 numberOfLines={1} style={{textTransform: 'capitalize'}}>
            My order
          </text.H4>
          <text.H4 numberOfLines={1} style={{textTransform: 'capitalize'}}>
            ${total.toFixed(2)}
          </text.H4>
        </View>
        {cart.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                ...theme.flex.rowCenterSpaceBetween,
                marginBottom: utils.responsiveHeight(10),
              }}
            >
              <text.T14 style={{textTransform: 'capitalize'}}>
                {item.name}
              </text.T14>
              <text.T14>${item.price}</text.T14>
            </View>
          );
        })}
        <View
          style={{
            ...theme.flex.rowCenterSpaceBetween,
            marginBottom: utils.responsiveHeight(10),
          }}
        >
          <text.T14 style={{textTransform: 'capitalize'}} numberOfLines={1}>
            Discount
          </text.T14>
          <text.T14 style={{textTransform: 'capitalize'}} numberOfLines={1}>
            {discount}%
          </text.T14>
        </View>
        <View style={{...theme.flex.rowCenterSpaceBetween}}>
          <text.T14 style={{textTransform: 'capitalize'}} numberOfLines={1}>
            Delivery
          </text.T14>
          <text.T14 style={{textTransform: 'capitalize'}} numberOfLines={1}>
            ${delivery}
          </text.T14>
        </View>
      </View>
    );
  };

  const renderShippingAPaymentInfo = (): JSX.Element => {
    const lastFourDigits = cardNumber.slice(-4);
    const maskedCardNumber = '**** ' + lastFourDigits;
    return (
      <View
        style={{
          padding: 20,
          borderRadius: 15,
          backgroundColor: theme.colors.imageBackground,
        }}
      >
        <text.H5
          numberOfLines={1}
          style={{
            marginBottom: utils.responsiveHeight(13),
          }}
        >
          Shipping & Payment info
        </text.H5>
        <text.T14
          style={{
            textTransform: 'capitalize',
            marginBottom: utils.responsiveHeight(10),
          }}
          numberOfLines={1}
        >
          {name}
        </text.T14>
        <text.T14
          numberOfLines={1}
          style={{marginBottom: utils.responsiveHeight(10)}}
        >
          {address}
        </text.T14>
        <text.T14 numberOfLines={1}>{maskedCardNumber}</text.T14>
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: utils.responsiveHeight(25),
          paddingBottom: utils.responsiveHeight(20),
        }}
      >
        {renderMyOrder()}
        {renderShippingAPaymentInfo()}
      </ScrollView>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        loading={loading}
        title='Confirm order'
        onPress={handleConfirmOrder}
        containerStyle={{padding: 20}}
      />
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

export default Checkout;
