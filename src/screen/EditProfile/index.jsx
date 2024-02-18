import styles from './styles';
import {
  STANDARD_USER_AVATAR_WRAPPER_SIZE,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
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

const EditProfile = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  // Retrieve email from Firebase
  const userEmail = user ? user.email : '';

  const handleUpdateProfile = async () => {
    if (!user) {
      Alert.alert('Error', 'User not authenticated. Please sign in.');
      return;
    }

    try {
      // Update user's display name and phone number
      await user.updateProfile({
        displayName: name,
      });

      // Update the userProfile collection in Firestore
      await firestore().collection('userProfile').doc(user.uid).set({
        uid: user.uid,
        name,
        phoneNumber,
      });

      // Alert.alert('Success', 'Profile updated successfully.');

      // Navigate to the profile screen
      navigation.navigate('MyProfileStack', { screen: 'MyProfile' });
    } catch (error) {
      Alert.alert('Error', error.message);
      console.log('Error updating profile:', error.message);
    }
  };

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
          <SvgXml
            xml={av_woman_4}
            width={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2}
            height={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2}
          />
          <Animatable.View
            animation="bounceIn"
            delay={1700}
            style={[
              styles.cameraIconWrapper,
              { backgroundColor: COLORS.accentLightest },
            ]}>
            <SvgXml
              xml={ic_edit_dark_green}
              width={STANDARD_VECTOR_ICON_SIZE}
              height={STANDARD_VECTOR_ICON_SIZE}
            />
          </Animatable.View>
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={700}>
          <TextInput
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={900}>
          <TextInput
            label="Email"
            placeholder="Enter your email"
            disabled={true}
            value={userEmail}
          />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1100}>
          <TextInput
            label="Phone number"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1300}>
          <Link label="Want to change password?" />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1500}>
          <Button label="Submit & Save" onPress={handleUpdateProfile} />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default EditProfile;
