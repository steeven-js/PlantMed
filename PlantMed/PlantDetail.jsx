import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getOnePlant} from './common/api';

const PlantDetail = ({route}) => {
  console.log(route);

  const [isLoading, setLoading] = useState(true);
  const [plant, setPlant] = useState();

  const {id} = route.params;

  const loadApi = async () => {
    if (id != 0) {
      const dataPlant = await getOnePlant(id);
      setPlant(dataPlant);

      console.log(dataPlant)
    }
  };

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <View>
      {isLoading?<Text>{ plant?.name}</Text>: <ActivityIndicator/>}
    </View>
  );
};

export default PlantDetail;
