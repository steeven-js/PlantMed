import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';

import {text} from '../text';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {actions} from '../store/actions';

const OrderSuccessful: React.FC = () => {
  const dispatch = hooks.useAppDispatch();
  const navigation = hooks.useAppNavigation();

  useEffect(() => {
    dispatch(actions.resetCart());
  }, []);

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
          source={require('../assets/icons/10.png')}
          style={{
            height: utils.responsiveHeight(120),
            aspectRatio: 123.39 / 120,
            marginBottom: utils.responsiveHeight(14),
          }}
        />
        <text.H2
          numberOfLines={2}
          style={{marginBottom: utils.responsiveHeight(14)}}
        >
          Thank you for{'\n'}your order!
        </text.H2>
        <text.T16>
          Your order will be delivered on time.{'\n'}Thank you!
        </text.T16>
      </ScrollView>
    );
  };

  const renderButtons = (): JSX.Element => {
    return (
      <View style={{padding: 20}}>
        <components.Button
          title='View orders'
          containerStyle={{marginBottom: utils.responsiveHeight(14)}}
          onPress={() => {
            navigation.navigate('OrderHistory');
          }}
        />
        <components.Button
          title='Continue Shopping'
          touchableOpacityStyle={{
            backgroundColor: theme.colors.pastelMint,
          }}
          textStyle={{
            color: theme.colors.steelTeal,
          }}
          onPress={() => {
            dispatch(actions.setScreen('Home'));
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

export default OrderSuccessful;
