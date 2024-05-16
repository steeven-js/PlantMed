import styles from './styles';
import { useContext, useEffect } from 'react';
import Link from '../../components/links/Link';
import * as Animatable from 'react-native-animatable';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import SectionTitle from '../../components/headings/SectionTitle';
import GridViewSymptoms from '../../components/cards/GridViewSymptom';
import GridViewPlants from '../../components/cards/GridViewPlant';
import { View, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';

const PlantMed = ({ navigation }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    const symptomsData = useSelector((state) => state.symptoms.symptomsData);

    const plantsData = useSelector((state) => state.plants.plantsData);

    useEffect(() => {
    }, [symptomsData, plantsData]);

    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            <Animatable.View animation="fadeInUp" delay={100}>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false}>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Banner 3 */}
                    <View style={styles.fullWidthBannerImageWrapper}>
                        <Image
                            source={require('../../assets/images/banners/home/808_x_338.png')}
                            style={styles.bannerImage}
                        />
                    </View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Section title & link wrapper */}
                    <View style={styles.sectionTitleAndLinkWrapper}>
                        {/* Section title component */}
                        <SectionTitle title="Usage thérapeutique" />

                        {/* Link component */}
                        <Link
                            label="Tous voir"
                            onPress={() => navigation.navigate('SymptomsList')}
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
                            }>
                            {symptomsData.map((symptom, index) => (
                                <View key={index} style={styles.productWrapper}>
                                    <GridViewSymptoms
                                        symptomImage={
                                            symptom.media && symptom.media.length > 0
                                                ? { uri: symptom.media[0].original_url }
                                                : null
                                        }
                                        symptomTitle={symptom.name}
                                        onPress={() => navigation.navigate('SymptomView', { symptomId: symptom.id })}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Banner 3 */}
                    <View style={styles.fullWidthBannerImageWrapper}>
                        <Image
                            source={require('../../assets/images/banners/home/808_x_338.png')}
                            style={styles.bannerImage}
                        />
                    </View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                    {/* Section title & link wrapper */}
                    <View style={styles.sectionTitleAndLinkWrapper}>
                        {/* Section title component */}
                        <SectionTitle title="Plantes médicinales" />

                        {/* Link component */}
                        <Link
                            label="Tout voir"
                            onPress={() => navigation.navigate('PlantsList')}
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
                            }>
                            {plantsData.map((plant, index) => (
                                <View key={index} style={styles.productWrapper}>
                                    <GridViewPlants
                                        plantImage={
                                            plant.media && plant.media.length > 0
                                            ? { uri: plant.media[0].original_url }
                                            : null
                                        }
                                        plantTitle={plant.name}
                                        onPress={() => navigation.navigate('PlantView', { plantId: plant.id })}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Vertical spacer */}
                    <View style={styles.verticalSpacer} />

                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default PlantMed;
