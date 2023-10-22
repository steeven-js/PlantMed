import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation depuis React Navigation

const PlantItem = ({ item }) => {
  const navigation = useNavigation(); // Initialisez la navigation

  const handlePress = () => {
    // Lorsque l'élément est pressé, naviguez vers la nouvelle screen avec id en tant que paramètre
    navigation.navigate('PlanteDetail', { id: item.id });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default PlantItem;
