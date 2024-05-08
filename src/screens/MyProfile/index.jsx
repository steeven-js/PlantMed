import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { Image, ScrollView, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SvgXml } from 'react-native-svg';
import { useSelector } from 'react-redux';

import av_man_2 from '../../assets/avatars/svg/av_man_2';
import NavigationLink from '../../components/links/NavigationLink';
import { STANDARD_USER_AVATAR_WRAPPER_SIZE } from '../../config/Constants';
import MyProfileData from '../../data/MyProfileData';
import useAuthCheck from '../../functions/authCheck';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import { navigateAndPerformAction } from '../../functions/navigationComplex';

// Import du hook d'authentification

// Functional component
const MyProfile = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    const { isUserAuthenticated, userAuthEmail } = useAuthCheck();

    // Selecting the displayName from the Redux store
    const displayName = useSelector(state => state.auth.displayName);

    // Selecting the avatarUrl from the Redux store
    const avatarUrl = useSelector(state => state.auth.avatarUrl);

    // Navigation
    const navigation = useNavigation();

    // fonction pour naviguer vers 'Plants'
    const navigateAndPerformAction1 = () => {
        navigateAndPerformAction(
            navigation,
            'Plant Stack',
            'PlantMedTab',
            'Favoris',
            250,
        );
    };

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.accent }]}>
            {/* Content wrapper */}
            <Animatable.View
                animation="fadeInUp"
                delay={100}
                style={[
                    styles.contentWrapper,
                    { backgroundColor: theme.primary },
                ]}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={
                        styles.scrollViewContentContainerStyle
                    }
                >
                    {/* Profile info wrapper */}
                    <Animatable.View
                        animation="fadeInUp"
                        delay={300}
                        style={styles.profileInfoWrapper}
                    >
                        {/* Avatar */}
                        {/* Afficher l'avatar sélectionné s'il y en a un */}
                        {avatarUrl ? (
                                <Image
                                    source={{ uri: avatarUrl }}
                                    style={{
                                        width: STANDARD_USER_AVATAR_WRAPPER_SIZE * 2,
                                        height: STANDARD_USER_AVATAR_WRAPPER_SIZE * 2,
                                        borderRadius: STANDARD_USER_AVATAR_WRAPPER_SIZE,
                                    }}
                                />
                            ) : (
                                // Sinon, afficher l'avatar par défaut
                                <SvgXml
                                    xml={av_man_2}
                                    width={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2}
                                    height={STANDARD_USER_AVATAR_WRAPPER_SIZE * 2}
                                />
                            )}

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />

                        {/* Profile name */}
                        <Animatable.Text
                            animation="fadeInUp"
                            delay={500}
                            style={[
                                styles.profileName,
                                { color: theme.textHighContrast },
                            ]}
                        >
                            {isUserAuthenticated ? displayName : 'Jonathan Doe'}
                        </Animatable.Text>

                        {/* Profile email */}
                        <Animatable.Text
                            animation="fadeInUp"
                            delay={700}
                            style={[
                                styles.profileEmail,
                                { color: theme.accent },
                            ]}
                        >
                            {isUserAuthenticated
                                ? userAuthEmail
                                : 'jonathan@hotmail.com'}
                        </Animatable.Text>
                    </Animatable.View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    <Animatable.View animation="fadeInUp" delay={900}>
                        {/* Mapping */}
                        {MyProfileData.map((item, index) => (
                            <View key={index}>
                                <NavigationLink
                                    leftIcon={item.leftIcon}
                                    label={item.label}
                                    onPress={navigateAndPerformAction1}
                                />
                                {index !== MyProfileData.length - 1 && (
                                    <View style={styles.verticalSpacer} />
                                )}
                            </View>
                        ))}
                    </Animatable.View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

// Exporting
export default MyProfile;
