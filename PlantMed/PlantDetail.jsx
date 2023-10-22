import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const PlantDetail = () => {
  const route = useRoute();
  const { id } = route.params;
  const [plantData, setPlantData] = useState(null);

  useEffect(() => {
    // Effectuez une requête HTTP vers l'API en utilisant l'id
    fetch(`http://127.0.0.1:8000/api/plante/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPlantData(data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des informations de la plante :', error);
      });
  }, [id]);

  return (
    <View>
      <Text>PlantDetail</Text>
      <Text>id: {id}</Text>
      <Text>Nom de la plante : {plantData.name}</Text>
    </View>
  );
};

export default PlantDetail;
