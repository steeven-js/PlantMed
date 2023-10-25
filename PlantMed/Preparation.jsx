import { ActivityIndicator, View, Text, FlatList } from 'react-native';
import { preparationApiUrl } from './Common/const';
import React, { useEffect, useState } from 'react';
import PreparationItem from './Components/PreparationItem';

const Preparation = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Appel à l'API pour obtenir les données au chargement du composant
        getPreparation(preparationApiUrl);
    }, []);

    const getPreparation = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json); // Nous utilisons json.data pour obtenir la liste des éléments
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <PreparationItem item={item} />}
                    numColumns={2}
                />
            )}
        </View>
    );
};

export default Preparation;
