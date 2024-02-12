import React from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import PlantNavBar from '../../navigation/tabs/PlantNavBar';
import useFetchPlant from '../../hook/useFetchPlant';
import styles from './styles';
import { COLORS } from '../../config/Colors';

const Utilisation = ({ route }) => {
    const { plantId, originRoute, symptomeId, symptomeName } = route.params;
    const { data, isLoading, error } = useFetchPlant(plantId);

    if (!data) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={COLORS.accent} />
            </View>
        );
    }

    return (
        <View style={styles.background}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={COLORS.accent} />
                </View>
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : !data || !data.utilisations ? (
                <View>
                    <Text>Utilisations data is missing or undefined.</Text>
                </View>
            ) : (
                <>
                    <PlantNavBar data={data} plantId={plantId} originRoute={originRoute} symptomeId={symptomeId} symptomeName={symptomeName} />
                    <ScrollView style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.section}>
                                <Text style={styles.title}>Utilisations</Text>
                            </View>

                            {/* Vertical spacer */}
                            <View style={styles.verticalSpacer} />

                            <View style={[styles.section, styles.borderBottom]}>
                                <Text style={styles.soustitre}>Usage Interne</Text>
                                {/* {data.utilisations.filter(item => item.type === 'interne').map((utilisationItem) => (
                                    <Text key={utilisationItem.id} style={styles.text}>
                                        {utilisationItem.value}
                                    </Text>
                                ))} */}

                                {data.usageInterne ? (
                                    <Text style={styles.text}>{data.usageInterne}</Text>
                                ) : (
                                    <Text style={styles.text}>No properties available</Text>
                                )}

                                {/* Vertical spacer */}
                                <View style={styles.verticalSpacer} />

                            </View>

                            <View style={styles.section}>
                                <Text style={styles.soustitre}>Usage Externe</Text>
                                {/* {data.utilisations.filter(item => item.type === 'externe').map((utilisationItem) => (
                                    <Text key={utilisationItem.id} style={styles.text}>
                                        {utilisationItem.value}
                                    </Text>
                                ))} */}

                                {data.usageExterne ? (
                                    <Text style={styles.text}>{data.usageExterne}</Text>
                                ) : (
                                    <Text style={styles.text}>No properties available</Text>
                                )}

                                {/* Vertical spacer */}
                                <View style={styles.verticalSpacer} />

                            </View>
                        </View>
                    </ScrollView>
                </>
            )}
        </View>
    );
};

export default Utilisation;
