import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {alert} from '../alert';
import {utils} from '../utils';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {actions} from '../store/actions';
import {validation} from '../validation';
import {ENDPOINTS, CONFIG} from '../config';
import {validateEmail} from '../validation/validateEmail';
import {handleTextChange} from '../utils/handleTextChange';

const SignIn: React.FC = () => {
  const dispatch = hooks.useAppDispatch();
  const navigation = hooks.useAppNavigation();

  const rememberMe = hooks.useAppSelector(state => state.userSlice.rememberMe);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const handleEmailChange = handleTextChange(setEmail);
  const handlePasswordChange = handleTextChange(setPassword);

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const user = {email, password};

  useEffect(() => {
    if (loading) {
      emailInputRef.current?.blur();
      passwordInputRef.current?.blur();
    }
  }, [loading]);

  const handleSignIn = async () => {
    try {
      setLoading(true);

      const response = await axios({
        data: user,
        method: 'post',
        headers: CONFIG.headers,
        url: ENDPOINTS.LOGIN_USER,
      });

      if (response.status === 200) {
        dispatch(actions.setUser(response.data.user));
        return;
      }

      alert.somethingWentWrong();
    } catch (error: any) {
      if (error.response.status === 401) {
        alert.invalidUsernameOrPassword();
        return;
      }

      alert.somethingWentWrong();
    } finally {
      setLoading(false);
    }
  };

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} />;
  };

  const renderTitle = (): JSX.Element => {
    return (
      <text.H1
        numberOfLines={1}
        style={{
          textTransform: 'capitalize',
          marginBottom: utils.responsiveHeight(14),
        }}
      >
        Welcome back
      </text.H1>
    );
  };

  const renderDescription = (): JSX.Element => {
    return (
      <text.T16
        style={{marginBottom: utils.responsiveHeight(40)}}
        numberOfLines={1}
      >
        Sign in to your account
      </text.T16>
    );
  };

  const renderInputFields = (): JSX.Element => {
    return (
      <React.Fragment>
        <custom.InputField
          label='email'
          value={email}
          innerRef={emailInputRef}
          placeholder='enter email'
          keyboardType='email-address'
          onChangeText={handleEmailChange}
          checkIcon={validateEmail(email, true)}
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
        />
        <custom.InputField
          label='password'
          value={password}
          eyeOffIcon={true}
          keyboardType='default'
          innerRef={passwordInputRef}
          placeholder='enter password'
          secureTextEntry={secureTextEntry}
          onChangeText={handlePasswordChange}
          setSecureTextEntry={setSecureTextEntry}
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
        />
      </React.Fragment>
    );
  };

  const renderForgotPassword = (): JSX.Element => {
    return (
      <View
        style={{
          ...theme.flex.rowCenterSpaceBetween,
          marginBottom: utils.responsiveHeight(30),
        }}
      >
        <TouchableOpacity
          style={{...theme.flex.rowCenter}}
          onPress={() => {
            dispatch(actions.setRememberMe(!rememberMe));
          }}
        >
          <View
            style={{
              width: 18,
              height: 18,
              borderWidth: 1,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.colors.white,
              borderColor: theme.colors.antiFlashWhite,
            }}
          >
            {rememberMe && <svg.RememberCheckSvg />}
          </View>
          <text.T14 style={{marginLeft: 10}} numberOfLines={1}>
            Remember me
          </text.T14>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SendEmailOtpForgot');
          }}
        >
          <text.T16 numberOfLines={1} style={{color: theme.colors.mainColor}}>
            Forgot password?
          </text.T16>
        </TouchableOpacity>
      </View>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='Sign in'
        onPress={() => {
          validation(user) ? handleSignIn() : null;
        }}
        loading={loading}
      />
    );
  };

  const renderIfYouDontHaveAnAccount = (): JSX.Element => {
    return (
      <View style={{flexDirection: 'row', padding: 20}}>
        <text.T16 numberOfLines={1}>Don’t have an account? </text.T16>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <text.T16 style={{color: theme.colors.mainColor}} numberOfLines={1}>
            Sign up
          </text.T16>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHeight = (): JSX.Element => {
    return (
      <View
        style={{
          height: utils.responsiveHeight(70, true),
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
          padding: 20,
          justifyContent: 'center',
        }}
      >
        {renderTitle()}
        {renderDescription()}
        {renderInputFields()}
        {renderForgotPassword()}
        {renderButton()}
        {renderHeight()}
      </KeyboardAwareScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
      {renderIfYouDontHaveAnAccount()}
    </custom.SafeAreaView>
  );
};

export default SignIn;
