import { View, Text, ActivityIndicator, Image } from 'react-native';
import React, { useState, useEffect } from 'react'
import Back from './Components/Back'
import { getOneCategory } from './Common/api';

const CategoryDetail = ({ route }) => {
    const [isLoading, setLoading] = useState(true);
    const [category, setCategory] = useState(null);
    const { id } = route.params;

    useEffect(() => {
        loadApiCat();
    }, []);

    const loadApiCat = async () => {
        if (id !== 0) {
            try {
                const response = await getOneCategory(id);
                setCategory(response);
                setLoading(false);
                console.log('response', response);
            } catch (error) {
                console.error('Error loading Category data:', error);
                setLoading(false);
            }
        }
    }

    return (
        <View>
            <Back />
            <View>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <View
                        style={{ padding: 10 }}
                    >
                        <Text
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                            {category ? category.category.name : "Category not found"}
                        </Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: 10 }}>
                            {category && category.plantes && category.plantes > 0 ? (
                                category.plantes.map((plante) => (
                                    <View
                                        style={{ margin: 10 }}
                                        key={plante.id}>
                                        {plante.media && plante.media.url ? (
                                            <Image source={{ uri: plante.media.url }} style={{ width: 100, height: 100 }} />
                                        ) : (
                                            <Text>No image available</Text>
                                        )}
                                        <Text style={{textAlign: 'center'}}>{plante.name}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text>Aucune plante associée à cette catégories</Text>
                            )}
                        </View>

                    </View>
                )}
            </View>
        </View>
    )
}

export default CategoryDetail;
