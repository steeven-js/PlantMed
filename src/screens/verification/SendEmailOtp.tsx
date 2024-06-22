import axios from 'axios';
import React, {useState} from 'react';
import {Text, Platform} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../../text';
import {alert} from '../../alert';
import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {UserType} from '../../types';
import {theme} from '../../constants';
import {components} from '../../components';
import {ENDPOINTS, CONFIG} from '../../config';

const SendEmailOtp: React.FC = () => {
  const navigation = hooks.useAppNavigation();
  const user = hooks.useAppSelector(state => state.userSlice.user);
  const email = user?.email;

  const data: UserType = {email};

  const [loading, setLoading] = useState<boolean>(false);

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'post',
        url: ENDPOINTS.SEND_EMAIL_OTP,
        headers: CONFIG.headers,
        data: data,
      });

      if (response.status === 200) {
        navigation.replace('VerifyEmail', data);
        return;
      }
      alert.somethingWentWrong();
    } catch (error) {
      alert.somethingWentWrong();
    } finally {
      setLoading(false);
    }
  };

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} title='Verify your email' />;
  };

  const renderDescription = (): JSX.Element => {
    return (
      <text.T16 style={{marginBottom: utils.responsiveHeight(40)}}>
        Please enter your email address. You will receive an OTP code to create
        a new password via email.
      </text.T16>
    );
  };

  const renderInputField = (): JSX.Element => {
    return (
      <custom.InputField
        label='email'
        editable={false}
        value={user?.email}
        keyboardType='email-address'
        placeholder='oliviabennett@mail.com'
        containerStyle={{marginBottom: utils.responsiveHeight(20)}}
      />
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title={'Send'}
        loading={loading}
        onPress={() => {
          handleSendOtp();
        }}
        containerStyle={{marginBottom: 20}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: utils.responsiveHeight(20),
          paddingBottom: utils.responsiveHeight(20),
        }}
      >
        {renderDescription()}
        {renderInputField()}
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

export default SendEmailOtp;
