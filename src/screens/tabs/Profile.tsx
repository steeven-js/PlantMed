import React, {useEffect} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {items} from '../../items';
import {svg} from '../../assets/svg';
import {components} from '../../components';
import {requestPurchase, useIAP} from 'react-native-iap';

const Profile: React.FC = () => {
  const navigation = hooks.useAppNavigation();
  const user = hooks.useAppSelector(state => state.userSlice.user);

  console.log('user', JSON.stringify(user, null, 2));

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

  // console.log('initConnection', initConnection);

  // useEffect(() => {
  //   async function init() {
  //     try {
  //       await initConnection();
  //       await getProducts({ skus: sku });
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   }
  //   init();
  // }, []);

  useEffect(() => {
    if (currentPurchase) {
      const receipt = currentPurchase.transactionReceipt;
      if (receipt) {
        finishTransaction({purchase: currentPurchase, isConsumable: true});
        Alert.alert('Achat réussi', 'Merci pour votre achat!');
      }
    }
    if (currentPurchaseError) {
      Alert.alert("Erreur d'achat", currentPurchaseError.message);
    }
  }, [currentPurchase, currentPurchaseError]);

  const handlePurchase = async () => {
    try {
      await requestPurchase({sku: sku[0]});
    } catch (err) {
      console.warn(err);
      // Alert.alert('Purchase Error', err.message);
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
          title={'Informations personnelles'}
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          icon={<svg.UserSvg />}
          goNavigation={true}
          containerStyle={{marginBottom: utils.responsiveHeight(10)}}
        />
        <items.ProfileItem
          title='Politique de confidentialité'
          onPress={() => {
            navigation.navigate('PrivacyPolicy');
          }}
          icon={<svg.FileTextSvg />}
          goNavigation={true}
          containerStyle={{marginBottom: utils.responsiveHeight(6)}}
        />
        <items.ProfileItem
          title='Premium'
          onPress={() => {
            handlePurchase();
          }}
          icon={<svg.FileTextSvg />}
          goNavigation={true}
          containerStyle={{marginBottom: utils.responsiveHeight(6)}}
        />
        <items.ProfileItem
          title='Déconnexion'
          onPress={() => {
            navigation.navigate('LogOut');
          }}
          icon={<svg.SignOutSvg />}
          containerStyle={{marginBottom: utils.responsiveHeight(10)}}
        />
        <items.ProfileItem
          title='Supprimer le compte'
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
