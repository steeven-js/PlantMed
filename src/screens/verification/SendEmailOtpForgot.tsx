import axios from 'axios';
import {TextInput} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {hooks} from '../../hooks';
import {alert} from '../../alert';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {components} from '../../components';
import {validation} from '../../validation';
import {CONFIG, ENDPOINTS} from '../../config';
import {validateEmail} from '../../validation/validateEmail';
import {handleTextChange} from '../../utils/handleTextChange';
import {text} from '../../text';

const SendEmailOtpForgot: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const emailInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (loading) {
      emailInputRef.current?.blur();
    }
  }, [loading]);

  const handleEmailChange = handleTextChange(setEmail);

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'post',
        data: {email},
        headers: CONFIG.headers,
        url: ENDPOINTS.SEND_EMAIL_OTP,
      });

      if (response.status === 200) {
        navigation.replace('VerifyEmailForgot', {email});
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
    return <components.Header goBackIcon={true} title={'Forgot password'} />;
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
        value={email}
        innerRef={emailInputRef}
        keyboardType='email-address'
        placeholder='enter your email'
        onChangeText={handleEmailChange}
        checkIcon={validateEmail(email, true)}
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
          validation({email}) ? handleSendOtp() : null;
        }}
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
          paddingTop: utils.responsiveHeight(25),
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

export default SendEmailOtpForgot;
