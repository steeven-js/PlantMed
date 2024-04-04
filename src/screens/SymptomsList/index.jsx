import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { scale } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';
import { useSelector } from 'react-redux';

import SymptomsListItem from '../../components/cards/SymptomsListItem';
import { STANDARD_SPACING } from '../../config/Constants';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

const SymptomsList = () => {
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? lightTheme : darkTheme;
    const navigation = useNavigation();

    const symptomsData = useSelector((state) => state.symptoms.symptomsData);
    const [visibleItemCount, setVisibleItemCount] = useState(50); // Nombre initial d'éléments à afficher
    const [loadingMore, setLoadingMore] = useState(false); // État pour suivre si plus de données sont en cours de chargement

    // Render item function for FlatGrid
    const renderItem = ({ item }) => (
        <SymptomsListItem item={item} navigation={navigation} />
    );

    // Gestionnaire d'événement de défilement pour charger plus de données
    const handleLoadMore = () => {
        if (!loadingMore) {
            setLoadingMore(true);
            setTimeout(() => {
                setVisibleItemCount((prevCount) => prevCount + 25);
                setLoadingMore(false);
            }, 1000); // Simulation d'une latence de chargement pour l'exemple
        }
    };

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {/* Flatgrid wrapper */}
            <Animatable.View
                animation="fadeInUp"
                delay={100}
                style={styles.flatGridWrapper}
            >
                {/* Flatgrid */}
                <FlatGrid
                    itemDimension={scale(130)}
                    data={symptomsData.slice(0, visibleItemCount)}
                    style={styles.flatGrid}
                    spacing={STANDARD_SPACING * 3}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    onEndReached={handleLoadMore} // Déclenche la fonction lorsqu'on atteint la fin de la liste
                    onEndReachedThreshold={0.5} // Chargement supplémentaire lorsqu'on atteint la moitié de la liste visible
                    ListFooterComponent={() =>
                        loadingMore ? (
                            <ActivityIndicator size="large" color="red" />
                        ) : null
                    } // Affiche un indicateur de chargement lors du chargement supplémentaire
                    disableVirtualization={true} // Désactiver la virtualisation de la liste
                />
            </Animatable.View>
        </View>
    );
};

export default SymptomsList;
