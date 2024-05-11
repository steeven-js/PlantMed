import React, { useContext } from 'react';
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import { sourcesData, updateDate } from '../../data/SourcesData';
import useFetchPlants from '../../hooks/useFetchPlants';

const Policy = () => {
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? lightTheme : darkTheme;
    const { plants } = useFetchPlants();

    return (
        <ScrollView style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            <View>
                <Text style={[styles.lastUpdateDate, { color: theme.accent }]}>
                    {updateDate}
                </Text>
            </View>

            {/* Vertical spacer */}
            <View style={styles.verticalSpacer} />

            {/* Render each title and its sources */}
            {sourcesData.map((item, index) => (
                <View key={index}>
                    <Text style={[styles.title, { color: theme.textHighContrast }]}>
                        {item.title}
                    </Text>
                    {item.sources.map((source, sourceIndex) => (
                        <Text key={sourceIndex} style={[styles.source, { color: theme.textHighContrast }]}>
                            {source}
                        </Text>
                    ))}

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />
                </View>
            ))}

            {plants && plants.map((plant, plantIndex) => (
                plant.source && (
                    <View key={plantIndex}>
                        <Text style={[styles.title, { color: theme.textHighContrast }]}>
                            {plant.name}
                        </Text>
                        <TouchableOpacity onPress={() => Linking.openURL(plant.source)}>
                            <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
                                {plant.source}
                            </Text>
                        </TouchableOpacity>

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />
                    </View>
                )
            ))}

        </ScrollView>
    );
};

export default Policy;
