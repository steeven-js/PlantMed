import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import PlantItem from './Components/PlantItem';
import {apiUrl} from './Common/const';
import Header from './Header';
import SearchBar from './Components/SearchBar';

const Fetch = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPlant = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getByCat = () => {};

  useEffect(() => {
    getPlant();
  }, []);

  return (
    <View>
      <View>
        <Header />
      </View>
      <View>
        <SearchBar/>
      </View>
      <View style={{alignItems:'center'}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => <PlantItem item={item} />}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default Fetch;
