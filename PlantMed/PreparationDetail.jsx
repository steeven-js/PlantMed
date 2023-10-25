import { TouchableOpacity, View, Text, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import { getOnePrepa } from './Common/api';
import Colors from './constants/Colors';

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
                setPreparation(dataPrepa); // Assuming dataPrepa is an object with a "plantes" property
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
            <TouchableOpacity
                onPress={handleGoBack}
                style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Text>
                    <Icon name="arrow-left" size={30} color={Colors.primary} />
                </Text>
                <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Back</Text>
            </TouchableOpacity>
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
