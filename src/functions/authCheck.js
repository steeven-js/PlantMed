import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearUser, setUserDisplayName, setUserEmail, setUserId, setUserAvatarUrl } from '../redux/reducer/auth';

const useAuthCheck = () => {
    const dispatch = useDispatch();
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [userAuthUid, setUserAuthUid] = useState('');
    const [userAuthEmail, setUserAuthEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(setUserId(user.uid));
                dispatch(setUserEmail(user.email));
                dispatch(setUserDisplayName(user.displayName));
                dispatch(setUserAvatarUrl(user.photoURL || ''));
                setIsUserAuthenticated(true);
                setUserAuthUid(user.uid);
                setUserAuthEmail(user.email);
                setDisplayName(user.displayName);
                setAvatarUrl(user.photoURL || '');
                console.log('Utilisateur connecté');
            } else {
                dispatch(clearUser());
                setIsUserAuthenticated(false);
                setUserAuthUid('');
                setUserAuthEmail('');
                setDisplayName('');
                setAvatarUrl('');
                console.log('Utilisateur déconnecté');
            }
        });

        return () => unsubscribe();
    }, [avatarUrl, dispatch]);

    return { isUserAuthenticated, userAuthUid, userAuthEmail, displayName, avatarUrl };
};

export default useAuthCheck;
