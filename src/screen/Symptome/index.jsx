import React from 'react';
import { View, FlatList, TouchableOpacity, Text, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFetchSymptoms from '../../hook/useFetchSymptoms';
import { icons } from '../../constants';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../config/Colors';

const Symptomes = () => {
    const { data, isLoading, error, refetch } = useFetchSymptoms();
    const navigation = useNavigation();

    const renderSymptomeItem = ({ item }) => {
        const hasMedia = item.media && item.media.length > 0;
        const imageUrl = hasMedia ? item.media[0]?.original_url : null;

        return (
            <TouchableOpacity
                style={styles.symptomeItem}
                onPress={() => {
                    navigation.navigate('SymptomeStack', {
                        screen: 'SymptomeDetail',
                        params: {
                            symptomeId: item.id,
                            symptomeName: item.name,
                        },
                    })
                }}
            >
                <View style={styles.rowContainer}>
                    <View style={styles.left}>
                        <View style={styles.imageBackground}>
                            <Image
                                source={imageUrl ? { uri: imageUrl } : icons.soin}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={[styles.symptomeName, { fontSize: item.name.length >= 20 ? 22 : 28 }]}>
                            {item.name}
                        </Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={icons.feuille} style={styles.icon} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.overlay}>
                {isLoading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color={COLORS.white} />
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
                        renderItem={renderSymptomeItem}
                        keyExtractor={(item) => item.id.toString()}
                        onEndReachedThreshold={0.5}
                        showsVerticalScrollIndicator={false}
                        onRefresh={refetch}
                        refreshing={isLoading}
                    />
                )}
            </View>
        </SafeAreaView>
    );


};

export default Symptomes;
