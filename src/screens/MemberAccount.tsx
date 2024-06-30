import {View, Text, ScrollView} from 'react-native';
import {custom} from '../custom';
import {components} from '../components';
import React from 'react';
import {utils} from '../utils';
import {hooks} from '../hooks';

const MemberAccount = () => {
  const user = hooks.useAppSelector(state => state.userSlice.user);

  const isPrenium = hooks.useAppSelector(
    state => state.userSlice.user?.isPremium,
  );

  console.log('isPrenium', isPrenium);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title={isPrenium ? 'Compte premium' : 'Compte gratuit'}
        goBackIcon={true}
      />
    );
  };

  const renderContentFree = (): JSX.Element => {
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
          <View>
            <Text>Votre compte est actuellement gratuit</Text>
            <Text>
              Pour accéder à plus de fonctionnalités, passez à un compte premium
            </Text>
          </View>
          <components.Button
            title='Activer le compte premium'
            onPress={() => {}}
            containerStyle={{paddingHorizontal: 20}}
          />
        </ScrollView>
      </custom.ImageBackground>
    );
  };

  const renderContentPrenium = (): JSX.Element => {
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
          <View>
            <Text>Votre compte est actuellement prenium</Text>
            <Text>Membre prenium jusqu'au {user?.premiumExpiresAt} </Text>
          </View>
          <components.Button
            title="Résilier l'abonnement"
            onPress={() => {}}
            containerStyle={{paddingHorizontal: 20}}
          />
        </ScrollView>
      </custom.ImageBackground>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {isPrenium ? renderContentPrenium() : renderContentFree()}
    </custom.SafeAreaView>
  );
};

export default MemberAccount;
