import { TouchableOpacity, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { getOnePrepa } from './Common/api';
import Back from './Components/Back';

const PreparationDetail = ({ route }) => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [preparation, setPreparation] = useState(null);
    const { id } = route.params;

    const loadApiPrepa = async () => {
        if (id !== 0) {
            try {
                const dataPrepa = await getOnePrepa(id);
                setPreparation(dataPrepa);
                setLoading(false);
            } catch (error) {
                console.error('Error loading Prepa data:', error);
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        loadApiPrepa();
    }, []);

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View>
            <Back />
            <View>
                {preparation && <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>{preparation.name}</Text>}
                {preparation && preparation.plantes && preparation.plantes.map((plante) => (
                    <View key={plante.id}>
                        <Text>{plante.name}</Text>
                        {plante.media && (
                            <Image
                                source={{ uri: plante.media.url }}
                                style={{ width: 200, height: 200 }}
                            />
                        )}
                        {/* <Text>{plante.notes}</Text> */}
                    </View>
                ))}
            </View>
        </View>
    );
}

export default PreparationDetail;
