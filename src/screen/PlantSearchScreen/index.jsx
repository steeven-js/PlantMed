import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, TouchableOpacity, Text } from 'react-native';

const PlantSearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            // Effectuez la recherche en utilisant l'API avec l'URL appropriée
            // Par exemple, utilisez fetch() pour interagir avec votre API
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

    const renderItem = ({ item }) => (
        // <TouchableOpacity onPress={() => navigation.navigate('PlanteStack', {
        //     screen: 'Info',
        //     plantId: item.id,
        // })}>
        <TouchableOpacity onPress={() => {
            console.log('plantId:', item.id);
            navigation.navigate('PlanteStack', {
                screen: 'Info',
                params: {
                    plantId: item.id,
                    originRoute: 'PlantSearchScreen',
                },
            });
        }}>
            <View>
                <Text>{item.name}</Text>
                {/* Affichez d'autres informations sur la plante si nécessaire */}
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <TextInput
                placeholder="Recherchez une plante"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />
            <Button title="Rechercher" onPress={handleSearch} />
            <FlatList
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default PlantSearchScreen;
