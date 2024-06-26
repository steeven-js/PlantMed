import React, {useEffect} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {items} from '../../items';
import {svg} from '../../assets/svg';
import {components} from '../../components';
import * as RNIap from 'react-native-iap';

const Profile: React.FC = () => {
  const navigation = hooks.useAppNavigation();
  const user = hooks.useAppSelector(state => state.userSlice.user);

  console.log('user', JSON.stringify(user, null, 2));

  const itemSkus = ['com.plantmed.botanica']; // Converted to an array

  useEffect(() => {
    const initIap = async () => {
      try {
        await RNIap.initConnection();
      } catch (error) {
        console.log('error connecting to store...', error);
      }
    };

    initIap();

    return () => {
      RNIap.endConnection();
    };
  }, []);

  const getItems = async () => {
    try {
      const products = await RNIap.getProducts({skus: itemSkus});
      console.log('Products', products);
    } catch (err) {
      console.warn('Error retrieving products', err); // More descriptive error message
    }
  };

  const requestPurchase = async (sku: RNIap.RequestPurchase) => {
    try {
      const purchase = await RNIap.requestPurchase(sku);
      console.log('Purchase', purchase);
      Alert.alert('Purchase Successful', JSON.stringify(purchase));
    } catch (err) {
      if (err instanceof Error) {
        console.warn('Purchase failed', err.message); // More descriptive error message
        Alert.alert('Purchase Failed', err.message);
      } else {
        console.warn('Purchase failed', err); // Fall-back for non-Error objects
        Alert.alert('Purchase Failed', 'An unknown error occurred');
      }
    }
  };

  const renderUserInfo = (): JSX.Element => (
    <components.UserData
      onPress={() => {
        navigation.navigate('EditProfile');
      }}
      containerStyle={{marginBottom: utils.responsiveHeight(30)}}
    />
  );

  const renderMenu = (): JSX.Element => (
    <View style={{paddingLeft: 20}}>
      <items.ProfileItem
        title='Informations personnelles'
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
      <items.SourcesItem
        title='Sources'
        onPress={() => {
          navigation.navigate('Sources');
        }}
        icon={<svg.FileTextSvg />}
        goNavigation={true}
        containerStyle={{marginBottom: utils.responsiveHeight(6)}}
      />
      {/* <items.ProfileItem
        title='Premium'
        onPress={getItems}
        icon={<svg.FileTextSvg />}
        goNavigation={true}
        containerStyle={{marginBottom: utils.responsiveHeight(6)}}
      /> */}
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

  const renderContent = (): JSX.Element => (
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

  return renderContent();
};

export default Profile;
