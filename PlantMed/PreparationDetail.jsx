import { TouchableOpacity, View, Text, FlatList } from 'react-native'
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
                // console.log('dataPrepa', dataPrepa);
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

    const renderPlanteItem = ({ item }) => {
        return (
            <View>
                <Text>{item.name}</Text>
                {/* <Text>{item.notes}</Text> */}
            </View>
        );
    }

    return (
        <View>
            <Back />
            {preparation && <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24}}>{preparation.name}</Text>}
            {preparation && preparation.plantes && (
                <FlatList
                    data={preparation.plantes}
                    renderItem={renderPlanteItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}

export default PreparationDetail;
