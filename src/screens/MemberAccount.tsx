import React from 'react';
import {View, ScrollView} from 'react-native';
import {custom} from '../custom';
import {text} from '../text';
import {utils} from '../utils';
import {hooks} from '../hooks';
import {theme} from '../constants';
import {components} from '../components';

const MemberAccount: React.FC = () => {
  const navigation = hooks.useAppNavigation();
  const user = hooks.useAppSelector(state => state.userSlice.user);
  const isPremium = hooks.useAppSelector(
    state => state.userSlice.user?.isPremium,
  );

  const formatDate = (dateString: string | number | Date | undefined) => {
    if (!dateString) {
      return '';
    }
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
            <text.H3 style={{marginBottom: 10}}>
              Votre compte est actuellement gratuit
            </text.H3>
            <text.T16 style={{marginBottom: 20}}>
              Pour accéder à plus de fonctionnalités, passez à un compte Premium
            </text.T16>
            <text.H4 style={{marginBottom: 10}}>
              Avantages du compte Premium :
            </text.H4>
            <text.T16>• Accès illimité à toutes les fiches de plantes</text.T16>
            <text.T16>• Guides thérapeutiques détaillés</text.T16>
            <text.T16>• Conseils d'experts personnalisés</text.T16>
            <text.T16>• Suppression des publicités</text.T16>
          </View>
          <text.T16 style={{marginBottom: 20}}>
            Prix de l'abonnement Premium : 1,99 € / mois
          </text.T16>
          <text.T16 style={{marginBottom: 20}}>
            L'abonnement se renouvelle automatiquement chaque mois. Vous pouvez
            le résilier à tout moment depuis votre compte.
          </text.T16>
          <components.Button
            title='Activer le compte Premium'
            onPress={() => {
              navigation.navigate('Prenium');
            }}
            containerStyle={{marginBottom: 20}}
          />
          <text.T14 style={{color: 'gray'}}>
            En activant le compte Premium, vous acceptez nos Conditions
            d'utilisation et notre Politique de confidentialité. Le paiement
            sera traité via Stripe, notre partenaire de paiement sécurisé.
          </text.T14>
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
            <text.H3 style={{marginBottom: 10}}>
              Votre compte est actuellement Premium
            </text.H3>
            <text.T16 style={{marginBottom: 20}}>
              Membre Premium jusqu'au {formatDate(user?.premiumExpiresAt)}
            </text.T16>
            <text.T16 style={{marginBottom: 10}}>
              Vous bénéficiez de tous les avantages Premium :
            </text.T16>
            <text.T16>• Accès illimité à toutes les fiches de plantes</text.T16>
            <text.T16>• Guides thérapeutiques détaillés</text.T16>
            <text.T16>• Conseils d'experts personnalisés</text.T16>
            <text.T16>• Suppression des publicités</text.T16>
          </View>
          <text.T16 style={{marginBottom: 20}}>
            Votre abonnement se renouvellera automatiquement le{' '}
            {formatDate(user?.premiumExpiresAt)} pour 1,99 €.
          </text.T16>
          <components.Button
            title="Gérer l'abonnement"
            onPress={() => {
              navigation.navigate('ManageSubscription');
            }}
            containerStyle={{marginBottom: 20}}
          />
          <text.T14 style={{color: 'gray'}}>
            Vous pouvez gérer ou annuler votre abonnement à tout moment depuis
            votre compte. L'annulation prendra effet à la fin de la période de
            facturation en cours.
          </text.T14>
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
