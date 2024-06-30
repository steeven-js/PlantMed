import React from 'react';
import {View, Alert, ScrollView} from 'react-native';

import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {items} from '../../items';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {components} from '../../components';

const Profile: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const user = hooks.useAppSelector(state => state.userSlice.user);
  const isPrenium = hooks.useAppSelector(
    state => state.userSlice.user?.isPremium,
  );

  console.log('isPrenium', isPrenium);

  console.log('user', JSON.stringify(user, null, 2));

  const renderUserInfo = (): JSX.Element => {
    return (
      <components.UserData
        onPress={() => {
          if (user) {
            navigation.navigate('EditProfile');
            return;
          }

          Alert.alert(
            'Please verify your email and phone number',
            'You need to verify your email and phone number to edit your profile.',
            [
              {
                text: 'OK',
                onPress: () => {
                  console.log('OK Pressed');
                },
              },
            ],
            {cancelable: false},
          );
        }}
        containerStyle={{marginBottom: utils.responsiveHeight(30)}}
      />
    );
  };

  const renderMenu = (): JSX.Element => {
    return (
      <View style={{paddingLeft: 20}}>
        {/* {isPrenium && (
          <items.ProfileItem
            title={isPrenium ? 'Compte premium' : 'Compte gratuit'}
            onPress={() => {
              navigation.navigate('MemberAccount');
            }}
            icon={<svg.UserSvg />}
            goNavigation={true}
            containerStyle={{marginBottom: utils.responsiveHeight(10)}}
          />
        )} */}
        <items.ProfileItem
          title={'Informations personnelles'}
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          icon={<svg.UserSvg />}
          goNavigation={true}
          containerStyle={{marginBottom: utils.responsiveHeight(10)}}
        />
        <items.ProfileItem
          title="Conditions d'utilisation"
          onPress={() => {
            navigation.navigate('TermsOfUse');
          }}
          icon={<svg.FileTextSvg />}
          goNavigation={true}
          containerStyle={{marginBottom: utils.responsiveHeight(6)}}
        />
        <items.ProfileItem
          title='Politique de confidentialité'
          onPress={() => {
            navigation.navigate('PrivacyPolicy');
          }}
          icon={<svg.FileTextSvg />}
          goNavigation={true}
          containerStyle={{marginBottom: utils.responsiveHeight(6)}}
        />
        <items.ProfileItem
          title='Déconnexion'
          onPress={() => {
            navigation.navigate('LogOut');
          }}
          icon={<svg.SignOutSvg />}
          containerStyle={{marginBottom: utils.responsiveHeight(10)}}
        />
        <items.ProfileItem
          title='Supprimer le compte'
          onPress={() => {
            navigation.navigate('DeleteAccount');
          }}
          icon={<svg.DeleteSvg />}
        />
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <custom.ImageBackground
        style={{flex: 1}}
        resizeMode='stretch'
        source={require('../../assets/bg/02.png')}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: utils.responsiveHeight(50),
            paddingBottom: utils.responsiveHeight(20),
          }}
          showsVerticalScrollIndicator={false}
        >
          {renderUserInfo()}
          {renderMenu()}
        </ScrollView>
      </custom.ImageBackground>
    );
  };

  return renderContent();
};

export default Profile;
