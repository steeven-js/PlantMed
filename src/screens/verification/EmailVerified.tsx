import React from 'react';
import {ScrollView} from 'react-native';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {useAppDispatch} from '../../store';
import {actions} from '../../store/actions';
import {components} from '../../components';

const EmailVerified: React.FC = () => {
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
          source={require('../../assets/icons/07.png')}
          style={{
            height: utils.responsiveHeight(120),
            aspectRatio: 123.39 / 120,
            marginBottom: utils.responsiveHeight(14),
          }}
        />
        <text.H2 style={{marginBottom: utils.responsiveHeight(14)}}>
          Your email has been{'\n'}successfully verified!
        </text.H2>
        <text.T16>
          Now that you're officially a part of our {'\n'}plant-loving family!
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
          navigation.navigate('TabNavigator');
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

export default EmailVerified;
