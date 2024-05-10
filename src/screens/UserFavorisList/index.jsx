import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import GridViewItem from '../../components/cards/GridViewItem';
import SectionTitle from '../../components/headings/SectionTitle';
import useAuthCheck from '../../functions/authCheck';
import {
    deleteOnePlantFavoris,
    deleteOneSymptomFavoris,
} from '../../functions/deleteFavoris';
import {
    useUserPlantsFavoris,
    useUserSymptomsFavoris,
} from '../../functions/loadUserFavoris';
import useFetchFavorisPlants from '../../hooks/useFetchFavorisPlants';
import useFetchFavorisSymptoms from '../../hooks/useFetchFavorisSymptoms';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import Button from '../../components/buttons/Button';

const UserFavorisList = () => {
    // Utilisation de useNavigation
    const navigation = useNavigation();

    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Utilisez useAuthCheck pour récupérer l'identifiant de l'utilisateur authentifié
    const { isUserAuthenticated, userAuthUid } = useAuthCheck();

    // Utilisez useUserPlantsFavoris pour récupérer les identifiants des plantes favorites de l'utilisateur
    const userFavoris = useUserPlantsFavoris(userAuthUid);

    // Récupérer les données des plantes favorites de l'utilisateur
    const { plantData, isFavorisPlantsLoading } = useFetchFavorisPlants(userFavoris);

    console.log('plantData:', plantData);

    // Utilisez useUserSymptomsFavoris pour récupérer les identifiants des symptômes favoris de l'utilisateur
    const userSymptoms = useUserSymptomsFavoris(userAuthUid);

    // Récupérer les données des symptômes favoris de l'utilisateur
    const { symptomData, isFavorisSymptomsLoading } = useFetchFavorisSymptoms(userSymptoms);

    console.log('symptomData:', symptomData);

    // Suppression d'un symptôme de la liste de favoris
    const deleteOnePlant = (plantId) => {
        deleteOnePlantFavoris({ uid: userAuthUid, plantId });
    };

    // Suppression d'un symptôme de la liste de favoris
    const deleteOneSymptom = (symptomId) => {
        deleteOneSymptomFavoris({ uid: userAuthUid, symptomId });
    };

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {isUserAuthenticated ? (
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContentContainerStyle}>

                    {/* Plantes Favoris */}
                    <View style={styles.sectionTitleAndLinkWrapper}>
                        <SectionTitle title="Mes plantes favoris" />
                    </View>

                    {/* Chargement des données */}
                    {isFavorisPlantsLoading ? (
                        <ActivityIndicator size="large" color="red" />
                    ) : (
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            bounces={false}
                            contentContainerStyle={styles.horizontalScrollViewContentContainerStyle}>
                            {plantData.map((item, index) => (
                                <View key={index} style={styles.productWrapper}>
                                    <GridViewItem
                                        plantImage={item.media && item.media.length > 0 ? { uri: item.media[0].original_url } : require('../../assets/images/banners/home/808_x_338.png')}
                                        plantTitle={item.name || ''}
                                        touchOptions={true}
                                        onPressOption={() => deleteOnePlant(item.id)}
                                        onPress={() => navigation.navigate('Plant Stack', { screen: 'PlantView', params: { plantId: item.id, plantName: item.name } })}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    )}

                    {plantData.length === 0 && !isFavorisPlantsLoading && (
                        <Text style={{ color: theme.textHighContrast }}>
                            Vous n'avez pas encore ajouté de plantes à vos favoris
                        </Text>
                    )}

                    {/* Symptômes Favoris */}
                    <View style={styles.verticalSpacer} />
                    <View style={styles.sectionTitleAndLinkWrapper}>
                        <SectionTitle title="Symptômes cibles" />
                    </View>

                    {/* Chargement des données */}
                    {isFavorisSymptomsLoading ? (
                        <ActivityIndicator size="large" color="red" />
                    ) : (
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            bounces={false}
                            contentContainerStyle={styles.horizontalScrollViewContentContainerStyle}>
                            {symptomData.map((item, index) => (
                                <View key={index} style={styles.productWrapper}>
                                    <GridViewItem
                                        plantImage={item.media && item.media.length > 0 ? { uri: item.media[0].original_url } : require('../../assets/images/banners/home/808_x_338.png')}
                                        plantTitle={item.name || ''}
                                        touchOptions={true}
                                        onPressOption={() => deleteOneSymptom(item.id)}
                                        onPress={() => navigation.navigate('Plant Stack', { screen: 'SymptomView', params: { symptomId: item.id, symptomName: item.name } })}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    )}

                    {symptomData.length === 0 && !isFavorisSymptomsLoading && (
                        <Text style={{ color: theme.textHighContrast }}>
                            Vous n'avez pas encore ajouté de symptômes à vos favoris
                        </Text>
                    )}

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
