import React from 'react';
import {ScrollView} from 'react-native';

import {text} from '../text';
import {utils} from '../utils';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {components} from '../components';
import {theme} from '../constants';

const InfoSaved: React.FC = () => {
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
          source={require('../assets/icons/05.png')}
          style={{
            height: utils.responsiveHeight(120),
            aspectRatio: 123.39 / 120,
            marginBottom: utils.responsiveHeight(14),
          }}
        />
        <text.H2
          style={{marginBottom: utils.responsiveHeight(14)}}
          numberOfLines={1}
        >
          Informations sauvegardées !
        </text.H2>
        <text.T16>
          Vos informations personnelles ont été {'\n'}enregistrées en toute
          sécurité.
        </text.T16>
      </ScrollView>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='Terminé'
        containerStyle={{
          padding: 20,
        }}
        onPress={() => {
          navigation.reset({index: 0, routes: [{name: 'TabNavigator'}]});
        }}
      />
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
        {renderContent()}
        {renderButton()}
      </custom.SafeAreaView>
    </custom.ImageBackground>
  );
};

export default InfoSaved;
