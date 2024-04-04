import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import SectionTitle from '../../components/headings/SectionTitle';
import Link from '../../components/links/Link';
import styles from './styles';
import useFetchPlantsSpecials from '../../hooks/useFetchPlantsSpecials';
import PlantGridView from '../../components/cards/PlantGridView';

const HomeBestSellerView = ({ theme }) => {
    // Navigation
    const navigation = useNavigation();

    const { isPlantsLoading, bestSellerPlants, plantsError } = useFetchPlantsSpecials();

    return (
        <>
            {/* Vertical spacer */}
            <View style={styles.verticalSpacer} />

            {/* Section title & link wrapper */}
            <View style={styles.sectionTitleAndLinkWrapper}>
                {/* Section title component */}
                <SectionTitle title="Best seller" />

                {/* Link component */}
                <Link
                    label="Tous voir"
                    onPress={() => navigation.navigate('Grid View Products')}
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
                    {isPlantsLoading ? (
                        <View style={styles.productWrapper}>
                            <ActivityIndicator size="large" color={theme.primary} />
                        </View>
                    ) : (
                        <>
                            {bestSellerPlants.length > 0 && bestSellerPlants.map((plant, index) => (
                                <View key={index} style={styles.productWrapper}>
                                    <PlantGridView
                                        plantImage={
                                            plant.media && plant.media.length > 0
                                                ? { uri: plant.media[0].original_url }
                                                : require('../../assets/images/banners/home/808_x_338.png')
                                        }
                                        plantTitle={plant.name}
                                        onPress={() => console.log('Plante')}
                                    />
                                </View>
                            ))}
                        </>
                    )}
                    {/* Afficher les erreurs */}
                    {plantsError && <Text style={{ color: theme.textHighContrast }}>Error: {plantsError.message}</Text>}
                </ScrollView>
            </View>
        </>
    );
};

export default HomeBestSellerView;
