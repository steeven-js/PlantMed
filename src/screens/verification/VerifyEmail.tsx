import axios, {AxiosError} from 'axios';
import {
  View,
  Text,
  Alert,
  Platform,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';

import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {UserType} from '../../types';
import {theme} from '../../constants';
import {actions} from '../../store/actions';
import {components} from '../../components';
import {CONFIG, ENDPOINTS} from '../../config';
import {VerifyEmailScreenProps} from '../../types/ScreenProps';
import {useAppNavigation} from '../../navigation/StackNavigator';

const Verification: React.FC<VerifyEmailScreenProps> = ({route}) => {
  let {email} = route.params;
  const dispatch = hooks.useAppDispatch();

  const navigation = useAppNavigation();

  const inp1Ref = useRef(null);
  const inp2Ref = useRef(null);
  const inp3Ref = useRef(null);
  const inp4Ref = useRef(null);
  const inp5Ref = useRef(null);

  const [inp1, setInp1] = useState('');
  const [inp2, setInp2] = useState('');
  const [inp3, setInp3] = useState('');
  const [inp4, setInp4] = useState('');
  const [inp5, setInp5] = useState('');

  const [loading, setLoading] = useState<boolean>(false);

  const otp = inp1 + inp2 + inp3 + inp4 + inp5;

  const data: UserType = {email, otp};

  useEffect(() => {
    if (inp1Ref.current) {
      (inp1Ref.current as TextInput).focus();
    }
  }, []);

  useEffect(() => {
    if (
      inp1Ref.current &&
      inp2Ref.current &&
      inp3Ref.current &&
      inp4Ref.current &&
      inp5Ref.current
    ) {
      if (otp.length === 5) {
        (inp1Ref.current as TextInput).blur();
        (inp2Ref.current as TextInput).blur();
        (inp3Ref.current as TextInput).blur();
        (inp4Ref.current as TextInput).blur();
        (inp5Ref.current as TextInput).blur();
        handleVerify();
      }
    }
  }, [otp]);

  const handleVerify = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'post',
        data: data,
        headers: CONFIG.headers,
        url: ENDPOINTS.VERIFY_EMAIL_OTP,
      });

      if (response.status === 200) {
        console.log('response >>', response.data.user);
        dispatch(actions.setUser(response.data.user));
        navigation.replace('EmailVerified');
        return;
      }

      Alert.alert('Something went wrong, please try again later');
    } catch (error) {
      const err = error as AxiosError;

      if (
        (err.response && err.response.status === 422) ||
        (err.response && err.response.status === 404) ||
        (err.response && err.response.status === 401)
      ) {
        const message = (err.response.data as any).message;

        Alert.alert(
          'Error',
          message,
          [
            {
              text: 'OK',
              onPress: () => {
                console.log('OK Pressed');
              },
            },
          ],
          {cancelable: false},
        );
        return;
      }

      Alert.alert('Something went wrong, please try again later');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'post',
        data: data,
        headers: CONFIG.headers,
        url: ENDPOINTS.SEND_EMAIL_OTP,
      });

      if (response.status === 200) {
        Alert.alert('OTP sent successfully');
        return;
      }

      Alert.alert('Something went wrong, please try again later');
    } catch (error) {
      Alert.alert('Something went wrong, please try again later');
    } finally {
      setLoading(false);
    }
  };

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} title={'Verification'} />;
  };

  const renderDescription = (): JSX.Element => {
    return (
      <Text
        style={{
          marginBottom: utils.responsiveHeight(20),
          ...theme.fonts.DM_Sans_400Regular,
          color: theme.colors.textColor,
          fontSize: Platform.OS === 'ios' ? 16 : 14,
          lineHeight: Platform.OS === 'ios' ? 16 * 1.7 : 14 * 1.7,
        }}
      >
        Enter your OTP code here.
      </Text>
    );
  };

  const renderInputFields = (): JSX.Element => {
    const inputStyle: object = {
      textAlign: 'center',
      flex: 1,
      width: '100%',
      fontSize: Platform.OS === 'ios' ? 20 : 18,
      color: theme.colors.mainColor,
    };

    const inputContainerStyle: object = {
      width: utils.responsiveWidth(59),
      height: utils.responsiveWidth(59),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#E7EBEB',
      backgroundColor: theme.colors.white,
    };

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: utils.responsiveHeight(15),
        }}
      >
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp1Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={text => {
              setInp1(text);
              if (text !== '') {
                if (inp2Ref.current) {
                  (inp2Ref.current as TextInput).focus();
                }
              } else if (text === '') {
                if (inp1Ref.current) {
                  (inp1Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp2Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={text => {
              setInp2(text);
              if (text !== '') {
                if (inp3Ref.current) {
                  (inp3Ref.current as TextInput).focus();
                }
              } else if (text === '') {
                if (inp1Ref.current) {
                  (inp1Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp3Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={text => {
              setInp3(text);
              if (text !== '') {
                if (inp4Ref.current) {
                  (inp4Ref.current as TextInput).focus();
                }
              } else if (text === '') {
                if (inp2Ref.current) {
                  (inp2Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp4Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={text => {
              setInp4(text);
              if (text !== '') {
                if (inp5Ref.current) {
                  (inp5Ref.current as TextInput).focus();
                }
              } else if (text === '') {
                if (inp3Ref.current) {
                  (inp3Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp5Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={text => {
              setInp5(text);
              if (text === '') {
                if (inp4Ref.current) {
                  (inp4Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
      </View>
    );
  };

  const renderIfDidNotReceiveCode = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: utils.responsiveHeight(30),
        }}
      >
        <Text
          style={{
            ...theme.fonts.DM_Sans_400Regular,
            fontSize: Platform.OS === 'ios' ? 16 : 14,
            color: theme.colors.textColor,
            lineHeight: Platform.OS === 'ios' ? 16 * 1.7 : 14 * 1.7,
          }}
        >
          Didn’t receive the OTP?{' '}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              ...theme.fonts.DM_Sans_400Regular,
              fontSize: Platform.OS === 'ios' ? 16 : 14,
              lineHeight: Platform.OS === 'ios' ? 16 * 1.7 : 14 * 1.7,
              color: theme.colors.mainColor,
            }}
            onPress={handleResendOtp}
          >
            Resend.
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='verify'
        loading={loading}
        onPress={() => {
          Alert.alert(
            'Sorry',
            'Unfortunatelly, this feature is not available yet.',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel');
                },
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  console.log('OK');
                },
              },
            ],
            {cancelable: false},
          );
        }}
        containerStyle={{marginBottom: 20}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        {renderDescription()}
        {renderInputFields()}
        {renderIfDidNotReceiveCode()}
        {renderButton()}
      </ScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default Verification;
