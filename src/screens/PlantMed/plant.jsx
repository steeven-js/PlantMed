import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Plant = ({ route }) => {
    const { plantId, setTitle } = route.params;
    const plantData = useSelector(state => state.plants.plantsData.find(plant => plant.id === plantId));
    // console.log('plantData', plantData);

    // Récupérer la navigation
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: plantData.name });
    }, [navigation, plantData, setTitle]);

    return (
        <View>
            <Text>{plantData.name}</Text>
        </View>
    );
};

export default Plant;
