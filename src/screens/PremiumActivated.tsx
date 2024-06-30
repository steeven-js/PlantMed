import axios from 'axios';
import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {text} from '../text';
import {alert} from '../alert';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {components} from '../components';
import {actions} from '../store/actions';
import {CONFIG, ENDPOINTS} from '../config';
import {SignUpAccountCreatedScreenProps} from '../types/ScreenProps';
import {theme} from '../constants';
import Button from '../components/Button';

const PremiumActivated: React.FC = () => {
  const dispatch = hooks.useAppDispatch();
  const navigation = hooks.useAppNavigation();

  const [loading, setLoading] = useState<boolean>(false);

  const handlePremiumActivated = async () => {
    try {
      setLoading(true);

      navigation.reset({
        index: 0,
        routes: [{name: 'TabNavigator'}],
      });
    } catch (error: any) {
      alert.somethingWentWrong();
    } finally {
      setLoading(false);
    }
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
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
            Félicitations !
          </Text>
          <Text style={{fontSize: 18, marginBottom: 20}}>
            Vous êtes maintenant un membre Premium !
          </Text>
          <Text style={{fontSize: 16, marginBottom: 20}}>
            Votre abonnement a été activé avec succès. Voici ce qui vous attend
            :
          </Text>
          <Text style={{fontSize: 16, marginBottom: 10}}>
            • Accès immédiat à plus de 100 fiches détaillées sur les plantes
            médicinales
          </Text>
          <Text style={{fontSize: 16, marginBottom: 10}}>
            • Recettes exclusives pour préparer vos remèdes maison
          </Text>
          <Text style={{fontSize: 16, marginBottom: 10}}>
            • Conseils personnalisés pour l'utilisation des plantes
          </Text>
          <Text style={{fontSize: 16, marginBottom: 10}}>
            • Vidéos et tutoriels exclusifs
          </Text>
          <Text style={{fontSize: 16, marginBottom: 20}}>
            • Mises à jour mensuelles avec de nouvelles informations
          </Text>
        </View>
      </ScrollView>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        loading={loading}
        title='Découvrir PlantMed'
        containerStyle={{margin: 20}}
        onPress={() => {
          handlePremiumActivated();
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

export default PremiumActivated;
