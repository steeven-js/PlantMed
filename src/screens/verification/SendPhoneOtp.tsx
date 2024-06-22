import axios from 'axios';
import {Text, Platform, TextInput} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {hooks} from '../../hooks';
import {alert} from '../../alert';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {UserType} from '../../types';
import {validation} from '../../validation';
import {components} from '../../components';
import {CONFIG, ENDPOINTS} from '../../config';
import {handleTextChange} from '../../utils/handleTextChange';
import {validatePhoneNumber} from '../../validation/validatePhoneNumber';

const SendPhoneOtp: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const user = hooks.useAppSelector(state => state.userSlice.user);

  const [loading, setLoading] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const phoneNumberInputRef = useRef<TextInput>(null);

  const handlePhoneNumberChange = handleTextChange(setPhoneNumber);

  useEffect(() => {
    if (loading) {
      phoneNumberInputRef.current?.blur();
    }
  }, [loading]);

  const data: UserType = {
    email: user?.email,
    phoneNumber: phoneNumber,
  };

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const response = await axios({
        method: 'post',
        headers: CONFIG.headers,
        url: ENDPOINTS.SEND_PHONE_OTP,
        data: data,
      });

      if ((response.status = 200)) {
        navigation.replace('VerifyPhone', {email: user?.email, phoneNumber});
        return;
      }

      alert.somethingWentWrong();
    } catch (error: any) {
      alert.somethingWentWrong();
    } finally {
      setLoading(false);
    }
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header goBackIcon={true} title='Verify your phone number' />
    );
  };

  const renderDescription = (): JSX.Element => {
    return (
      <Text
        style={{
          ...theme.fonts.DM_Sans_400Regular,
          fontSize: Platform.OS === 'ios' ? 16 : 14,
          lineHeight: 16 * 1.7,
          color: theme.colors.textColor,
          marginBottom: utils.responsiveHeight(40),
        }}
      >
        We have sent you an SMS with a code to {'\n'}number: {phoneNumber}
      </Text>
    );
  };

  const renderInputFields = (): JSX.Element => {
    return (
      <custom.InputField
        label='phone number'
        value={phoneNumber}
        keyboardType='phone-pad'
        innerRef={phoneNumberInputRef}
        placeholder='enter phone number'
        onChangeText={handlePhoneNumberChange}
        checkIcon={validatePhoneNumber(phoneNumber, true)}
        containerStyle={{marginBottom: utils.responsiveHeight(20)}}
      />
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title={'Confirm'}
        loading={loading}
        onPress={() => {
          validation({phoneNumber}) ? handleSendOtp() : null;
        }}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1, padding: 20}}
      >
        {renderDescription()}
        {renderInputFields()}
        {renderButton()}
      </KeyboardAwareScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default SendPhoneOtp;
