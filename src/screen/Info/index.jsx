import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import PlantNavBar from '../../navigation/tabs/PlantNavBar';
import useFetchPlant from '../../hook/useFetchPlant';
import styles from './styles';
import { COLORS } from '../../config/Colors';

const Info = ({ route }) => {
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
            ) : (
                <>
                    <PlantNavBar data={data} plantId={plantId} originRoute={originRoute} symptomeId={symptomeId} symptomeName={symptomeName} />
                    <ScrollView style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.section}>
                                <Text style={styles.title}>{data.name}</Text>
                            </View>

                            <View style={[styles.section, styles.borderBottom]}>
                                <Text>
                                    <Text style={styles.soustitre}>Nom scientifique:{' '}</Text>
                                    <Text style={styles.text}>{data.nscient}</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.soustitre}>Famille:{' '}</Text>
                                    <Text style={styles.text}>{data.famille}</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.soustitre}>Genre:{' '}</Text>
                                    <Text style={styles.text}>{data.genre}</Text>
                                </Text>
                            </View>

                            {/* Vertical spacer */}
                            <View style={styles.verticalSpacer} />

                            <View style={[styles.section, styles.borderBottom]}>
                                <Text style={styles.soustitre}>Description</Text>
                                <Text style={styles.text}>{data.description}</Text>
                            </View>

                            {/* Vertical spacer */}
                            <View style={styles.verticalSpacer} />

                            <View style={[styles.section, styles.borderBottom]}>
                                <Text style={styles.soustitre}>Habitat</Text>
                                <Text style={styles.text}>{data.habitat}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </>
            )}
        </View>
    );
};

export default Info;
