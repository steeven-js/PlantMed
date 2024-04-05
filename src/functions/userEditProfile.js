import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    setUserDisplayName,
} from '../redux/reducer/auth';

const useEditProfile = () => {
    const dispatch = useDispatch();
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        // Mettre à jour l'état local lorsque le nom d'affichage de l'utilisateur change
        const unsubscribe = auth().onAuthStateChanged(user => {
            if (user) {
                setDisplayName(user.displayName || '');
            }
        });

        return () => unsubscribe(); // Nettoyage de l'effet lors du démontage
    }, []);

    // Fonction pour mettre à jour le nom d'affichage de l'utilisateur
    const updateDisplayName = async (newDisplayName) => {
        try {
            const user = auth().currentUser;
            if (user) {
                await user.updateProfile({
                    displayName: newDisplayName,
                });
                // Mettre à jour l'état local
                setDisplayName(newDisplayName);
                // Mettre à jour le magasin Redux
                dispatch(setUserDisplayName(newDisplayName));

                // log
                console.log('Display name updated successfully');
            }
        } catch (error) {
            console.error('Error updating display name:', error);
        }
    };

    return { displayName, updateDisplayName };
};

export default useEditProfile;
