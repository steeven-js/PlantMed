import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '../../constants';
import CustomTextInput from '../../components/inputs/TextInput/';
import Button from '../../components/buttons/Button';
import styles from './styles';

const SymptomSearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            // Effectuez la recherche en utilisant l'API avec l'URL appropriée
            const response = await fetch(`https://apimonremede.jsprod.fr/api/symptomes?q=${searchQuery}`);
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
                style={styles.symptomeItem}
                onPress={() => {
                    // console.log('symptomeId:', item.id);
                    navigation.navigate('SymptomeStack', {
                        screen: 'SymptomeDetail',
                        params: {
                            symptomeId: item.id,
                            symptomeName: item.name,
                        },
                    });
                }}
            >
                <View style={styles.rowContainer}>
                    <View style={styles.left}>
                        <View style={styles.imageBackground}>
                            <Image
                                source={imageUrl ? { uri: imageUrl } : icons.soin}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={[styles.symptomeName, { fontSize: item.name.length >= 20 ? 22 : 28 }]}>
                            {item.name}
                        </Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={icons.feuille} style={styles.icon} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.overlay}>
                {/* <TextInput
                    placeholder="Recherchez un symptôme"
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                /> */}
                <CustomTextInput
                    label="Recherchez un symptôme"
                    placeholder="Recherchez un symptôme"
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

                <FlatList
                    data={searchResults}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    );
};

export default SymptomSearchScreen;
