import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import {getOnePlant} from './Common/api';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PlantUsage from './Components/PlantUsage';

const PlantDetail = ({route}) => {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [plant, setPlant] = useState(null);

  const {id} = route.params;

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

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handleGoBack}
        style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Text>
          <Icon name="arrow-left" size={30} color="#000" />
        </Text>
        <Text style={{marginLeft: 10}}>Back</Text>
      </TouchableOpacity>
      <View style={{paddingHorizontal: 20}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={{padding: 10}}>
            {plant?.media?.url ? (
              <Image
                source={{uri: plant.media.url}}
                style={{width: 200, height: 200}}
              />
            ) : null}
            <Text style={{paddingVertical: 10 ,fontWeight: 'bold'}}>{plant?.name}</Text>
            <Text>{plant?.notes}</Text>
            <FlatList
              data={plant?.usages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => <PlantUsage item={item} />}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default PlantDetail;
