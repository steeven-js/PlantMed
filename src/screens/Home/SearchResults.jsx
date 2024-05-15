import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import ListItem from './ListItem';
import styles from './styles';

const SearchResults = ({ search, theme }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [showNoResultsPlants, setShowNoResultsPlants] = useState(false);
    const [showNoResultsSymptoms, setShowNoResultsSymptoms] = useState(false);
    const [searching, setSearching] = useState(false);

    // Récupérer les données de plantes et de symptômes depuis Redux
    const plantData = useSelector((state) => state.plants.plantData);
    const symptomsData = useSelector((state) => state.symptoms.symptomsData);

    useEffect(() => {
        let timeoutId;

        // Fonction de recherche
        const performSearch = () => {
            // Filtrer les données des plantes
            const filteredPlants = plantData.filter((plant) =>
                plant.name.toLowerCase().includes(search.toLowerCase()),
            );

            // Filtrer les données des symptômes
            const filteredSymptoms = symptomsData.filter((symptom) =>
                symptom.name.toLowerCase().includes(search.toLowerCase()),
            );

            // Fusionner les résultats de la recherche
            const results = [
                { title: 'Plantes', data: filteredPlants },
                { title: 'Symptômes', data: filteredSymptoms },
            ];

            // Mettre à jour les résultats de la recherche
            setSearchResults(results);

            // Vérifier si aucun résultat n'est trouvé pour les plantes
            setShowNoResultsPlants(filteredPlants.length === 0);

            // Vérifier si aucun résultat n'est trouvé pour les symptômes
            setShowNoResultsSymptoms(filteredSymptoms.length === 0);
        };

        // Réinitialiser l'état de recherche après un délai
        const resetSearch = () => {
            timeoutId = setTimeout(() => {
                setSearching(false);
            }, 100);
        };

        // Vérifier si une recherche est en cours
        if (search.trim() !== '') {
            setSearching(true);
            clearTimeout(timeoutId); // Annuler le timeout précédent
            timeoutId = setTimeout(() => {
                performSearch();
                resetSearch();
            }, 100);
        } else {
            // Réinitialiser les résultats si la recherche est vide
            setSearchResults([]);
            setShowNoResultsPlants(false);
            setShowNoResultsSymptoms(false);
            resetSearch();
        }

        // Nettoyer le timeout lors du démontage du composant
        return () => clearTimeout(timeoutId);
    }, [search, plantData, symptomsData]);

    // Afficher les résultats de la recherche
    return (
        <View style={styles.scrollViewContentContainerStyle}>
            {searching && <ActivityIndicator />}
            {showNoResultsPlants && (
                <Text style={{ color: theme.textLowContrast }}>
                    Aucun résultat trouvé pour les plantes
                </Text>
            )}
            {showNoResultsSymptoms && (
                <Text style={{ color: theme.textLowContrast }}>
                    Aucun résultat trouvé pour les symptômes
                </Text>
            )}
            {searchResults.map((section) => (
                <View key={section.title} style={styles.sectionSearch}>
                    <Text
                        style={[styles.sectionTitle, { color: theme.accent }]}
                    >
                        {section.title}
                    </Text>
                    {section.data.map((item) => (
                        <ListItem
                            key={item.id}
                            item={item}
                            title={section.title}
                            theme={theme}
                        />
                    ))}
                </View>
            ))}
        </View>
    );
};

export default SearchResults;
