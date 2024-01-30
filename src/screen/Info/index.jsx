import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PlantNavBar from '../../navigation/tabs/PlantNavBar';
import useFetchPlant from '../../hook/useFetchPlant';
import styles from './styles';

const Info = ({ route }) => {
    const { plantId, originRoute, symptomeId, symptomeName } = route.params;
    const { data, isLoading, error } = useFetchPlant(plantId);

    if (!data) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#2c5c2d" />
            </View>
        );
    }

    return (
        <View style={styles.background}>
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
                                <Text style={styles.title}>{data.name}</Text>
                            </View>

                            <View style={[styles.section, styles.borderBottom]}>
                                <Text>
                                    <Text style={styles.bold}>N.Scient:{' '}</Text>
                                    <Text style={styles.text}>{data.nscient}</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.bold}>Famille:{' '}</Text>
                                    <Text style={styles.text}>{data.famille}</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.bold}>Genre:{' '}</Text>
                                    <Text style={styles.text}>{data.genre}</Text>
                                </Text>
                            </View>

                            {/* Vertical spacer */}
                            <View style={styles.verticalSpacer} />

                            <View style={[styles.section, styles.borderBottom]}>
                                <Text style={styles.soustitre}>Description</Text>
                                <Text style={styles.text}>{data.description}</Text>
                            </View>

                            <View style={[styles.section, styles.borderBottom]}>
                                <Text style={styles.soustitre}>Habitat</Text>
                                <Text style={styles.text}>{data.habitat}</Text>
                            </View>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
};

export default Info;
