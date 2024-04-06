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
    deleteAllSymptomsFavoris,
    deleteOneSymptomFavoris,
} from '../../functions/deleteFavoris';
import { useUserSymptomsFavoris } from '../../functions/loadUserFavoris';
import { navigateAndPerformAction } from '../../functions/navigationComplex';
import useFetchFavorisSymptoms from '../../hooks/useFetchFavorisSymptoms';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

const SymptomWishList = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Utilisez useAuthCheck pour récupérer l'identifiant de l'utilisateur authentifié
    const { userAuthUid } = useAuthCheck();

    // Récupérer les symptômes favoris de l'utilisateur
    const userSymptomsFavoris = useUserSymptomsFavoris(userAuthUid);

    // Récupérer les données des plantes favorites de l'utilisateur
    const { symptomData, isFavorisSymptomsLoading } =
        useFetchFavorisSymptoms(userSymptomsFavoris);

    // Suppression d'un symptôme de la liste de favoris
    const deleteOneSymptom = (symptomId) => {
        deleteOneSymptomFavoris({ uid: userAuthUid, symptomId });
    };

    // Navigation
    const navigation = useNavigation();

    // fonction pour naviguer vers 'Symptoms'
    const navigateAndPerformAction1 = () => {
        navigateAndPerformAction(
            navigation,
            'Plant Stack',
            'PlantMedTab',
            'Symptoms',
            250,
        );
    };

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {isFavorisSymptomsLoading ? (
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
                        Symptômes cibles
                    </Text>
                    <View style={styles.flatGridWrapper}>
                        {/* Flatgrid */}
                        <FlatGrid
                            itemDimension={scale(130)}
                            data={symptomData || []}
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
                                        deleteOneSymptom(item.id);
                                    }}
                                    onPress={() =>
                                        navigation.navigate('Plant Stack', {
                                            screen: 'SymptomView',
                                            params: {
                                                symptomId: item.id,
                                                symptomName: item.name,
                                            },
                                        })
                                    }
                                />
                            )}
                        />
                    </View>

                    {/* Button component */}
                    <Animatable.View animation="fadeInUp" delay={300}>
                        {symptomData && symptomData.length > 0 ? (
                            <Button
                                label="Supprimer tous les favoris"
                                onPress={() => {
                                    deleteAllSymptomsFavoris({
                                        uid: userAuthUid,
                                    });
                                }}
                            />
                        ) : (
                            <Button
                                label="Tous les symptômes"
                                onPress={navigateAndPerformAction1}
                            />
                        )}
                    </Animatable.View>
                </>
            )}
        </View>
    );
};

export default SymptomWishList;
