import axios from 'axios';
import {Alert, TextInput} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {hooks} from '../hooks';
import {alert} from '../alert';
import {utils} from '../utils';
import {custom} from '../custom';
import {components} from '../components';
import {validation} from '../validation';
import {ENDPOINTS, CONFIG} from '../config';
import {handleTextChange} from '../utils/handleTextChange';
import {NewPasswordScreenProps} from '../types/ScreenProps';

const NewPassword: React.FC<NewPasswordScreenProps> = ({route}) => {
  const {email} = route.params;

  const navigation = hooks.useAppNavigation();

  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [newSecureTextEntry, setNewSecureTextEntry] = useState<boolean>(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] =
    useState<boolean>(true);

  const newPasswordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const handlePasswordChange = handleTextChange(setPassword);
  const handleConfirmPasswordChange = handleTextChange(setConfirmPassword);

  useEffect(() => {
    if (loading) {
      newPasswordInputRef.current?.blur();
      confirmPasswordInputRef.current?.blur();
    }
  }, [loading]);

  const handleChangePassword = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'post',
        data: {email, password},
        headers: CONFIG.headers,
        url: ENDPOINTS.CHANGE_PASSWORD,
      });

      if (response.status === 200) {
        navigation.replace('ForgotPasswordSentEmail');
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
    return <components.Header goBackIcon={true} title={'Reset password'} />;
  };

  const renderDescription = (): JSX.Element => {
    return (
      <text.T16 style={{marginBottom: utils.responsiveHeight(40)}}>
        Enter new password and confirm.
      </text.T16>
    );
  };

  const renderInputFields = (): JSX.Element => {
    return (
      <React.Fragment>
        <custom.InputField
          value={password}
          eyeOffIcon={true}
          label='new password'
          keyboardType='default'
          innerRef={newPasswordInputRef}
          placeholder='enter new password'
          onChangeText={handlePasswordChange}
          secureTextEntry={newSecureTextEntry}
          setSecureTextEntry={setNewSecureTextEntry}
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
        />
        <custom.InputField
          eyeOffIcon={true}
          keyboardType='default'
          value={confirmPassword}
          label='confirm password'
          innerRef={confirmPasswordInputRef}
          placeholder='enter confirm password'
          secureTextEntry={confirmSecureTextEntry}
          onChangeText={handleConfirmPasswordChange}
          setSecureTextEntry={setConfirmSecureTextEntry}
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
        />
      </React.Fragment>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        loading={loading}
        title={'change password'}
        onPress={() => {
          validation({password, confirmPassword})
            ? handleChangePassword()
            : null;
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

export default NewPassword;
