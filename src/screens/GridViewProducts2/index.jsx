import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const GridViewProducts2 = ({ route }) => {
  const { plantId } = route.params;
  const plantData = useSelector(state => state.plants.plantsData.find(plant => plant.id === plantId));
  // console.log('plantData', plantData);
  return (
    <View>
      <Text>GridViewProducts2</Text>
    </View>
  );
};

export default GridViewProducts2;
