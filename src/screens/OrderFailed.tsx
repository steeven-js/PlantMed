import React from 'react';
import {View, ScrollView} from 'react-native';

import {text} from '../text';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {actions} from '../store/actions';
import {components} from '../components';

const OrderFailed: React.FC = () => {
  const navigation = hooks.useAppNavigation();
  const dispatch = hooks.useAppDispatch();

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
          source={require('../assets/icons/11.png')}
          style={{
            aspectRatio: 123.39 / 120,
            height: utils.responsiveHeight(120),
            marginBottom: utils.responsiveHeight(14),
          }}
        />
        <text.H2
          numberOfLines={2}
          style={{marginBottom: utils.responsiveHeight(14)}}
        >
          Sorry! Your order{'\n'}has failed!
        </text.H2>
        <text.T16>
          Something went wrong. Please try{'\n'}again to contimue your order.
        </text.T16>
      </ScrollView>
    );
  };

  const renderButtons = (): JSX.Element => {
    return (
      <View style={{padding: 20}}>
        <components.Button
          title='try again'
          containerStyle={{marginBottom: 14}}
          onPress={() => {
            dispatch(actions.setScreen('Order'));
            navigation.reset({
              index: 0,
              routes: [{name: 'TabNavigator'}],
            });
          }}
        />
        <components.Button
          title='go to my profile'
          touchableOpacityStyle={{
            backgroundColor: theme.colors.pastelMint,
          }}
          textStyle={{
            color: theme.colors.steelTeal,
          }}
          onPress={() => {
            dispatch(actions.setScreen('Profile'));
            navigation.reset({
              index: 0,
              routes: [{name: 'TabNavigator'}],
            });
          }}
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

export default OrderFailed;
