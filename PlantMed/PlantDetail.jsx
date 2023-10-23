import { View, Text, ActivityIndicator, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getOnePlant } from './Common/api';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation depuis React Navigation

const PlantDetail = ({ route }) => {
  const navigation = useNavigation(); // Initialisez la navigation

  console.log(route);

  const [isLoading, setLoading] = useState(true);
  const [plant, setPlant] = useState();

  const { id } = route.params;

  const loadApi = async () => {
    if (id !== 0) {
      const dataPlant = await getOnePlant(id);
      setPlant(dataPlant);

      console.log(dataPlant);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApi();
  }, []);

  const handleGoBack = () => {
    navigation.goBack(); // Utilisez la fonction goBack pour revenir en arrière
  };

  return (
    <View>
      <Button title="Go Back" onPress={handleGoBack} />
      {isLoading ? <ActivityIndicator /> : <Text>{plant?.name}</Text>}
    </View>
  );
};

export default PlantDetail;
