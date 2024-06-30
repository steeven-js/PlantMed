import React, {useState} from 'react';
import {Alert, View} from 'react-native';
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
      // Appel à votre backend pour annuler l'abonnement
      const cancelResponse = await axios({
        method: 'delete',
        headers: CONFIG.headers,
        url: ENDPOINTS.CANCEL_STRIPE_SUBSCRIBE,
        data: {
          email: user?.email,
        },
      });

      if (cancelResponse.status === 200) {
        navigation.reset({
          index: 0,
          routes: [{name: 'TabNavigator'}],
        });
      }
      Alert.alert('Succès', 'Votre abonnement a été annulé avec succès !');
    } catch (error) {
      console.error("Erreur lors de l'annulation de l'abonnement:", error);
      Alert.alert(
        'Erreur',
        "Une erreur est survenue lors de l'annulation de l'abonnement",
      );
    } finally {
      setLoading(false);
    }
  };

  const cancelPrenium = () => {
    return Alert.alert(
      'Annulation',
      'Voulez vous vraiment annuler votre abonnement?',
      [
        {
          text: 'Oui',
          onPress: () => {
            cancelSubscription();
          },
        },
        {
          text: 'non',
          onPress: () => {
            navigation.goBack();
          },
        },
      ],
    );
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
      <View style={{flex: 1, justifyContent: 'center'}}>
        <text.T16 style={{marginBottom: 20, textAlign: 'center'}}>
          Voulez-vous annuler votre abonnement Premium ?
        </text.T16>
        <components.Button
          loading={loading}
          title={"Annuler l'abonnement"}
          containerStyle={{margin: 20}}
          onPress={() => {
            if (isPremium) {
              cancelPrenium();
            } else {
              navigation.navigate('Prenium');
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
