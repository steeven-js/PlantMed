import {View, Text, ScrollView} from 'react-native';
import {custom} from '../custom';
import {components} from '../components';
import React from 'react';
import {utils} from '../utils';
import {hooks} from '../hooks';
import {theme} from '../constants';

const MemberAccount = () => {
  const navigation = hooks.useAppNavigation();
  const user = hooks.useAppSelector(state => state.userSlice.user);
  const isPremium = hooks.useAppSelector(
    state => state.userSlice.user?.isPremium,
  );

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title={isPremium ? 'Compte Premium' : 'Compte Gratuit'}
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
            paddingHorizontal: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
              Votre compte est actuellement gratuit
            </Text>
            <Text style={{marginBottom: 20}}>
              Pour accéder à plus de fonctionnalités, passez à un compte Premium
            </Text>
            <Text style={{fontWeight: 'bold', marginBottom: 10}}>
              Avantages du compte Premium :
            </Text>
            <Text>• Accès illimité à toutes les fiches de plantes</Text>
            <Text>• Guides thérapeutiques détaillés</Text>
            <Text>• Conseils d'experts personnalisés</Text>
            <Text>• Suppression des publicités</Text>
          </View>
          <Text style={{marginBottom: 20}}>
            Prix de l'abonnement Premium : 1,99 € / mois
          </Text>
          <Text style={{marginBottom: 20}}>
            L'abonnement se renouvelle automatiquement chaque mois. Vous pouvez
            le résilier à tout moment depuis votre compte.
          </Text>
          <components.Button
            title='Activer le compte Premium'
            onPress={() => {
              'Prenium';
            }}
            containerStyle={{marginBottom: 20}}
          />
          <Text style={{fontSize: 12, color: 'gray'}}>
            En activant le compte Premium, vous acceptez nos Conditions
            d'utilisation et notre Politique de confidentialité. Le paiement
            sera traité via Stripe, notre partenaire de paiement sécurisé.
          </Text>
        </ScrollView>
      </custom.ImageBackground>
    );
  };

  const renderContentPremium = (): JSX.Element => {
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
            paddingHorizontal: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
              Votre compte est actuellement Premium
            </Text>
            <Text style={{marginBottom: 20}}>
              Membre Premium jusqu'au {formatDate(user?.premiumExpiresAt)}
            </Text>
            <Text style={{marginBottom: 10}}>
              Vous bénéficiez de tous les avantages Premium :
            </Text>
            <Text>• Accès illimité à toutes les fiches de plantes</Text>
            <Text>• Guides thérapeutiques détaillés</Text>
            <Text>• Conseils d'experts personnalisés</Text>
            <Text>• Suppression des publicités</Text>
          </View>
          <Text style={{marginBottom: 20}}>
            Votre abonnement se renouvellera automatiquement le{' '}
            {formatDate(user?.premiumExpiresAt)} pour 1,99 €.
          </Text>
          <components.Button
            title="Gérer l'abonnement"
            onPress={() => {
              navigation.navigate('ManageSubscription');
            }}
            containerStyle={{marginBottom: 20}}
          />
          <Text style={{fontSize: 12, color: 'gray'}}>
            Vous pouvez gérer ou annuler votre abonnement à tout moment depuis
            votre compte. L'annulation prendra effet à la fin de la période de
            facturation en cours.
          </Text>
        </ScrollView>
      </custom.ImageBackground>
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
        {isPremium ? renderContentPremium() : renderContentFree()}
      </custom.SafeAreaView>
    </custom.ImageBackground>
  );
};

export default MemberAccount;
