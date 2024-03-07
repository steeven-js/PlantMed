import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, ImageBackground, Share } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';
import BackIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/AntDesign';
import NavIcon from 'react-native-vector-icons/FontAwesome6';
import ShareIcon from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from 'react-redux'
import styles from './styles';
import { COLORS } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';

const Colors = {
    active: '#00f',
    inactive: '#000',
};

const PlantNavBar = ({ data, plantId }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const [user, setUser] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const uid = useSelector(state => state.auth.uid)

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName, {
            plantId,
            originRoute: route.params?.originRoute,
            symptomeId: route.params?.symptomeId,
            symptomeName: route.params?.symptomeName,
        });
    };

    const isActiveScreen = (screenName) => route.name === screenName;

    const getTextColor = (screenName) => {
        switch (screenName) {
            case 'Info':
                return isActiveScreen(screenName) ? Colors.active : Colors.inactive;
            case 'Propriete':
                return isActiveScreen(screenName) ? '#0f0' : Colors.inactive;
            case 'Utilisation':
                return isActiveScreen(screenName) ? '#ff0' : Colors.inactive;
            case 'Precaution':
                return isActiveScreen(screenName) ? '#f00' : Colors.inactive;
            default:
                return Colors.inactive;
        }
    };

    const addToFavoritesHandler = async () => {
        if (!uid) {
            console.log("L'utilisateur n'est pas connecté");
            navigation.navigate('AuthStack', {
                Screen: 'Login',
            });
            return;
        }

        try {
            const plantId = route.params?.plantId;
            const existingFavoriteQuery = await firebase.firestore().collection('favoris')
                .where('userId', '==', uid)
                .where('plantId', '==', plantId)
                .get();

            if (!existingFavoriteQuery.empty) {
                const existingFavoriteDoc = existingFavoriteQuery.docs[0];
                await existingFavoriteDoc.ref.delete();
                setIsFavorite(false); // Plant removed from favorites
                console.log("Plante retirée des favoris avec succès!");
                return;
            }

            await firebase.firestore().collection('favoris').add({
                userId: uid,
                plantId: plantId,
            });

            setIsFavorite(true); // Plant added to favorites
            console.log("Plante ajoutée aux favoris avec succès!");
        } catch (error) {
            console.error("Erreur lors de la gestion des favoris:", error);
        }
    };

    const backSymptomeDetail = () => {
        navigation.navigate('SymptomeDetail', {
            symptomeId: route.params?.symptomeId,
            symptomeName: route.params?.symptomeName
        });
    };

    const backPlantDetail = () => {
        navigation.navigate('Plantes');
    };

    const backFavoris = () => {
        navigation.navigate('Favoris');
    };

    const backSearch = () => {
        navigation.navigate('PlantSearch');
    };

    const backToOriginRoute = () => {
        const { originRoute } = route.params;
        switch (originRoute) {
            case 'SymptomeDetail':
                return backSymptomeDetail();
            case 'Plantes':
                return backPlantDetail();
            case 'Favoris':
                return backFavoris();
            case 'PlantSearchScreen':
                return backSearch();
            default:
                return navigation.navigate('Plantes');
        }
    };

    const checkIsFavorite = async (userId) => {
        try {
            const existingFavoriteQuery = await firebase.firestore().collection('favoris')
                .where('userId', '==', userId)
                .where('plantId', '==', plantId)
                .get();

            setIsFavorite(!existingFavoriteQuery.empty);
        } catch (error) {
            console.error("Erreur lors de la vérification des favoris:", error);
        }
    };

    const hasMedia = data.media && data.media.length > 0;
    const imageUrl = hasMedia ? data.media[0]?.original_url : null;

    const sharePlant = () => {
        const plantUrl = `https://jsplantmed.vercel.app/plantmed/plante/${plantId}`;
        
        Share.share({
            message: plantUrl,
        })
            .then(result => console.log(result))
            .catch(errorMsg => console.error(errorMsg));
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            setUser(authUser);
            if (authUser) {
                checkIsFavorite(authUser.uid);
            } else {
                setIsFavorite(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <View>
            <View>
                <ImageBackground
                    source={imageUrl ? { uri: imageUrl } : require('../../../assets/images/plante/no-image.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.divAboveTabs}>
                        <View style={styles.divAboveTabsContent}>
                            <TouchableOpacity style={[styles.back, styles.bgIcon]} onPress={backToOriginRoute}>
                                <BackIcon name="arrow-back" size={STANDARD_VECTOR_ICON_SIZE} color="#fff" />
                            </TouchableOpacity>
                            <View style={styles.divAboveRightContent}>
                                <TouchableOpacity style={[styles.share, styles.bgIcon]} onPress={sharePlant}>
                                    <ShareIcon name="share-from-square" size={STANDARD_VECTOR_ICON_SIZE} color={COLORS.white} />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.star, styles.bgIcon]} onPress={addToFavoritesHandler}>
                                    {uid && isFavorite ? (
                                        <StarIcon name="star" size={STANDARD_VECTOR_ICON_SIZE} color={COLORS.yelloww} />
                                    ) : (
                                        <StarIcon name="star" size={STANDARD_VECTOR_ICON_SIZE} color={COLORS.white} />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View >

            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        onPress={() => navigateToScreen('Info')}
                        style={[
                            styles.touchableOpacity,
                            {
                                borderBottomColor: getTextColor('Info'),
                                borderBottomWidth: isActiveScreen('Info') ? 2 : 0,
                            },
                        ]}
                    >
                        <NavIcon name="circle-info" size={STANDARD_VECTOR_ICON_SIZE} color="#fff" />
                        {/* <Image source={icons.info} style={styles.icon} /> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigateToScreen('Propriete')}
                        style={[
                            styles.touchableOpacity,
                            {
                                borderBottomColor: getTextColor('Propriete'),
                                borderBottomWidth: isActiveScreen('Propriete') ? 2 : 0,
                            },
                        ]}
                    >
                        <NavIcon name="clipboard-list" size={STANDARD_VECTOR_ICON_SIZE} color="#fff" />
                        {/* <Image source={icons.propriete} style={styles.icon} /> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigateToScreen('Utilisation')}
                        style={[
                            styles.touchableOpacity,
                            {
                                borderBottomColor: getTextColor('Utilisation'),
                                borderBottomWidth: isActiveScreen('Utilisation') ? 2 : 0,
                            },
                        ]}
                    >
                        <NavIcon name="heart-circle-check" size={STANDARD_VECTOR_ICON_SIZE} color="#fff" />
                        {/* <Image source={icons.usage} style={styles.icon} /> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigateToScreen('Precaution')}
                        style={[
                            styles.touchableOpacity,
                            {
                                borderBottomColor: getTextColor('Precaution'),
                                borderBottomWidth: isActiveScreen('Precaution') ? 2 : 0,
                            },
                        ]}
                    >
                        <NavIcon name="circle-exclamation" size={STANDARD_VECTOR_ICON_SIZE} color="#fff" />
                        {/* <Image source={icons.caution} style={styles.icon} /> */}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PlantNavBar;
