import React, {useState} from 'react';
import {View} from 'react-native';
import {custom} from '../custom';
import {components} from '../components';
import {hooks} from '../hooks';
import {theme} from '../constants';
import {CONFIG, ENDPOINTS} from '../config';
import axios from 'axios';
import {text} from '../text';

const ManageSubscription: React.FC = () => {
  const navigation = hooks.useAppNavigation();
  const [loading, setLoading] = useState(false);
  const user = hooks.useAppSelector(state => state.userSlice.user);
  const isPremium = hooks.useAppSelector(
    state => state.userSlice.user?.isPremium,
  );

  const cancelSubscription = async () => {
    setLoading(true);
    try {
      const cancelResponse = await axios({
        method: 'delete',
        headers: CONFIG.headers,
        url: ENDPOINTS.CANCEL_STRIPE_SUBSCRIBE,
        data: {
          email: user?.email,
          subscriptionId: user?.stripeSubscriptionId,
        },
      });

      if (cancelResponse.status === 200) {
        const updateResponse = await axios({
          method: 'patch',
          headers: CONFIG.headers,
          url: ENDPOINTS.UPDATE_SUBSCRIBE_USER,
          data: {
            email: user?.email,
          },
        });

        if (cancelResponse.status && updateResponse.status === 200) {
          navigation.reset({
            index: 0,
            routes: [{name: 'TabNavigator'}],
          });
        } else {
          throw new Error("Échec de la mise à jour de l'utilisateur");
        }
      } else {
        throw new Error("Échec de l'annulation de l'abonnement");
      }
    } catch (error) {
      console.error("Erreur lors de l'annulation de l'abonnement:", error);
      // Add user notification for operation failure here
    } finally {
      setLoading(false);
    }
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title={isPremium ? 'Compte Premium' : 'Compte Gratuit'}
        goBackIcon={true}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <text.T16 style={{marginBottom: 20, textAlign: 'center'}}>
          {isPremium
            ? 'Voulez-vous annuler votre abonnement Premium ?'
            : 'Voulez-vous vous abonner à notre offre Premium ?'}
        </text.T16>
        <components.Button
          loading={loading}
          title={isPremium ? "Annuler l'abonnement" : "S'abonner maintenant"}
          containerStyle={{margin: 20}}
          onPress={() => {
            if (isPremium) {
              cancelSubscription();
            } else {
              // Add logic for subscribing
              console.log("Logique d'abonnement à implémenter");
            }
          }}
        />
      </View>
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

export default ManageSubscription;
