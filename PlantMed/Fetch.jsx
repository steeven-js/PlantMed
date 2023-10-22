import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import PlantItem from './Components/PlantItem';

const Fetch = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPlant = async () => {
    try {
      const response = await fetch('https://plantmed.jsprod.fr/api/plante');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlant();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <PlantItem item={item} />}
        />
      )}
    </View>
  );
};

export default Fetch;
