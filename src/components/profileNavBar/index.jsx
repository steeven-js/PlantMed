import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import IconLogout from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { setUser, clearUser } from '../../redux/reducer/auth';
import { useDispatch } from 'react-redux';
import styles from './styles';

const ProfileNavBar = ({ title }) => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if (user) {
                setIsUserAuthenticated(true);
                setUserEmail(user.email);
            } else {
                setIsUserAuthenticated(false);
                setUserEmail('');
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await auth().signOut();
            setIsUserAuthenticated(false);
            setUserEmail('');
            console.log('User logged out successfully!');
            // Dispatch action to set user in the Redux store
            dispatch(clearUser(null));
            navigation.navigate('Home', {
                screen: 'Plantes',
            });
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    return (
        <View style={styles.header}>
            <MenuIcon name="menu" size={30} color="#fff" onPress={() => navigation.openDrawer()} />
            <Text style={styles.textTopNavBar}>{title}</Text>
            <IconLogout name="logout" size={30} color="#fff" onPress={handleLogout} />
        </View>
    );
};

export default ProfileNavBar;
