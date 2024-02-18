import styles from './styles';
import {
  STANDARD_USER_AVATAR_WRAPPER_SIZE,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import React, { useState, useEffect } from 'react';
import { View, Alert, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Link from '../../components/links/Link';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Button from '../../components/buttons/Button';
import * as Animatable from 'react-native-animatable';
import TextInput from '../../components/inputs/TextInput';
import av_woman_4 from '../../assets/avatars/svg/av_woman_4';
import ic_edit_dark_green from '../../assets/icons/svg/ic_edit_dark_green';
import { COLORS } from '../../config/Colors';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { ref } from '@react-native-firebase/storage';

const EditProfile = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [galleryPhoto, setGalleryPhoto] = useState('');
  const [avatarUri, setAvatarUri] = useState('');

  const openGallery = async () => {
    const options = {
      mediaType: 'photo',
    };

    const result = await launchImageLibrary(options);
    if (result.assets.length > 0) {
      setGalleryPhoto(result.assets[0].uri);
      setAvatarUri(result.assets[0].uri);
    }
  };

  // Récupérer l'e-mail depuis Firebase
  const userEmail = user ? user.email : '';

  const handleUpdateProfile = async () => {
    // if (!user) {
    //   Alert.alert('Erreur', 'Utilisateur non authentifié. Veuillez vous connecter.');
    //   return;
    // }

    // try {
    //   // Mettre à jour le nom d'affichage, le numéro de téléphone et l'URL de l'avatar de l'utilisateur
    //   await user.updateProfile({
    //     displayName: name,
    //   });

    //   const userProfileData = {
    //     uid: user.uid,
    //     name,
    //     phoneNumber,
    //   };

    //   if (galleryPhoto !== '') {
    //     const imageName = `${user.uid}_avatar.jpg`;
    //     const storageRef = ref(storage(), `avatars/${imageName}`);
    //     await storageRef.putFile(galleryPhoto);
    //     userProfileData.avatarUri = await storageRef.getDownloadURL();
    //   }

    //   // Mettre à jour la collection userProfile dans Firestore
    //   await firestore().collection('userProfile').doc(user.uid).set(userProfileData);

    //   // Naviguer vers l'écran de profil
    //   navigation.navigate('MyProfileStack', { screen: 'MyProfile' });
    // } catch (error) {
    //   Alert.alert('Erreur', error.message);
    //   console.log('Erreur lors de la mise à jour du profil :', error.message);
    // }

    // Si il y a une image avatarUri dans la collection userProfile ne pas supprimer si le formulaire est vide
    const userProfileData = {
      name,
      phoneNumber,
    };

    if (galleryPhoto !== '') {
      const imageName = `${user.uid}_avatar.jpg`;
      const storageRef = ref(storage(), `avatars/${imageName}`);
      await storageRef.putFile(galleryPhoto);
      userProfileData.avatarUri = await storageRef.getDownloadURL();
    }

    // Mettre à jour la collection userProfile dans Firestore
    await firestore().collection('userProfile').doc(user.uid).set(userProfileData, { merge: true });

    // Naviguer vers l'écran de profil
    navigation.navigate('MyProfileStack', { screen: 'MyProfile' });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (authUser) => {
      setUser(authUser);

      if (authUser) {
        try {
          const userDoc = await firestore().collection('userProfile').doc(authUser.uid).get();
          const userData = userDoc.data();

          if (userData) {
            // Si les données existent dans Firestore, définir l'état
            setName(userData.name || '');
            setPhoneNumber(userData.phoneNumber || '');
            setAvatarUri(userData.avatarUri || ''); // Supposant que l'avatarUri est stocké dans Firestore
          }
        } catch (error) {
          console.log('Erreur lors de la récupération des données utilisateur :', error.message);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // console.log('avatarUri:', avatarUri)

  return (
    <View style={[styles.mainWrapper, { backgroundColor: COLORS.accent }]}>
      <Animatable.View
        animation="fadeInUp"
        delay={100}
        style={[styles.formWrapper, { backgroundColor: COLORS.primary }]}>
        <Animatable.View
          animation="fadeInUp"
          delay={300}
          style={styles.avatarWrapper}>

          {avatarUri !== '' ? (
            <Image
              source={{ uri: avatarUri }}
              style={styles.avatar}
            />
          ) : (
            <SvgXml
              xml={av_woman_4}
              width={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2}
              height={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2}
            />
          )}

          <Animatable.View
            animation="bounceIn"
            delay={1700}
            style={[
              styles.cameraIconWrapper,
              { backgroundColor: COLORS.accentLightest },
            ]}>
            <TouchableOpacity onPress={openGallery}>
              <SvgXml
                xml={ic_edit_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            </TouchableOpacity>
          </Animatable.View>
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={700}>
          <TextInput
            label="Nom"
            placeholder="Entrez votre nom"
            value={name}
            onChangeText={setName}
          />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={900}>
          <TextInput
            label="E-mail"
            placeholder="Entrez votre adresse e-mail"
            disabled={true}
            value={userEmail}
          />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1100}>
          <TextInput
            label="Numéro de téléphone"
            placeholder="Entrez votre numéro de téléphone"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1300}>
          <Link
            onPress={() => navigation.navigate('SettingsStack', { screen: 'Reset Password' })}
            label="Envie de changer de mot de passe ?" />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1500}>
          <Button label="Soumettre et enregistrer" onPress={handleUpdateProfile} />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default EditProfile;

