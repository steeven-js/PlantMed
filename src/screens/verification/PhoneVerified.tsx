import React from 'react';
import {Text, ScrollView, Platform} from 'react-native';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {useAppDispatch} from '../../store';
import {components} from '../../components';
import {actions} from '../../store/actions';

const PhoneVerified: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = hooks.useAppNavigation();

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
          justifyContent: 'center',
        }}
      >
        <custom.Image
          source={require('../../assets/icons/06.png')}
          style={{
            height: utils.responsiveHeight(120),
            aspectRatio: 123.39 / 120,
            marginBottom: utils.responsiveHeight(14),
          }}
        />
        <text.H2 style={{marginBottom: utils.responsiveHeight(14)}}>
          Your phone number has{'\n'}been successfully verified!
        </text.H2>
        <text.T16>
          Now that your account is fully set up,{'\n'}immerse yourself in the
          world of plants!
        </text.T16>
      </ScrollView>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='Done'
        containerStyle={{padding: 20}}
        onPress={() => {
          dispatch(actions.setScreen('Profile'));
          navigation.reset({
            index: 0,
            routes: [{name: 'TabNavigator'}],
          });
        }}
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

export default PhoneVerified;
