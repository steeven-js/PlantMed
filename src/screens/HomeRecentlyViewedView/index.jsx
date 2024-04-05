import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import SectionTitle from '../../components/headings/SectionTitle';
import Link from '../../components/links/Link';
import styles from './styles';
import useFetchPlantsSpecials from '../../hooks/useFetchPlantsSpecials';
import PlantGridView from '../../components/cards/PlantGridView';

const HomeRecentlyViewedView = ({ theme, homeData }) => {
    // Navigation
    const navigation = useNavigation();

    const { isPlantsLoading, recentlyViewedPlants, plantsError } = useFetchPlantsSpecials();

    return (
        <>
            {/* Vertical spacer */}
            <View style={styles.verticalSpacer} />

            {/* Section title & link wrapper */}
            <View style={styles.sectionTitleAndLinkWrapper}>
                {/* Section title component */}
                <SectionTitle title={homeData[4].title} />

                {/* Link component */}
                <Link
                    label={homeData[4].link}
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
                            <ActivityIndicator size="large" color={theme.activityIndicator} />
                        </View>
                    ) : (
                        <>
                            {recentlyViewedPlants.length > 0 && recentlyViewedPlants.map((plant, index) => (
                                <View key={index} style={styles.productWrapper}>
                                    <PlantGridView
                                        plantImage={
                                            plant.media && plant.media.length > 0
                                                ? { uri: plant.media[0].original_url }
                                                : require('../../assets/images/banners/home/808_x_338.png')
                                        }
                                        plantTitle={plant.name}
                                        onPress={() => navigation.navigate('Plant Stack', {screen: 'PlantView', params: {plantId: plant.id, plantName: plant.name}})}
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

export default HomeRecentlyViewedView;
