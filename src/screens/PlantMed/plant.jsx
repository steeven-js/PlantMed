import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const Plant = ({ route }) => {
    const { plantId } = route.params;
    const plantData = useSelector(state => state.plants.plantsData.find(plant => plant.id === plantId));
    console.log('plantData', plantData);

    return (
        <View>
            <Text>{plantData.name}</Text>
        </View>
    );
};

export default Plant;
