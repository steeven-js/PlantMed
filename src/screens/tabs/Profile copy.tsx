import React, {useEffect, useState} from 'react';
import {
  View,
  Alert,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {requestPurchase, useIAP, validateReceiptIos} from 'react-native-iap';

import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {items} from '../../items';
import {svg} from '../../assets/svg';
import {components} from '../../components';
import {Platform} from 'react-native';

const Profile: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const user = hooks.useAppSelector(state => state.userSlice.user);

  console.log('user', JSON.stringify(user, null, 2));

  const {
    connected,
    products,
    promotedProductsIOS,
    subscriptions,
    purchaseHistory,
    availablePurchases,
    currentPurchase,
    currentPurchaseError,
    initConnectionError,
    finishTransaction,
    getProducts,
    getSubscriptions,
    getAvailablePurchases,
    getPurchaseHistory,
  } = useIAP();

  const [loading, setLoading] = useState(false);
  const subscriptionSkus = ['com.plantmed.botanica']; // Ajoutez ici vos identifiants de produit.

  useEffect(() => {
    const initializeIAP = async () => {
      if (connected) {
        try {
          await getProducts({skus: subscriptionSkus});
          await getSubscriptions({skus: subscriptionSkus});
          await getPurchaseHistory();
        } catch (error) {
          console.error('Error initializing IAP:', error);
        }
      }
    };
    initializeIAP();
  }, [connected]);

  useEffect(() => {
    const checkCurrentPurchase = async purchase => {
      if (purchase) {
        try {
          console.log('currentPurchase', purchase);
          const receipt = purchase.transactionReceipt;
          if (receipt) {
            console.log('Receipt found:', receipt);
            if (Platform.OS === 'ios') {
              const isTestEnvironment = __DEV__;
              const validationResponse = await validateReceiptIos(
                {
                  'receipt-data': receipt,
                  password: '75bbbe06cb8f472f881b395e1ac616a4',
                },
                isTestEnvironment,
              );
              console.log('Validation response:', validationResponse);
              if (validationResponse.status === 0) {
                console.log('Purchase validated successfully');
                await finishTransaction(purchase);
                navigation.navigate('Home');
              } else {
                console.log('Purchase validation failed:', validationResponse);
              }
            } else {
              console.log('Non-iOS platform purchase:', receipt);
            }
          } else {
            console.log('No receipt found');
          }
        } catch (error) {
          console.error('Error checking current purchase:', error);
        }
      }
    };
    checkCurrentPurchase(currentPurchase);
  }, [currentPurchase, finishTransaction, navigation]);

  useEffect(() => {
    if (currentPurchaseError) {
      Alert.alert('Erreur', "L'achat a échoué, veuillez réessayer.");
      console.error('Purchase error:', currentPurchaseError);
    }
  }, [currentPurchaseError]);

  const handlePurchase = async (sku: string) => {
    if (loading) return; // Empêcher les appels multiples
    try {
      setLoading(true);
      await requestPurchase({sku});
    } catch (error) {
      console.error('handlePurchase', error);
      Alert.alert('Erreur', "L'achat a échoué, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const renderUserInfo = (): JSX.Element => {
    return (
      <components.UserData
        onPress={() => {
          navigation.navigate('EditProfile');
        }}
        containerStyle={{marginBottom: utils.responsiveHeight(30)}}
      />
    );
  };

  const renderMenu = (): JSX.Element => {
    return (
      <View style={{paddingLeft: 20}}>
        <items.ProfileItem
          title={'Personal info'}
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          icon={<svg.UserSvg />}
          goNavigation={true}
          containerStyle={{marginBottom: utils.responsiveHeight(10)}}
        />
        <items.ProfileItem
          title='Privacy Policy'
          onPress={() => {
            navigation.navigate('PrivacyPolicy');
          }}
          icon={<svg.FileTextSvg />}
          goNavigation={true}
          containerStyle={{marginBottom: utils.responsiveHeight(6)}}
        />
        {products.map(product => (
          <items.ProfileItem
            key={product.productId}
            title='Prenium'
            onPress={() => handlePurchase(product.productId)}
            icon={<svg.FileTextSvg />}
            goNavigation={true}
            containerStyle={{marginBottom: utils.responsiveHeight(6)}}
          />
        ))}
        {loading && <ActivityIndicator size='large' />}
        <items.ProfileItem
          title='Sign out'
          onPress={() => {
            navigation.navigate('LogOut');
          }}
          icon={<svg.SignOutSvg />}
          containerStyle={{marginBottom: utils.responsiveHeight(10)}}
        />
        <items.ProfileItem
          title='Delete account'
          onPress={() => {
            navigation.navigate('DeleteAccount');
          }}
          icon={<svg.DeleteSvg />}
        />
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: utils.responsiveHeight(50),
          paddingBottom: utils.responsiveHeight(20),
        }}
        showsVerticalScrollIndicator={false}
      >
        {user && renderUserInfo()}
        {renderMenu()}
      </ScrollView>
    );
  };

  return renderContent();
};

export default Profile;
