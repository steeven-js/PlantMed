import { ShowToast } from '../functions/toast';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

// Custom hook for changing password
const useChangePassword = () => {
    const navigation = useNavigation();

    const changePassword = async (currentPassword, newPassword, confirmNewPassword) => {
        const user = auth().currentUser;
        const credential = auth.EmailAuthProvider.credential(user.email, currentPassword);

        try {
            // Re-authenticate the user
            await user.reauthenticateWithCredential(credential);

            // Check if new password matches the confirmation
            if (newPassword === confirmNewPassword) {
                // Update password
                await user.updatePassword(newPassword);
                console.log('Password updated successfully.');
                // Show a toast to indicate successful password update
                ShowToast({
                    type: 'success',
                    position: 'top',
                    text1: 'Mot de passe mis à jour avec succès.',
                    visibilityTime: 3000,
                    autoHide: true,
                });
                // Redirect to the Home Stack after successful profile update
                navigation.navigate('Home Stack');
            } else {
                throw new Error('New password and confirmation do not match.');
            }
        } catch (error) {
            console.error('Error changing password:', error);
            // Show a toast to indicate an error occurred during password update
            ShowToast({
                type: 'error',
                position: 'top',
                text1: 'Une erreur s\'est produite lors de la mise à jour du mot de passe.',
                visibilityTime: 3000,
                autoHide: true,
            });
        }
    };

    return changePassword;
};

export default useChangePassword;
