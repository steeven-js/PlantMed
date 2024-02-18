import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { firebase } from '@react-native-firebase/auth';
import styles from './styles';
import ScreenTitle from '../../components/headings/ScreenTitle';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import PasswordTextInput from '../../components/inputs/PasswordTextInput';
import { COLORS } from '../../config/Colors';
import Button from '../../components/buttons/Button';
import Link from '../../components/links/Link';

const ResetPassword = () => {
  const [user, setUser] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reenterNewPassword, setReenterNewPassword] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe(); // Nettoyer l'abonnement lors du démontage du composant
  }, []);

  const handleResetPassword = async () => {
    if (!user) {
      // Gérer le cas où l'utilisateur n'est pas authentifié
      Alert.alert('Erreur', 'Utilisateur non authentifié. Veuillez vous connecter.');
      return;
    }

    if (newPassword !== reenterNewPassword) {
      Alert.alert('Erreur', 'Les nouveaux mots de passe ne correspondent pas.');
      return;
    }

    try {
      // Réauthentifier l'utilisateur avec son mot de passe actuel avant de le mettre à jour
      const credentials = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
      await user.reauthenticateWithCredential(credentials);

      // Mettre à jour le mot de passe de l'utilisateur
      await user.updatePassword(newPassword);

      Alert.alert('Succès', 'Mot de passe changé avec succès.');
    } catch (error) {
      Alert.alert('Erreur', error.message);
    }
  };

  return (
    <View style={[styles.mainWrapper, { backgroundColor: COLORS.accent }]}>
      <Animatable.View animation="fadeInUp" delay={100} style={[styles.formWrapper, { backgroundColor: COLORS.primary }]}>
        <Animatable.View animation="fadeInUp" delay={300}>
          <ScreenTitle title="Réinitialiser le mot de passe" />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={500}>
          <ScreenInfo info="Ici, vous pouvez réinitialiser votre mot de passe de temps en temps pour éviter les connexions non autorisées." />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={700}>
          <PasswordTextInput
            label="Mot de passe actuel"
            placeholder="Entrez votre mot de passe actuel"
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={900}>
          <PasswordTextInput
            label="Nouveau mot de passe"
            placeholder="Entrez votre nouveau mot de passe"
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1100}>
          <PasswordTextInput
            label="Re-entrez le nouveau mot de passe"
            placeholder="Re-entrez votre nouveau mot de passe"
            value={reenterNewPassword}
            onChangeText={setReenterNewPassword}
          />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1300}>
          <Link label="Mot de passe actuel oublié ?" />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1500}>
          <Button label="Réinitialiser le mot de passe" onPress={handleResetPassword} />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default ResetPassword;
