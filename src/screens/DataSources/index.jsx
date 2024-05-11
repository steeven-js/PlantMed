import React, { useContext } from 'react';
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import { sourcesData, updateDate } from '../../data/SourcesData';
import useFetchPlants from '../../hooks/useFetchPlants';
import { SvgXml } from 'react-native-svg';
import ic_disc_dark_green from '../../assets/icons/svg/ic_disc_dark_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';
import useFetchSymptoms from '../../hooks/useFetchSymptoms';

const Policy = () => {
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? lightTheme : darkTheme;
    const { plants } = useFetchPlants();
    const { symptoms } = useFetchSymptoms();

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {/* Scroll view */}
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={
                    styles.scrollViewContentContainerStyle
                }
            >
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
                        <View style={styles.sourcesTitleWrapper}>
                            <SvgXml
                                xml={ic_disc_dark_green}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                            <Text style={[styles.title, { color: theme.textHighContrast }]}>
                                {item.title}
                            </Text>
                        </View>
                        {item.sources.map((source, sourceIndex) => (
                            <Text key={sourceIndex} style={[styles.source, { color: theme.textLowContrast }]}>
                                {source}
                            </Text>
                        ))}

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />
                    </View>
                ))}

                <View style={styles.sourcesTitleWrapper}>
                    <SvgXml
                        xml={ic_disc_dark_green}
                        width={STANDARD_VECTOR_ICON_SIZE}
                        height={STANDARD_VECTOR_ICON_SIZE}
                    />
                    <Text style={[styles.lastUpdateDate, { color: theme.accent }]}>
                        Plantes médicinales
                    </Text>
                </View>

                {plants && plants.map((plant, plantIndex) => (
                    plant.source && (
                        <View key={plantIndex}>
                            <TouchableOpacity onPress={() => Linking.openURL(plant.source)}>
                                <Text style={[styles.title, { color: theme.textLowContrast }]}>
                                    {plant.name}
                                </Text>
                            </TouchableOpacity>

                            {/* Vertical spacer */}
                            <View style={styles.verticalSpacer} />
                        </View>
                    )
                ))}

                <View style={styles.sourcesTitleWrapper}>
                    <SvgXml
                        xml={ic_disc_dark_green}
                        width={STANDARD_VECTOR_ICON_SIZE}
                        height={STANDARD_VECTOR_ICON_SIZE}
                    />
                    <Text style={[styles.lastUpdateDate, { color: theme.accent }]}>
                        Symptômes
                    </Text>
                </View>

                {symptoms && symptoms.map((symptom, symptomIndex) => (
                    symptom.source && (
                        <View key={symptomIndex}>

                            <TouchableOpacity onPress={() => Linking.openURL(symptom.source)}>
                                <Text style={[styles.title, { color: theme.textLowContrast }]}>
                                    {symptom.name}
                                </Text>
                            </TouchableOpacity>

                            {/* Vertical spacer */}
                            <View style={styles.verticalSpacer} />
                        </View>
                    )
                ))}

            </ScrollView>
        </View>
    );
};

export default Policy;
