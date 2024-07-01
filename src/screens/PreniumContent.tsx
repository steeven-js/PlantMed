import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {hooks} from '../hooks';
import {components} from '../components';
import {custom} from '../custom';
import {theme} from '../constants';
import {utils} from '../utils';

const PreniumContent: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const user = hooks.useAppSelector(state => state.userSlice.user);
  const isPremium = hooks.useAppSelector(
    state => state.userSlice.user?.isPremium,
  );
  const cancelAtPeriodEnd = hooks.useAppSelector(
    state => state.userSlice.user?.cancelAtPeriodEnd,
  );

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} title='Premium' />;
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
        <View style={{marginBottom: 20}}></View>
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

export default PreniumContent;
