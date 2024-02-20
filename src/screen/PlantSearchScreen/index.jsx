import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from '../../components/inputs/TextInput/';
import Button from '../../components/buttons/Button';
import styles from './styles';

const PlantSearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            // Effectuez la recherche en utilisant l'API avec l'URL appropriée
            const response = await fetch(`https://apimonremede.jsprod.fr/api/plants?q=${searchQuery}`);
            const data = await response.json();

            // Filtrer les résultats en fonction du texte de recherche
            const filteredResults = data.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            // Mettez à jour setSearchResults avec les résultats filtrés
            setSearchResults(filteredResults);

            // Affichez les résultats dans la console
            console.log('Résultats de la recherche :', filteredResults);
        } catch (error) {
            console.error('Erreur lors de la recherche :', error);
        }
    };

    useEffect(() => {
        // Effectuer la recherche uniquement lorsque l'utilisateur a fini de saisir du texte
        const timeoutId = setTimeout(() => {
            if (searchQuery.trim() !== '') {
                handleSearch();
            }
        }, 1000);

        // Nettoyer le timeout lorsque le composant est démonté ou lorsque le texte change
        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    const renderItem = ({ item }) => {
        const hasMedia = item.media && item.media.length > 0;
        const imageUrl = hasMedia ? item.media[0]?.original_url : null;

        return (
            <TouchableOpacity
                style={[styles.plant, styles.spacing]}
                onPress={() => {
                    // console.log('plantId:', item.id);
                    navigation.navigate('PlanteStack', {
                        screen: 'Info',
                        params: {
                            plantId: item.id,
                            plantName: item.name,
                            originRoute: 'PlantSearchScreen',
                        },
                    });
                }}>
                <Image
                    source={
                        imageUrl
                            ? { uri: imageUrl }
                            : require('../../assets/images/plante/no-image.png')
                    }
                    style={styles.plantImage}
                />
                <View style={styles.plantInfoContainer}>
                    <Text style={styles.plantName}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.overlay}>
                <CustomTextInput
                    label="Recherchez une plante"
                    placeholder="Recherchez une plante"
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                    autoCapitalize="none"
                    keyboardType="text"
                />

                <View style={styles.verticalSpacer} />

                {/* <Button title="Rechercher" onPress={handleSearch} /> */}

                <Button
                    label="Rechercher"
                    onPress={handleSearch}
                />

                <View style={styles.verticalSpacer} />

                {/* <FlatList
                    data={searchResults}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                /> */}

                <FlatList
                    data={searchResults}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.container}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

export default PlantSearchScreen;
