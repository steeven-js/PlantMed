import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

import {text} from '../text';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {utils} from '../utils';
import Button from '../components/Button';
import {
  initPaymentSheet,
  presentPaymentSheet,
  useStripe,
} from '@stripe/stripe-react-native';
import {CONFIG, ENDPOINTS} from '../config';
import {hooks} from '../hooks';

const Prenium: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigation = hooks.useAppNavigation();

  const user = hooks.useAppSelector(state => state.userSlice.user);
  const isPrenium = hooks.useAppSelector(
    state => state.userSlice.user?.isPrenium,
  );
  const cancelAtPeriodEnd = hooks.useAppSelector(
    state => state.userSlice.user?.cancelAtPeriodEnd,
  );
  const email = user?.email || '';

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} title='Premium' />;
  };

  const openPrivacyPolicy = () => {
    navigation.navigate('PrivacyPolicy');
  };

  const openTermsOfUse = () => {
    navigation.navigate('TermsOfUse');
  };

  const subscribe = async () => {
    setLoading(true);
    try {
      // Appel à votre backend pour créer l'abonnement
      const response = await axios({
        method: 'post',
        headers: CONFIG.headers,
        url: ENDPOINTS.CREATE_STRIPE_SUBSCRIBE,
        data: {email},
      });

      const {clientSecret, subscriptionId} = response.data;

      // Initialiser la feuille de paiement
      const {error} = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'PlantMed',
        returnURL: 'com.jsprod.plantmed://stripe-redirect',
      });

      if (error) {
        Alert.alert('Erreur', error.message);
        return;
      }

      // Présenter la feuille de paiement
      const {error: presentError} = await presentPaymentSheet();

      if (presentError) {
        Alert.alert('Erreur', presentError.message);
      } else {
        Alert.alert('Succès', 'Votre abonnement a été activé avec succès !');

        // Paiement réussi, mettre à jour l'utilisateur
        const updateResponse = await axios({
          method: 'patch',
          headers: CONFIG.headers,
          url: ENDPOINTS.UPDATE_SUBSCRIBE_USER,
          data: {
            email,
            subscriptionId,
          },
        });

        if (response.status && updateResponse.status === 200) {
          navigation.replace('PremiumActivated');
          return;
        }

        // Mettre à jour l'état de l'application pour refléter le nouvel abonnement
      }
    } catch (error: any) {
      Alert.alert('Erreur', error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  const AlertAlreadyPrenium = () => {
    return Alert.alert(
      'Prenium actif',
      'Vous avez déjà un abonnement prenium actif',
      [
        {
          text: 'ok',
          onPress: () => {
            navigation.reset({index: 0, routes: [{name: 'TabNavigator'}]});
          },
        },
      ],
    );
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
            Devenez Membre Premium!
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
            Abonnement Premium Plantes Médicinales
          </Text>
          <Text style={{fontSize: 16, marginBottom: 20}}>
            Pour seulement 1,99 € par mois, profitez d'un accès exclusif à des
            contenus premium sur les plantes médicinales. Voici ce que vous
            obtenez avec l'abonnement Premium :
          </Text>
          <Text style={{fontSize: 16, marginBottom: 10}}>
            - Accès à des fiches détaillées sur plus de 100 plantes médicinales.
          </Text>
          <Text style={{fontSize: 16, marginBottom: 10}}>
            - Recettes exclusives pour préparer des remèdes maison.
          </Text>
          <Text style={{fontSize: 16, marginBottom: 10}}>
            - Conseils personnalisés pour utiliser les plantes selon vos
            besoins.
          </Text>
          <Text style={{fontSize: 16, marginBottom: 10}}>
            - Mises à jour régulières avec de nouvelles informations et plantes
            ajoutées chaque mois.
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
            Durée de l'abonnement : 1 mois
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 20}}>
            Prix : 1,99 € par mois (renouvellement automatique)
          </Text>
          <components.Button
            loading={loading}
            title="S'abonner maintenant"
            containerStyle={{margin: 20}}
            onPress={() => {
              if (isPrenium == false && cancelAtPeriodEnd == true) {
                subscribe();
              } else {
                AlertAlreadyPrenium();
              }
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
                borderWidth: 1,
                paddingVertical: 20,
                borderRadius: 10,
                borderColor: theme.colors.steelTeal,
              }}
              onPress={openPrivacyPolicy}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                }}
              >
                Politique de confidentialité
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
                borderWidth: 1,
                paddingVertical: 20,
                borderRadius: 10,
                borderColor: theme.colors.steelTeal,
              }}
              onPress={openTermsOfUse}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                }}
              >
                Conditions d'utilisation
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
