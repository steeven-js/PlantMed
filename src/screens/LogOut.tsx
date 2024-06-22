import React from 'react';
import {View, Text, ScrollView, Platform} from 'react-native';

import {text} from '../text';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {actions} from '../store/actions';

const LogOut: React.FC = () => {
  const dispatch = hooks.useAppDispatch();
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
          source={require('../assets/icons/02.png')}
          style={{
            aspectRatio: 123.39 / 120,
            height: utils.responsiveHeight(120),
            marginBottom: utils.responsiveHeight(14),
          }}
        />
        <text.H2 numberOfLines={2}>
          Are you sure you{'\n'}want to sign out ?
        </text.H2>
      </ScrollView>
    );
  };

  const renderButtons = (): JSX.Element => {
    return (
      <View style={{padding: 20}}>
        <components.Button
          title='cancel'
          containerStyle={{marginBottom: utils.responsiveHeight(14)}}
          touchableOpacityStyle={{backgroundColor: theme.colors.steelTeal}}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <components.Button
          title='Sure'
          touchableOpacityStyle={{backgroundColor: theme.colors.pastelMint}}
          onPress={() => {
            dispatch(actions.logOut());
            navigation.navigate('TabNavigator');
          }}
          textStyle={{color: theme.colors.steelTeal}}
        />
      </View>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderContent()}
      {renderButtons()}
    </custom.SafeAreaView>
  );
};

export default LogOut;
