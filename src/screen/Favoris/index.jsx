import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import useFetchPlants from '../../hook/useFetchPlants';
import Question from '../../components/paragraphs/Question';
import Link from '../../components/links/Link';
import * as Animatable from 'react-native-animatable';
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../../redux/reducer/favoris';
import styles from './styles';
import Button from '../../components/buttons/Button';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import { useFocusEffect } from '@react-navigation/native';
import { COLORS } from '../../config/Colors';

const Favoris = ({ route, navigation }) => {
    const [favorites, setFavorites] = useState([]);
    const { data: plantsData, isLoading, error, refetch } = useFetchPlants();
    const uid = useSelector(state => state.auth.uid)

    const loadFavorites = async (userId) => {
        try {
            // console.log('loadFavorites');
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

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites(uid);
        }, [uid])
    );

    const renderItem = ({ item }) => {
        const plant = plantsData.find((p) => p.id === item.plantId) || {};

        const hasMedia = plant.media && plant.media.length > 0;
        const imageUrl = hasMedia ? plant.media[0]?.original_url : null;

        return (
            <TouchableOpacity
                style={styles.favorite}
                onPress={() => {
                    navigation.navigate('PlanteStack', {
                        screen: 'Info',
                        params: {
                            plantId: item.plantId,
                            originRoute: route.name,
                        },
                    })
                }}
            >
                <Image
                    source={
                        imageUrl
                            ? { uri: imageUrl }
                            : require('../../assets/images/plante/no-image.png')
                    }
                    style={styles.plantImage}
                />
                <View style={styles.favoriteInfoContainer}>
                    <Text style={styles.favoriteName}>
                        {plant.name || 'Unknown Plant'}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    if (isLoading) {
        return (
            <View style={uid ? styles.background : styles.backgroundLogOut}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={COLORS.white} />
                </View>
            </View>
        );
    }

    if (!uid) {
        return (
            <View style={styles.backgroundLogOut}>

                <Animatable.View animation="fadeInUp" delay={250}>
                    {/* <ScreenInfo label="Vous devez être connecté pour accéder à vos favoris" /> */}
                    <ScreenInfo info="Vous devez être connecté pour accéder à vos favoris" />
                </Animatable.View>

                <View style={styles.verticalSpacer} />

                <Animatable.View animation="fadeInUp" delay={500}>
                    <Button
                        label="Se connecter"
                        onPress={() => {
                            navigation.navigate('Se connecter')
                        }}
                        disabled={isLoading}
                    />
                </Animatable.View>

            </View>
        );
    }

    if (!error && plantsData && uid) {
        return (
            <View style={styles.background}>
                <View style={styles.overlay}>
                    {favorites.length === 0 ? (
                        <View style={styles.noFavorite}>
                            <Animatable.View
                                animation="fadeInUp"
                                delay={100}
                                style={styles.questionAndLinkWrapper}>

                                <Question question="Vous n'avez pas de plante dans vos favoris" />
                            </Animatable.View>
                            <Animatable.View
                                animation="fadeInUp"
                                delay={300}
                                style={styles.questionAndLinkWrapper}>

                                <Link
                                    label="Découvrir nos plantes médicinales"
                                    onPress={() => navigation.navigate('Home', {
                                        screen: 'Plantes médicinales',
                                    })}
                                />
                            </Animatable.View>
                        </View>
                    ) : (
                        <FlatList
                            data={favorites}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                            numColumns={2}
                            refreshing={isLoading}
                            showsVerticalScrollIndicator={false}
                            onRefresh={refetch}
                        />
                    )}
                </View>
            </View>
        );
    }

    return null;
};

export default Favoris;
