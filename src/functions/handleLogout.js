import auth from '@react-native-firebase/auth';

import { ShowToast } from './toast';

const handleLogout = async () => {
    try {
        await auth().signOut();
        ShowToast({
            type: 'success',
            position: 'bottom',
            text1: 'Déconnexion réussie',
            visibilityTime: 3000,
            autoHide: true,
        });
        console.log('Déconnexion réussie');
    } catch (error) {
        console.error('Erreur lors de la déconnexion :', error.message);
    }
};

export default handleLogout;
