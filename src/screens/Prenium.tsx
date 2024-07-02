import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import * as Iap from 'react-native-iap';

import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {utils} from '../utils';
import {hooks} from '../hooks';

const subscriptionId = 'P_199_1m';

const Prenium: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Iap.Subscription[]>([]);
  const navigation = hooks.useAppNavigation();

  useEffect(() => {
    const initializeIap = async () => {
      if (!Iap || typeof Iap.initConnection !== 'function') {
        console.log('Iap is not defined or initConnection is not a function');
        return;
      }

      try {
        await Iap.initConnection();
        console.log('connected to store');
        try {
          const res = await Iap.getSubscriptions({skus: [subscriptionId]});
          console.log('got subscriptions');
          console.log(res);
          setProducts(res);
          console.log(products);
        } catch (error) {
          console.log('error getting subscriptions', error);
        }
      } catch (error) {
        console.log('error connecting to store', error);
      }
    };

    initializeIap();
  }, []);

  const openPrivacyPolicy = () => {
    navigation.navigate('PrivacyPolicy');
  };

  const openTermsOfUse = () => {
    navigation.navigate('TermsOfUse');
  };

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
            onPress={() => {}}
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
