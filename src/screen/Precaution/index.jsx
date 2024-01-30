import React from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import PlantNavBar from '../../navigation/tabs/PlantNavBar';
import useFetchPlant from '../../../hook/useFetchPlant';
import styles from './styles';

const Precaution = ({ route }) => {
    const { plantId, originRoute, symptomeId, symptomeName } = route.params;
    const { data, isLoading, error } = useFetchPlant(plantId);

    if (!data) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#2c5c2d" />
            </View>
        );
    }

    const { precautions } = data;

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
                                <Text style={styles.soustitre}>Précautions</Text>
                            </View>
                            {precautions && precautions.length > 0 ? (
                                precautions.map((precautionItem) => (
                                    <View key={precautionItem.id} style={styles.text}>
                                        <Text style={styles.text}>{'.'} {precautionItem.value}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text>No precautions available</Text>
                            )}
                        </View>
                    </View>
                </>
            )}
        </ScrollView>
    );
};

export default Precaution;
