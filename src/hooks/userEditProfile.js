import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    setUserDisplayName,
    setUserAvatarUrl,
} from '../redux/reducer/auth';
import { ShowToast } from '../functions/toast';

const useEditProfile = () => {
    const dispatch = useDispatch();
    const [displayName, setDisplayName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            if (user) {
                setDisplayName(user.displayName || '');
                setAvatarUrl(user.photoURL || '');
            }
        });

        return () => unsubscribe();
    }, []);

    const updateDisplayName = async (newDisplayName) => {
        try {
            const user = auth().currentUser;
            if (user) {
                await user.updateProfile({
                    displayName: newDisplayName,
                });
                setDisplayName(newDisplayName);
                dispatch(setUserDisplayName(newDisplayName));
                ShowToast({
                    type: 'success',
                    position: 'top',
                    text1: 'Nom d\'affichage mis à jour avec succès.',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            }
        } catch (error) {
            console.error('Error updating display name:', error);
            ShowToast({
                type: 'error',
                position: 'top',
                text1: 'Une erreur s\'est produite lors de la mise à jour du nom d\'affichage.',
                visibilityTime: 3000,
                autoHide: true,
            });
        }
    };

    const updateAvatar = async (newAvatarUrl) => {
        try {
            const user = auth().currentUser;
            if (user) {
                await user.updateProfile({
                    photoURL: newAvatarUrl,
                });
                setAvatarUrl(newAvatarUrl);
                dispatch(setUserAvatarUrl(newAvatarUrl));
                ShowToast({
                    type: 'success',
                    position: 'top',
                    text1: 'Avatar mis à jour avec succès.',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            }
        }
        catch (error) {
            console.error('Error updating avatar:', error);
            ShowToast({
                type: 'error',
                position: 'top',
                text1: 'Une erreur s\'est produite lors de la mise à jour de l\'avatar.',
                visibilityTime: 3000,
                autoHide: true,
            });
        }
    };

    return { displayName, avatarUrl, updateDisplayName, updateAvatar };
};

export default useEditProfile;
