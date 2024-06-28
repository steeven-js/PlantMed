import axios from 'axios';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import {text} from '../text';
import {alert} from '../alert';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {components} from '../components';
import {actions} from '../store/actions';
import {CONFIG, ENDPOINTS} from '../config';
import {SignUpAccountCreatedScreenProps} from '../types/ScreenProps';
import {theme} from '../constants';

const SignUpAccountCreated: React.FC<SignUpAccountCreatedScreenProps> = ({
  route,
}) => {
  const dispatch = hooks.useAppDispatch();
  const {email, password} = route.params;
  const navigation = hooks.useAppNavigation();

  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: 'post',
        url: ENDPOINTS.LOGIN_USER,
        headers: CONFIG.headers,
        data: {email, password},
      });

      if (response.status === 200) {
        dispatch(actions.setRememberMe(true));
        dispatch(actions.setUser(response.data.user));
        return;
      }

      navigation.reset({
        index: 0,
        routes: [{name: 'TabNavigator'}],
      });

      alert.somethingWentWrong();
    } catch (error: any) {
      navigation.reset({
        index: 0,
        routes: [{name: 'TabNavigator'}],
      });
      alert.somethingWentWrong();
    } finally {
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{name: 'TabNavigator'}],
      });
    }
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
          justifyContent: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        <custom.Image
          source={require('../assets/icons/01.png')}
          style={{
            height: utils.responsiveHeight(120),
            aspectRatio: 123.39 / 120,
            marginBottom: utils.responsiveHeight(20),
          }}
        />
        <text.H2
          style={{
            textTransform: 'capitalize',
            marginBottom: utils.responsiveHeight(14),
          }}>
          Compte Créé!
        </text.H2>
        <text.T16>
          Votre compte a été créé {'\n'}
          avec succès.
        </text.T16>
      </ScrollView>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        loading={loading}
        title="Découvrir PlantMed"
        containerStyle={{margin: 20}}
        onPress={() => {
          handleSignIn();
        }}
      />
    );
  };

  return (
    <custom.ImageBackground
      style={{flex: 1}}
      resizeMode="stretch"
      source={require('../assets/bg/02.png')}>
      <custom.SafeAreaView
        insets={['top', 'bottom']}
        containerStyle={{backgroundColor: theme.colors.transparent}}>
        {renderContent()}
        {renderButton()}
      </custom.SafeAreaView>
    </custom.ImageBackground>
  );
};

export default SignUpAccountCreated;
