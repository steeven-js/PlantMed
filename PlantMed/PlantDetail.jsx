import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { getOnePlant } from './Common/api';
import PlantUsage from './Components/PlantUsage';
import Back from './Components/Back';

const PlantDetail = ({ route }) => {
  const [isLoading, setLoading] = useState(true);
  const [plant, setPlant] = useState(null);

  const { id } = route.params;

  const loadApi = async () => {
    if (id !== 0) {
      try {
        const dataPlant = await getOnePlant(id);
        setPlant(dataPlant);
        setLoading(false);
      } catch (error) {
        console.error('Error loading plant data:', error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Back />
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View style={{ flex: 1, padding: 10 }}>
              {plant?.media?.url ? (
                <Image source={{ uri: plant.media.url }} style={{ width: 200, height: 200 }} />
              ) : null}
              <Text style={{ paddingVertical: 10, fontWeight: 'bold' }}>{plant?.name}</Text>
              <Text>{plant?.notes}</Text>
              {plant?.usages.map((item, index) => (
                <PlantUsage key={index} item={item} />
              ))}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default PlantDetail;
