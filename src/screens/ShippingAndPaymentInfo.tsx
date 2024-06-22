import React, {useEffect, useRef} from 'react';
import {ScrollView, TextInput, View} from 'react-native';

import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {actions} from '../store/actions';
import {components} from '../components';
import {validation} from '../validation';
import {useChangeHandler} from '../utils/useChangeHandler';

const ShippingAndPaymentInfo: React.FC = () => {
  const navigation = hooks.useAppNavigation();
  const dispatch = hooks.useAppDispatch();
  const user = hooks.useAppSelector(state => state.userSlice.user);

  const {name, address, cardNumber, expiryDate, cvv, cardHolderName} =
    hooks.useAppSelector(state => state.paymentSlice);

  const nameInputRef = useRef<TextInput>(null);
  const addressInputRef = useRef<TextInput>(null);
  const cardNumberInputRef = useRef<TextInput>(null);
  const expiryDateInputRef = useRef<TextInput>(null);
  const cvvInputRef = useRef<TextInput>(null);
  const cardHolderNameInputRef = useRef<TextInput>(null);

  const handleCvvChange = useChangeHandler(actions.setCvv);
  const handleNameChange = useChangeHandler(actions.setName);
  const handleAddressChange = useChangeHandler(actions.setAddress);
  const handleCardHolderNameChange = useChangeHandler(
    actions.setCardHolderName,
  );

  console.log('cardNumber', cardNumber.length);

  useEffect(() => {
    if (cvv.length === 3) {
      cvvInputRef.current?.blur();
      console.log('this is cvv', cvv);
    }

    if (cardNumber.length === 19) {
      cardNumberInputRef.current?.blur();
      console.log('this is card number', cardNumber);
    }

    if (expiryDate.length === 5) {
      expiryDateInputRef.current?.blur();
      console.log('this is expiry date', expiryDate);
    }
  }, [cvv, cardNumber, expiryDate]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      cvvInputRef.current?.blur();
      nameInputRef.current?.blur();
      addressInputRef.current?.blur();
      cardNumberInputRef.current?.blur();
      expiryDateInputRef.current?.blur();
      cardHolderNameInputRef.current?.blur();
    });

    return unsubscribe;
  }, [navigation]);

  const handleCardNumberChange = (text: string) => {
    let newText = '';
    let count = 0;

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ') {
        if (count !== 0 && count % 4 === 0) {
          newText = newText + ' ';
        }
        newText = newText + text[i];
        count++;
      }
    }
    dispatch(actions.setCardNumber(newText));
  };

  const handleExpiryDateChange = (text: string) => {
    let newText = '';
    let len = text.length;
    if (len < expiryDate.length) {
      newText = text;
    } else {
      for (let i = 0; i < len; i++) {
        if (i === 2 && text[i] !== '/') {
          newText = newText + '/';
        }
        newText = newText + text[i];
      }
    }
    dispatch(actions.setExpiryDate(newText));
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header title='Shipping & Payment info' goBackIcon={true} />
    );
  };

  const renderContent = (): JSX.Element => {
    const regex = /^[a-zA-Zа-яА-Я\s]*$/;

    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: utils.responsiveHeight(35),
        }}
      >
        <custom.InputField
          label='Name'
          value={name}
          innerRef={nameInputRef}
          onChangeText={handleNameChange}
          placeholder='Enter your full name'
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
          checkIcon={name.trim() && regex.test(name) ? true : false}
        />
        <custom.InputField
          label='Phone number'
          editable={false}
          value={user?.phoneNumber}
          innerRef={addressInputRef}
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
        />
        <custom.InputField
          label='Email'
          editable={false}
          value={user?.email}
          innerRef={addressInputRef}
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
        />
        <custom.InputField
          label='delivery address'
          value={address}
          innerRef={addressInputRef}
          placeholder='Enter your address'
          onChangeText={handleAddressChange}
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
        />
        <custom.InputField
          maxLength={19}
          value={cardNumber}
          label='card number'
          keyboardType='number-pad'
          innerRef={cardNumberInputRef}
          placeholder='Enter your card number'
          onChangeText={handleCardNumberChange}
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
        />
        <View>
          <View
            style={{
              ...theme.flex.rowCenterSpaceBetween,
              marginBottom: utils.responsiveHeight(20),
            }}
          >
            <custom.InputField
              maxLength={5}
              value={expiryDate}
              label='expiry date'
              placeholder='MM/YY'
              keyboardType='number-pad'
              innerRef={expiryDateInputRef}
              containerStyle={{width: '48%'}}
              onChangeText={handleExpiryDateChange}
            />
            <custom.InputField
              keyboardType='number-pad'
              label='CVV'
              value={cvv}
              maxLength={3}
              innerRef={cvvInputRef}
              placeholder='Enter your cvv'
              onChangeText={handleCvvChange}
              containerStyle={{width: '48%'}}
            />
          </View>
          <custom.InputField
            label='card holder name'
            value={cardHolderName}
            innerRef={cardHolderNameInputRef}
            onChangeText={handleCardHolderNameChange}
            placeholder='Enter your card holder name'
            containerStyle={{marginBottom: utils.responsiveHeight(20)}}
          />
        </View>
      </ScrollView>
    );
  };

  const renderButton = (): JSX.Element => {
    const data = {
      name,
      address,
      cardNumber,
      expiryDate,
      cvv,
      cardHolderName,
    };

    return (
      <components.Button
        title='proceed to checkout'
        containerStyle={{
          padding: 20,
        }}
        onPress={() => {
          if (validation(data)) {
            navigation.navigate('Checkout');
          }
          return null;
        }}
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

export default ShippingAndPaymentInfo;
