import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PlantItem = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('PlanteDetail', { id: item.id });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{justifyContent:'center', alignItems:'center', padding: 10}}>
      {item.media && item.media.url ? (
        <Image source={{ uri: item.media.url }} style={{ width: 150, height: 150, borderRadius: 10 }} />
      ) : (
        <View style={{ width: 100, height: 100, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center' }}>
          <Text>Image non disponible</Text>
        </View>
      )}
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default PlantItem;
