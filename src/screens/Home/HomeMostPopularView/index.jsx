import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';

import SectionTitle from '../../../components/headings/SectionTitle';
import Link from '../../../components/links/Link';
import styles from './styles';
import GridViewPlant from '../../../components/cards/GridViewPlant';

const HomeMostPopularView = ({ theme, homeData, mostPopularPlants, isLoading, error }) => {
    // Navigation
    const navigation = useNavigation();

    return (
        <>
            {/* Vertical spacer */}
            <View style={styles.verticalSpacer} />

            {/* Section title & link wrapper */}
            <View style={styles.sectionTitleAndLinkWrapper}>
                {/* Section title component */}
                <SectionTitle title={homeData[1].title} />

                {/* Link component */}
                <Link
                    label={homeData[1].link}
                // onPress={navigateAndPerformAction1}
                />
            </View>

            {/* Vertical spacer */}
            <View style={styles.verticalSpacer} />

            {/* Horizontal scroll view */}
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={
                        styles.horizontalScrollViewContentContainerStyle
                    }>
                    {mostPopularPlants.map((item, index) => (
                        <View key={index} style={styles.productWrapper}>
                            <GridViewPlant
                                plantImage={
                                    item.media && item.media.length > 0
                                        ? { uri: item.media[0].original_url }
                                        : null
                                }
                                plantTitle={item.name}
                                onPress={() => navigation.navigate('PlantMed Stack', { screen: 'PlantView', params: { plantId: item.id } })}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>
    );
};

export default HomeMostPopularView;
