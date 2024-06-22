import React from 'react';
import {ScrollView} from 'react-native';

import {text} from '../text';
import {utils} from '../utils';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {components} from '../components';

const ForgotPasswordSentEmail: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
          justifyContent: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <custom.Image
          source={require('../assets/icons/01.png')}
          style={{
            height: utils.responsiveHeight(120),
            aspectRatio: 123.39 / 120,
            marginBottom: utils.responsiveHeight(14),
          }}
        />
        <text.H2 style={{marginBottom: utils.responsiveHeight(14)}}>
          Your password has{'\n'}been reset!
        </text.H2>
        <text.T16>
          Log in with your new credentials.{'\n'}Welcome back!
        </text.T16>
      </ScrollView>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title={'Done'}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'SignIn'}],
          });
        }}
        containerStyle={{padding: 20}}
      />
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderContent()}
      {renderButton()}
    </custom.SafeAreaView>
  );
};

export default ForgotPasswordSentEmail;
