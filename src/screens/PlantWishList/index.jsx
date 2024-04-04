import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { scale } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';

import Button from '../../components/buttons/Button';
import GridViewItem from '../../components/cards/GridViewItem';
import { STANDARD_SPACING } from '../../config/Constants';
import useAuthCheck from '../../functions/authCheck';
import {
    deleteAllPlantsFavoris,
    deleteOnePlantFavoris,
} from '../../functions/deleteFavoris';
import { useUserPlantsFavoris } from '../../functions/loadUserFavoris';
import { navigateAndPerformAction } from '../../functions/navigationComplex';
import useFetchFavorisPlants from '../../hooks/useFetchFavorisPlants';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

const PlantWishList = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Utilisez useAuthCheck pour récupérer l'identifiant de l'utilisateur authentifié
    const { userAuthUid } = useAuthCheck();

    // Récupérer les symptômes favoris de l'utilisateur
    const userSymptomsFavoris = useUserPlantsFavoris(userAuthUid);

    // Récupérer les données des plantes favorites de l'utilisateur
    const { plantData, isFavorisPlantsLoading } =
        useFetchFavorisPlants(userSymptomsFavoris);

    // Suppression d'un symptôme de la liste de favoris
    const deleteOnePlant = (plantId) => {
        deleteOnePlantFavoris({ uid: userAuthUid, plantId });
    };

    // Navigation
    const navigation = useNavigation();

    // fonction pour naviguer vers 'Plants'
    const navigateAndPerformAction1 = () => {
        navigateAndPerformAction(
            navigation,
            'Plant Stack',
            'PlantMedTab',
            'Plants',
            500,
        );
    };

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {isFavorisPlantsLoading ? (
                <ActivityIndicator
                    size="large"
                    color={theme.accent}
                    style={[
                        styles.mainWrapper,
                        {
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                    ]}
                />
            ) : (
                <>
                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Flatgrid wrapper */}
                    <Text
                        style={[
                            styles.profileName,
                            {
                                color: theme.textHighContrast,
                                textAlign: 'center',
                            },
                        ]}
                    >
                        Plantes ajoutées à la liste de favoris
                    </Text>
                    <View style={styles.flatGridWrapper}>
                        {/* Flatgrid */}
                        <FlatGrid
                            itemDimension={scale(130)}
                            data={plantData || []}
                            style={styles.flatGrid}
                            spacing={STANDARD_SPACING * 3}
                            bounces={false}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <GridViewItem
                                    plantImage={
                                        item.media && item.media.length > 0
                                            ? {
                                                  uri: item.media[0]
                                                      .original_url,
                                              }
                                            : require('../../assets/images/banners/home/808_x_338.png')
                                    }
                                    plantTitle={item.name || ''}
                                    touchOptions={true}
                                    onPressOption={() => {
                                        deleteOnePlant(item.id);
                                    }}
                                    onPress={() =>
                                        navigation.navigate('Plant Stack', {
                                            screen: 'PlantView',
                                            params: {
                                                plantId: item.id,
                                                plantName: item.name,
                                            },
                                        })
                                    }
                                />
                            )}
                        />
                    </View>

                    {/* Button component */}
                    <Animatable.View animation="fadeInUp" delay={300}>
                        {plantData && plantData.length > 0 ? (
                            <Button
                                label="Supprimer tous les favoris"
                                onPress={() => {
                                    deleteAllPlantsFavoris({
                                        uid: userAuthUid,
                                    });
                                }}
                            />
                        ) : (
                            <Button
                                label="Tous les plantes"
                                onPress={navigateAndPerformAction1}
                            />
                        )}
                    </Animatable.View>
                </>
            )}
        </View>
    );
};

export default PlantWishList;
