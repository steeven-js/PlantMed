import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  Linking,
} from 'react-native';

import {text} from '../text';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {utils} from '../utils';
import {hooks} from '../hooks';

const Prenium: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const goToSub = () => {
    navigation.navigate('Subscription');
  };

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} title='Prenium' />;
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexGrow: 1,
          paddingTop: utils.responsiveHeight(40),
          paddingBottom: utils.responsiveHeight(20),
        }}
      >
        <TouchableOpacity onPress={goToSub}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <Text style={{fontSize: 18}}>Subscription</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  return (
    <custom.ImageBackground
      style={{flex: 1}}
      resizeMode='stretch'
      source={require('../assets/bg/02.png')}
    >
      <custom.SafeAreaView
        insets={['top', 'bottom']}
        containerStyle={{backgroundColor: theme.colors.transparent}}
      >
        {renderHeader()}
        {renderContent()}
      </custom.SafeAreaView>
    </custom.ImageBackground>
  );
};

export default Prenium;
