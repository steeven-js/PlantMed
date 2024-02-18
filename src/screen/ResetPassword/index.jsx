import React, { useState, useEffect } from 'react'; // Import useEffect for onAuthStateChanged
import { View, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { firebase } from '@react-native-firebase/auth'; // Import firebase directly
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

    return () => unsubscribe(); // Cleanup the subscription on component unmount
  }, []);

  const handleResetPassword = async () => {
    if (!user) {
      // Handle the case where user is not authenticated
      Alert.alert('Error', 'User not authenticated. Please sign in.');
      return;
    }

    if (newPassword !== reenterNewPassword) {
      Alert.alert('Error', 'New passwords do not match.');
      return;
    }

    try {
      // Reauthenticate the user with their current password before updating it
      const credentials = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
      await user.reauthenticateWithCredential(credentials);

      // Update the user's password
      await user.updatePassword(newPassword);

      Alert.alert('Success', 'Password changed successfully.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={[styles.mainWrapper, { backgroundColor: COLORS.accent }]}>
      <Animatable.View animation="fadeInUp" delay={100} style={[styles.formWrapper, { backgroundColor: COLORS.primary }]}>
        <Animatable.View animation="fadeInUp" delay={300}>
          <ScreenTitle title="Reset Password" />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={500}>
          <ScreenInfo info="Here, you can reset your password from time to time to prevent unwanted logins." />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={700}>
          <PasswordTextInput
            label="Current password"
            placeholder="Enter your current password"
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={900}>
          <PasswordTextInput
            label="New password"
            placeholder="Enter your new password"
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1100}>
          <PasswordTextInput
            label="Re-enter new password"
            placeholder="Re-enter your new password"
            value={reenterNewPassword}
            onChangeText={setReenterNewPassword}
          />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1300}>
          <Link label="Forgot current password?" />
        </Animatable.View>

        <View style={styles.verticalSpacer} />

        <Animatable.View animation="fadeInUp" delay={1500}>
          <Button label="Reset Password" onPress={handleResetPassword} />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default ResetPassword;
