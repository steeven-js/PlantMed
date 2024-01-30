import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFetchPlants from '../../hook/useFetchPlants';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux'
import StarIcon from 'react-native-vector-icons/FontAwesome6';

import styles from './styles';

const Plantes = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const { data, isLoading, error, refetch } = useFetchPlants();
  const uid = useSelector(state => state.auth.uid)

  const loadFavorites = async (userId) => {
    try {
      console.log('loadFavorites')
      const favoritesSnapshot = await firestore()
        .collection('favoris')
        .where('userId', '==', userId)
        .get();
      const favoritePlants = favoritesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFavorites(favoritePlants);
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  useEffect(() => {
    loadFavorites(uid);
  }, []);

  if (!data) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2c5c2d" />
      </View>
    );
  }

  const getPlantItemStyle = (item) => {
    const isFavorite = favorites.some((favorite) => favorite.plantId === item.id);
    return isFavorite ? styles.favoritePlant : styles.plant;
  };

  const renderPlantItem = ({ item }) => {
    const hasMedia = item.media && item.media.length > 0;
    const imageUrl = hasMedia ? item.media[0]?.original_url : null;

    return (
      <TouchableOpacity
        style={[
          getPlantItemStyle(item),
          styles.spacing,
        ]}
        onPress={() => {
          navigation.navigate('PlanteStack', {
            screen: 'Info',
            params: {
              plantId: item.id,
              plantName: item.name,
            },
          })
        }}
      >
        <Image
          source={imageUrl ? { uri: imageUrl } : require('../../assets/images/plante/no-image.png')}
          style={styles.plantImage}
        />
        <StarIcon name="star" size={30} color="#fff" style={styles.icon} onPress={() => { console.log('hello') }} />
        <View style={styles.plantInfoContainer}>
          <Text style={styles.plantName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.overlay}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#2c5c2d" />
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <Text>Error loading data. Please try again.</Text>
          </View>
        ) : !data ? (
          <View style={styles.noDataContainer}>
            <Text>No data available.</Text>
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={renderPlantItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            onRefresh={refetch}
            refreshing={isLoading}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Plantes;
