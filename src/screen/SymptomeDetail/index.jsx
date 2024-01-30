import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';
import useFetchSymptom from '../../hook/useFetchSymptom';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';
import styles from './styles';

const SymptomeDetail = ({ route, navigation }) => {
    const { symptomeId, symptomeName } = route.params;
    const { data: symptomePlants, isLoading, error, refetch } = useFetchSymptom(symptomeId);

    const renderItem = ({ item }) => {
        const hasMedia = item.media && item.media.length > 0;
        const imageUrl = hasMedia ? item.media[0]?.original_url : null;

        return (
            <TouchableOpacity
                style={[styles.plant, styles.spacing]}
                onPress={() => {
                    navigation.navigate('PlanteStack', {
                        screen: 'Info',
                        params: {
                            plantId: item.id,
                            symptomeId: symptomeId,
                            symptomeName: symptomeName,
                            originRoute: 'SymptomeDetail',
                        },
                    })
                }}
            >
                <Image
                    source={imageUrl ? { uri: imageUrl } : require('../../assets/images/plante/no-image.png')}
                    style={styles.plantImage}
                />
                <View style={styles.plantInfoContainer}>
                    <Text style={styles.plantName}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.background}>
            <View style={styles.TopNavBar}>
                <BackIcon
                    name="arrow-back"
                    size={STANDARD_VECTOR_ICON_SIZE}
                    color="#fff"
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.textTopNavBar}>{symptomeName}</Text>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#2c5c2d" />
                ) : error ? (
                    <Text>Error loading plants. Please try again.</Text>
                ) : (
                    <Text style={styles.textTopNavBar}>
                        {symptomePlants?.plants_count}
                    </Text>
                )}
            </View>

            <View style={styles.overlay}>
                {isLoading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#2c5c2d" />
                    </View>
                ) : error ? (
                    <Text>Error loading plants. Please try again.</Text>
                ) : symptomePlants && symptomePlants.plants ? (
                    <FlatList
                        data={symptomePlants.plants}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        numColumns={2}
                        onRefresh={refetch}
                        refreshing={isLoading}
                    />
                ) : (
                    <Text>No plants available.</Text>
                )}
            </View>
        </View>
    );
};

export default SymptomeDetail;
