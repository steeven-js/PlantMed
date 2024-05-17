import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import SectionTitle from '../../../components/headings/SectionTitle';
import Link from '../../../components/links/Link';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';
import GridViewSymptom from '../../../components/cards/GridViewSymptom';

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
                // onPress={navigateAndPerformAction1}
                />
            </View>

            {/* Horizontal scroll view */}
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={
                        styles.horizontalScrollViewContentContainerStyle
                    }
                >
                    {randomSymptoms.length > 0 && randomSymptoms.map((item, index) => (
                        <View key={index} style={styles.productWrapper} theme={theme}>
                            <GridViewSymptom
                                symptomImage={
                                    item.media && item.media.length > 0
                                        ? { uri: item.media[0].original_url }
                                        : require('../../../assets/images/banners/home/808_x_338.png')
                                }
                                symptomTitle={item.name}
                                onPress={() => navigation.navigate('SymptomView', { symptomId: item.id })}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>
    );
};

export default HomeCategoriesSection;
