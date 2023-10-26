import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { categoryApiUrl } from './Common/const';
import Back from './Components/Back';
import CategoryItem from './Components/CategoryItem';

const Category = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getCategories = async () => {
    try {
      const response = await fetch(categoryApiUrl);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getCategories();
  }, [])

  return (
    <ScrollView>
      <View>
        <Back />
        <View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
              {data.map((item) => (
                <CategoryItem key={item.id} item={item} />
              ))}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Category;
