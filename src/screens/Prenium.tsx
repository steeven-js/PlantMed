import React, {useEffect} from 'react';
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
import {hooks} from '../hooks';
import Button from '../components/Button';
import {requestPurchase, useIAP} from 'react-native-iap';

const Prenium: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const sku = 'com.plantmed.botanica';

  const {
    connected,
    products,
    currentPurchase,
    currentPurchaseError,
    // initConnection,
    getProducts,
    finishTransaction,
  } = useIAP();

  useEffect(() => {
    if (currentPurchase) {
      const receipt = currentPurchase.transactionReceipt;
      if (receipt) {
        finishTransaction({purchase: currentPurchase, isConsumable: true});
        Alert.alert('Achat réussi', 'Merci pour votre achat!');
      }
    }
    // if (currentPurchaseError) {
    //   Alert.alert("Erreur d'achat", currentPurchaseError.message);
    // }
  }, [currentPurchase]);

  const handlePurchase = async () => {
    try {
      await requestPurchase({sku: sku[0]});
    } catch (err: any) {
      console.warn(err);
      Alert.alert('Purchase Error', err.message);
    }
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
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
            Devenez Membre Premium!
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
          <Text style={{fontSize: 16, marginBottom: 20}}>
            - Accès à des vidéos et des tutoriels exclusifs pour approfondir vos
            connaissances.
          </Text>
          <Button
            title="S'abonner maintenant"
            onPress={() => {
              handlePurchase();
            }}
          />
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