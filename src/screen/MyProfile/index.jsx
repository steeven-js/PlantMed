import React, { useEffect, useState, useCallback } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as Animatable from 'react-native-animatable';
import MyProfileData from '../../data/MyProfileData';
import { SvgXml } from 'react-native-svg';
import av_man_2 from '../../assets/avatars/svg/av_man_2';
import { COLORS } from '../../config/Colors';
import { STANDARD_USER_AVATAR_WRAPPER_SIZE } from '../../config/Constants';
import NavigationLink from '../../components/links/NavigationLink';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import styles from './styles';
import ProfileNavBar from '../../components/profileNavBar';

const MyProfile = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [avatar, setAvatar] = useState('')
    const navigation = useNavigation();

    const fetchUserName = useCallback(async (uid) => {
        try {
            const userDoc = await firestore()
                .collection('userProfile')
                .doc(uid)
                .get();

            if (userDoc.exists) {
                setUserName(userDoc.data().name || '');
            }
        } catch (error) {
            console.error('Error fetching user name:', error);
        }
    }, []);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if (user) {
                setIsUserAuthenticated(true);
                setUserEmail(user.email);
                fetchUserName(user.uid);
            } else {
                setIsUserAuthenticated(false);
                setUserEmail('');
                setUserName('');
            }
        });

        return () => unsubscribe();
    }, [fetchUserName]);

    useFocusEffect(
        useCallback(() => {
            const unsubscribe = firestore()
                .collection('userProfile')
                .doc(auth().currentUser.uid)
                .onSnapshot((snapshot) => {
                    if (snapshot.exists) {
                        setUserName(snapshot.data().name || '');
                        setAvatar(snapshot.data().avatarUri || '');
                    }
                });

            return () => unsubscribe();
        }, [])
    );

    return (
        <View style={[styles.mainWrapper, { backgroundColor: COLORS.accent }]}>
            {/* Header */}
            <ProfileNavBar title="Mon profil" />

            {isUserAuthenticated && (
                <Animatable.View
                    animation="fadeInUp"
                    delay={100}
                    style={[styles.contentWrapper, { backgroundColor: COLORS.primary }]}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        contentContainerStyle={styles.scrollViewContentContainerStyle}
                    >
                        <Animatable.View
                            animation="fadeInUp"
                            delay={300}
                            style={styles.profileInfoWrapper}
                        >
                            {/* Avatar */}
                            {avatar !== null && avatar !== '' ? (
                                <Image
                                    source={{ uri: avatar }}
                                    style={{
                                        width: STANDARD_USER_AVATAR_WRAPPER_SIZE * 2.5,
                                        height: STANDARD_USER_AVATAR_WRAPPER_SIZE * 2.5,
                                        borderRadius: STANDARD_USER_AVATAR_WRAPPER_SIZE * 1.25,
                                    }}
                                />
                            ) : (
                                <SvgXml
                                    xml={av_man_2}
                                    width={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2.5}
                                    height={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2.5}
                                />
                            )}

                            {/* Vertical spacer */}
                            <View style={styles.verticalSpacer} />

                            {/* Profile name */}
                            <Animatable.Text
                                animation="fadeInUp"
                                delay={500}
                                style={[styles.profileName, { color: COLORS.textHighContrast }]}
                            >
                                {userName || (
                                    <Text
                                        onPress={() => navigation.navigate('SettingsStack', { screen: 'EditProfile' })}
                                        style={{ color: COLORS.accent }}
                                    >
                                        Changer mon pseudo
                                    </Text>
                                )}
                            </Animatable.Text>

                            {/* Profile email */}
                            <Animatable.Text
                                animation="fadeInUp"
                                delay={700}
                                style={[styles.profileEmail, { color: COLORS.accent }]}
                            >
                                {userEmail}
                            </Animatable.Text>
                        </Animatable.View>

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />

                        {/* Mapping */}
                        {/* <Animatable.View animation="fadeInUp" delay={900}>
                            {MyProfileData.map((item, index) => (
                                <View key={index}>
                                    <NavigationLink
                                        leftIcon={item.leftIcon}
                                        label={item.label}
                                        onPress={() => navigation.navigate(item.label)}
                                    />
                                    {index !== MyProfileData.length - 1 && (
                                        <View style={styles.verticalSpacer} />
                                    )}
                                </View>
                            ))}
                        </Animatable.View> */}
                    </ScrollView>
                </Animatable.View>
            )}
        </View>
    );
};

export default MyProfile;
