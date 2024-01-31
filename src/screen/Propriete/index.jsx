import React from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import PlantNavBar from '../../navigation/tabs/PlantNavBar';
import useFetchPlant from '../../hook/useFetchPlant';
import styles from './styles';
import { COLORS } from '../../config/Colors';

const Propriete = ({ route }) => {
    const { plantId, originRoute, symptomeId, symptomeName } = route.params;
    const { data, isLoading, error } = useFetchPlant(plantId);

    if (!data) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={COLORS.accent} />
            </View>
        );
    }

    const { proprietes } = data;

    return (
        <View style={styles.background}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={COLORS.accent} />
                </View>
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <>
                    <PlantNavBar data={data} plantId={plantId} originRoute={originRoute} symptomeId={symptomeId} symptomeName={symptomeName} />
                    <ScrollView style={styles.container}>
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
                    </ScrollView>
                </>
            )}
        </View>
    );
};

export default Propriete;
