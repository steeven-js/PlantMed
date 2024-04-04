import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Button from '../../components/buttons/Button';
import UserWishlist from '../../components/cards/UserWishlist';
import useAuthCheck from '../../functions/authCheck';
import { useUserPlantsFavoris } from '../../functions/loadUserFavoris';
import useFetchFavorisPlants from '../../hooks/useFetchFavorisPlants';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

const UserPlantFavoris = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Navigation
    const navigation = useNavigation();

    // Utilisez useAuthCheck pour récupérer l'identifiant de l'utilisateur authentifié
    const { userAuthUid } = useAuthCheck();

    // Utilisez useUserPlantsFavoris pour récupérer les identifiants des plantes favorites de l'utilisateur
    const userFavoris = useUserPlantsFavoris(userAuthUid);

    // Récupérer les données des plantes favorites de l'utilisateur
    const { plantData, plantImages, isDataLoading } =
        useFetchFavorisPlants(userFavoris);

    // Si les données sont en cours de chargement, affichez un indicateur d'activité
    if (isDataLoading) {
        return (
            <View
                style={[
                    styles.mainWrapper,
                    {
                        backgroundColor: theme.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                ]}
            >
                <ActivityIndicator size="large" color={theme.accent} />
            </View>
        );
    }

    // Une fois les données chargées, affichez la liste des plantes
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContentContainerStyle}
            >
                <Animatable.View animation="fadeInUp" delay={100}>
                    {plantData &&
                        plantData.map((item, index) => (
                            <UserWishlist
                                key={item.id}
                                plantImage={
                                    plantImages && plantImages[index]
                                        ? { uri: plantImages[index] }
                                        : require('../../assets/images/noImage/no-image.png')
                                }
                                plantTitle={item.name}
                                onPressView={() => {
                                    navigation.navigate('PlantView', {
                                        plantId: item.id,
                                    });
                                }}
                            />
                        ))}
                </Animatable.View>
                <Animatable.View animation="fadeInUp" delay={300}>
                    <Button label="Add all to cart" />
                </Animatable.View>
            </ScrollView>
        </View>
    );
};

export default UserPlantFavoris;
