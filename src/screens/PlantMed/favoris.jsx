import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Button from '../../components/buttons/Button';
import React, { useContext, useEffect } from 'react';
import { useUserPlantsFavoris, useUserSymptomsFavoris } from '../../functions/loadUserFavoris';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import useAuthCheck from '../../functions/authCheck';
import styles from './styles';
import SectionTitle from '../../components/headings/SectionTitle';
import { deleteOnePlantFavoris, deleteOneSymptomFavoris } from '../../functions/deleteFavoris';
import { useNavigation } from '@react-navigation/native';
import GridViewSymptom from '../../components/cards/GridViewSymptom';
import GridViewPlant from '../../components/cards/GridViewPlant';

const Favoris = () => {
    // Utilisation de useNavigation
    const navigation = useNavigation();

    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Utilisez useAuthCheck pour récupérer l'identifiant de l'utilisateur authentifié
    const { isUserAuthenticated, userAuthUid } = useAuthCheck();
    const { userPlantsFavoris, plantsData, plantsDataImage } = useUserPlantsFavoris(userAuthUid);
    const { userSymptomsFavoris, symptomsData, symptomsDataImage } = useUserSymptomsFavoris(userAuthUid);

    // Suppression d'un symptôme de la liste de favoris
    const deleteOnePlant = (plantId) => {
        deleteOnePlantFavoris({ uid: userAuthUid, plantId });
    };

    // Suppression d'un symptôme de la liste de favoris
    const deleteOneSymptom = (symptomId) => {
        deleteOneSymptomFavoris({ uid: userAuthUid, symptomId });
    };

    useEffect(() => {
        // console.log('plantsDataImage:', plantsDataImage);
        // console.log('symptomsDataImage:', symptomsDataImage);
    }, [
        plantsData,
        symptomsData,
        userPlantsFavoris,
        userSymptomsFavoris,
        plantsDataImage,
        symptomsDataImage,
    ]);

    return (
        <>
            <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
                {isUserAuthenticated ? (
                    <ScrollView
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollViewContentContainerStyle}
                    >

                        {/* Plantes Favoris */}
                        <View style={styles.sectionTitleAndLinkWrapper}>
                            <SectionTitle title="Mes plantes favoris" />
                        </View>

                        {/* Chargement des données */}
                        {plantsData.length === 0 ? (
                            <ActivityIndicator size="large" color="red" />
                        ) : (
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={true}
                                bounces={false}
                                contentContainerStyle={styles.horizontalScrollViewContentContainerStyle}
                            >
                                {plantsData.map((item, index) => (
                                    <View key={index} style={styles.productWrapper}>
                                        <GridViewPlant
                                            plantImage={item.image ? { uri: item.image } : require('../../assets/images/banners/home/808_x_338.png')}
                                            plantTitle={item.name || ''}
                                            touchOptions={true}
                                            onPressOption={() => deleteOnePlant(item.id)}
                                            onPress={() => navigation.navigate('PlantMed Stack', { screen: 'PlantView', params: { plantId: item.id, plantName: item.name } })}
                                        />
                                    </View>
                                ))}
                            </ScrollView>
                        )}

                        {/* Symptômes Favoris */}
                        <View style={styles.verticalSpacer} />
                        <View style={styles.sectionTitleAndLinkWrapper}>
                            <SectionTitle title="Mes Symptômes cibles" />
                        </View>

                        {/* Chargement des données */}
                        {symptomsData.length === 0 ? (
                            <ActivityIndicator size="large" color="red" />
                        ) : (
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={true}
                                bounces={false}
                                contentContainerStyle={styles.horizontalScrollViewContentContainerStyle}
                            >
                                {symptomsData.map((item, index) => (
                                    <View key={index} style={styles.productWrapper}>
                                        <GridViewSymptom
                                            symptomImage={item.image ? { uri: item.image } : require('../../assets/images/banners/home/808_x_338.png')}
                                            symptomTitle={item.name || ''}
                                            touchOptions={true}
                                            onPressOption={() => deleteOneSymptom(item.id)}
                                            onPress={() => navigation.navigate('PlantMed Stack', { screen: 'SymptomView', params: { symptomId: item.id, symptomName: item.name } })}
                                        />
                                    </View>
                                ))}
                            </ScrollView>
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
        </>
    );
};

export default Favoris;
