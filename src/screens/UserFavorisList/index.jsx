import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';

import GridViewItem from '../../components/cards/GridViewItem';
import SectionTitle from '../../components/headings/SectionTitle';
import Link from '../../components/links/Link';
import useAuthCheck from '../../functions/authCheck';
import {
    deleteOnePlantFavoris,
    deleteOneSymptomFavoris,
} from '../../functions/deleteFavoris';
import {
    useUserPlantsFavoris,
    useUserSymptomsFavoris,
} from '../../functions/loadUserFavoris';
import { navigateAndPerformAction } from '../../functions/navigationComplex';
import useFetchFavorisPlants from '../../hooks/useFetchFavorisPlants';
import useFetchFavorisSymptoms from '../../hooks/useFetchFavorisSymptoms';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import Button from '../../components/buttons/Button';

const UserFavorisList = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Utilisez useAuthCheck pour récupérer l'identifiant de l'utilisateur authentifié
    const { isUserAuthenticated, userAuthUid } = useAuthCheck();

    // Utilisez useUserSymptomsFavoris pour récupérer les identifiants des symptômes favoris de l'utilisateur
    const userSymptoms = useUserSymptomsFavoris(userAuthUid);

    // Récupérer les données des symptômes favoris de l'utilisateur
    const { symptomData, isFavorisSymptomsLoading } =
        useFetchFavorisSymptoms(userSymptoms);

    // Utilisez useUserPlantsFavoris pour récupérer les identifiants des plantes favorites de l'utilisateur
    const userFavoris = useUserPlantsFavoris(userAuthUid);

    // Récupérer les données des plantes favorites de l'utilisateur
    const { plantData, isFavorisPlantsLoading } =
        useFetchFavorisPlants(userFavoris);

    // Suppression d'un symptôme de la liste de favoris
    const deleteOnePlant = (plantId) => {
        deleteOnePlantFavoris({ uid: userAuthUid, plantId });
    };

    // Suppression d'un symptôme de la liste de favoris
    const deleteOneSymptom = (symptomId) => {
        deleteOneSymptomFavoris({ uid: userAuthUid, symptomId });
    };

    // Utilisation de useNavigation
    const navigation = useNavigation();

    // fonction pour naviguer vers 'SymptomWishList'
    const navigateAndPerformAction1 = () => {
        navigateAndPerformAction(
            navigation,
            'My Profile Stack',
            'Mes favoris',
            'SymptomWishList',
            250,
        );
    };

    // fonction pour naviguer vers 'PlantWishList'
    const navigateAndPerformAction2 = () => {
        navigateAndPerformAction(
            navigation,
            'My Profile Stack',
            'Mes favoris',
            'PlantWishList',
            250,
        );
    };

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {isUserAuthenticated ? (
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContentContainerStyle}>
                    <View style={styles.sectionTitleAndLinkWrapper}>
                        <SectionTitle title="Mes plantes favoris" />
                        <Link label="Tous voir" onPress={navigateAndPerformAction2} />
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        contentContainerStyle={styles.horizontalScrollViewContentContainerStyle}>
                        {isFavorisPlantsLoading || !plantData || plantData.length === 0 ? (
                            // <ScreenInfo label="Aucune plante ajoutée à la liste de favoris" />
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <Text style={{ color: theme.textHighContrast }} > Aucune plante ajoutée à la liste de favoris </Text>
                            </View>
                        ) : (
                            plantData.map((item, index) => (
                                <View key={index} style={styles.productWrapper}>
                                    <GridViewItem
                                        plantImage={item.media && item.media.length > 0 ? { uri: item.media[0].original_url } : require('../../assets/images/banners/home/808_x_338.png')}
                                        plantTitle={item.name || ''}
                                        touchOptions={true}
                                        onPressOption={() => deleteOnePlant(item.id)}
                                        onPress={() => navigation.navigate('Plant Stack', { screen: 'PlantView', params: { plantId: item.id, plantName: item.name } })}
                                    />
                                </View>
                            ))
                        )}
                    </ScrollView>
                    <View style={styles.verticalSpacer} />
                    <View style={styles.sectionTitleAndLinkWrapper}>
                        <SectionTitle title="Symptômes cibles" />
                        <Link label="Tous voir" onPress={navigateAndPerformAction1} />
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        contentContainerStyle={styles.horizontalScrollViewContentContainerStyle}>
                        {isFavorisSymptomsLoading || !symptomData || symptomData.length === 0 ? (
                            // <ScreenInfo label="Aucun symptôme ajouté à la liste de favoris" />
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <Text style={{ color: theme.textHighContrast }} > Aucun symptôme cible ajouté à la liste de favoris </Text>
                            </View>
                        ) : (
                            symptomData.map((item, index) => (
                                <View key={index} style={styles.productWrapper}>
                                    <GridViewItem
                                        plantImage={item.media && item.media.length > 0 ? { uri: item.media[0].original_url } : require('../../assets/images/banners/home/808_x_338.png')}
                                        plantTitle={item.name || ''}
                                        touchOptions={true}
                                        onPressOption={() => deleteOneSymptom(item.id)}
                                        onPress={() => navigation.navigate('Plant Stack', { screen: 'SymptomView', params: { symptomId: item.id, symptomName: item.name } })}
                                    />
                                </View>
                            ))
                        )}
                    </ScrollView>
                </ScrollView>
            ) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: theme.textHighContrast }} > Vous devez être connecté pour voir vos favoris </Text>
                    <View style={styles.verticalSpacer} />
                    <Button label="Se connecter" onPress={() => navigation.navigate('Auth Stack', { screen: 'Login' })} />
                </View>
            )}
        </View>
    );
};

export default UserFavorisList;
