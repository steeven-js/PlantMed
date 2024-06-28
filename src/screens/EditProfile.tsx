import axios from 'axios';
import {useSelector} from 'react-redux';
import {View, ScrollView, TextInput} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import {alert} from '../alert';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {UserType} from '../types';
import {RootState} from '../store';
import {validation} from '../validation';
import {actions} from '../store/actions';
import {components} from '../components';
import {ENDPOINTS, CONFIG} from '../config';
import {handleTextChange} from '../utils/handleTextChange';

const EditProfile: React.FC = () => {
  const dispatch = hooks.useAppDispatch();
  const navigation = hooks.useAppNavigation();

  const user: UserType | null = useSelector(
    (state: RootState) => state.userSlice.user,
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>(user?.name || '');
  const [email, setEmail] = useState<string>(user?.email || '');
  const [phoneNumber, setPhoneNumber] = useState<string>(
    user?.phoneNumber || '',
  );
  const [location, setLocation] = useState<string>(user?.location || '');

  const handleNameChange = handleTextChange(setName);
  const handleEmailChange = handleTextChange(setEmail);
  const handleLocationChange = handleTextChange(setLocation);
  const handlePhoneNumberChange = handleTextChange(setPhoneNumber);

  const updatedUser = {name, location};

  const nameInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const locationInputRef = useRef<TextInput>(null);
  const phoneNumberInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (loading) {
      nameInputRef.current?.blur();
      emailInputRef.current?.blur();
      locationInputRef.current?.blur();
      phoneNumberInputRef.current?.blur();
    }
  }, [loading]);

  const handleUpdate = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: 'put',
        url: ENDPOINTS.UPDATE_USER + `/${user?.id}`,
        headers: CONFIG.headers,
        data: updatedUser,
      });

      if (response.status === 200) {
        dispatch(actions.setUser(response.data.user));
        navigation.navigate('InfoSaved');
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
      <components.Header
        title='Modifier les informations personnelles'
        goBackIcon={true}
      />
    );
  };

  const renderUserInfo = (): JSX.Element => {
    return (
      <components.UserData
        containerStyle={{marginBottom: utils.responsiveHeight(40)}}
      />
    );
  };

  const renderInputFields = (): JSX.Element => {
    return (
      <View style={{paddingHorizontal: 20}}>
        <custom.InputField
          label='Nom'
          value={name}
          keyboardType='default'
          innerRef={nameInputRef}
          placeholder={'entrez votre nom'}
          onChangeText={handleNameChange}
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
        />
        <custom.InputField
          value={email}
          label='Email'
          innerRef={emailInputRef}
          placeholder={'entrez votre email'}
          keyboardType='email-address'
          onChangeText={handleEmailChange}
          editable={user?.email ? false : true}
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
        />
        <custom.InputField
          label='Localisation'
          value={location}
          keyboardType='default'
          innerRef={locationInputRef}
          placeholder={'entrez votre localisation'}
          onChangeText={handleLocationChange}
          containerStyle={{marginBottom: utils.responsiveHeight(20)}}
        />
      </View>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='Enregistrer les modifications'
        loading={loading}
        onPress={() => {
          validation(updatedUser) ? handleUpdate() : null;
        }}
        containerStyle={{paddingHorizontal: 20}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <custom.ImageBackground
        style={{flex: 1}}
        resizeMode='stretch'
        source={require('../assets/bg/02.png')}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: utils.responsiveHeight(40),
          }}
          showsVerticalScrollIndicator={false}
        >
          {renderUserInfo()}
          {renderInputFields()}
          {renderButton()}
        </ScrollView>
      </custom.ImageBackground>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default EditProfile;
