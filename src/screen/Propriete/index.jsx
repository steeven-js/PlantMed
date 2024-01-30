import React from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import PlantNavBar from '../../navigation/tabs/PlantNavBar';
import useFetchPlant from '../../hook/useFetchPlant';
import styles from './styles';

const Propriete = ({ route }) => {
    const { plantId, originRoute, symptomeId, symptomeName } = route.params;
    const { data, isLoading, error } = useFetchPlant(plantId);

    if (!data) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#2c5c2d" />
            </View>
        );
    }

    const { proprietes } = data;

    return (
        <ScrollView style={styles.background}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#2c5c2d" />
                </View>
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <>
                    <PlantNavBar data={data} plantId={plantId} originRoute={originRoute} symptomeId={symptomeId} symptomeName={symptomeName} />
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.section}>
                                <Text style={styles.soustitre}>Propriétés</Text>
                            </View>
                            {proprietes && proprietes.length > 0 ? (
                                proprietes.map((proprietesItem) => (
                                    <View key={proprietesItem.id} style={styles.text}>
                                        <Text style={styles.text}>{'.'} {proprietesItem.value}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text>No properties available</Text>
                            )}
                        </View>
                    </View>
                </>
            )}
        </ScrollView>
    );
};

export default Propriete;
