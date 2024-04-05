import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import SectionTitle from '../../components/headings/SectionTitle';
import Link from '../../components/links/Link';
import { IndependentColors } from '../../config/Colors';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

const HomeCategoriesSection = ({ homeData }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;
    // Navigation
    const navigation = useNavigation();

    const symptomsData = useSelector((state) => state.symptoms.symptomsData);

    // Copier les données de symptomsData dans un nouveau tableau
    const copiedSymptomsData = [...symptomsData];

    // Mélanger le nouveau tableau
    const shuffledSymptomsData = copiedSymptomsData.sort(
        () => Math.random() - 0.5,
    );

    // Prendre les 15 premiers éléments du tableau mélangé
    const randomSymptoms = shuffledSymptomsData.slice(0, 15);

    return (
        <>
            {/* Vertical spacer */}
            <View style={styles.verticalSpacer} />

            {/* Section title & link wrapper */}
            <View style={styles.sectionTitleAndLinkWrapper}>
                {/* Section title component */}
                <SectionTitle title={homeData[0].title} />

                {/* Link component */}
                <Link
                    label={homeData[0].link}
                    onPress={() => navigation.navigate('Grid View Products')}
                />
            </View>

            {/* Vertical spacer */}
            <View style={styles.verticalSpacer} />

            {/* Categories label scrollview wrapper */}
            <View>
                {/* Categories label scrollview */}
                <ScrollView
                    horizontal
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={
                        styles.horizontalScrollViewContentContainerStyle
                    }
                >
                    {randomSymptoms.map((item, index) => {
                        return index === 0 ? (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.categoryLabelWrapper,
                                    { backgroundColor: theme.accent },
                                ]}
                                onPress={() => navigation.navigate('Symptoms')}
                            >
                                <Text
                                    style={[
                                        styles.categoryLabel,
                                        {
                                            color: IndependentColors.white,
                                        },
                                    ]}
                                >
                                    Tous voir
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                key={item.id}
                                style={[
                                    styles.categoryLabelWrapper,
                                    {
                                        backgroundColor: theme.secondary,
                                    },
                                ]}
                                onPress={() =>
                                    navigation.navigate('Plant Stack', {
                                        screen: 'SymptomView',
                                        params: {
                                            symptomId: item.id,
                                            symptomName: item.name,
                                        },
                                    })
                                }
                            >
                                <Text
                                    style={[
                                        styles.categoryLabel,
                                        {
                                            color: theme.textLowContrast,
                                        },
                                    ]}
                                >
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

            </View>
        </>
    );
};

export default HomeCategoriesSection;
