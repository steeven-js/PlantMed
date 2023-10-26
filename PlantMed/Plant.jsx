import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PlantItem from './Components/PlantItem';
import { apiUrl } from './Common/const';
import colors from './constants/Colors';

const Plant = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  const getPlant = async url => {
    try {
      const response = await fetch(url || apiUrl);
      const json = await response.json();
      setData(json.plantes);
      setPrevPageUrl(json.prev_page_url);
      setNextPageUrl(json.next_page_url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const goToPrev = () => {
    if (prevPageUrl) {
      // console.log('prevPageUrl', prevPageUrl);
      getPlant(prevPageUrl);
    }
  };

  const goToNext = () => {
    if (nextPageUrl) {
      // console.log('nextPageUrl', nextPageUrl);
      getPlant(nextPageUrl);
    }
  };

  const getByCat = () => { };

  useEffect(() => {
    getPlant();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <PlantItem item={item} />}
            numColumns={2}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingRight: 50,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        {prevPageUrl ? (
          <TouchableOpacity style={{ padding: 10 }} onPress={goToPrev}>
            <Text style={{ padding: 10, color: colors.primary, fontWeight: 'bold' }}>Prev</Text>
          </TouchableOpacity>
        ) : <Text style={{ padding: 20 }}>Prev</Text>}

        {nextPageUrl ? (
          <TouchableOpacity style={{ padding: 10 }} onPress={goToNext}>
            <Text style={{ padding: 10, color: colors.primary, fontWeight: 'bold' }}>Next</Text>
          </TouchableOpacity>
        ) : <Text style={{ padding: 20 }}>Next</Text>}
      </View>
    </View>
  );
};

export default Plant;
