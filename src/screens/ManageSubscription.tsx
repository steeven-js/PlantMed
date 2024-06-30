import {custom} from '../custom';
import {components} from '../components';
import {hooks} from '../hooks';
import React, {useState} from 'react';
import {theme} from '../constants';
import {CONFIG, ENDPOINTS} from '../config';
import axios from 'axios';

const ManageSubscription = () => {
  const navigation = hooks.useAppNavigation();
  const [loading, setLoading] = useState(false);
  const user = hooks.useAppSelector(state => state.userSlice.user);
  const isPremium = hooks.useAppSelector(
    state => state.userSlice.user?.isPremium,
  );

  const cancelSubscription = async () => {
    setLoading(true);
    try {
      // Appel à votre backend pour annuler l'abonnement
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
        // Mise à jour de l'utilisateur après annulation réussie
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
      // Ici, vous pouvez ajouter une notification à l'utilisateur sur l'échec de l'opération
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
      <components.Button
        loading={loading}
        title="S'abonner maintenant"
        containerStyle={{margin: 20}}
        onPress={() => {
          cancelSubscription();
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
        {renderHeader()}
        {renderContent()}
      </custom.SafeAreaView>
    </custom.ImageBackground>
  );
};

export default ManageSubscription;
