// import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import SectionTitle from '../../components/headings/SectionTitle';
import Link from '../../components/links/Link';
import styles from './styles';

const HomeRecentlyViewedView = ({ theme, homeData, recentlyViewedPlants, isLoading, error }) => {
    // Navigation
    // const navigation = useNavigation();

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
                    // onPress={}
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
                    {isLoading ? (
                        <View style={styles.productWrapper}>
                            <ActivityIndicator size="large" color={theme.activityIndicator} />
                        </View>
                    ) : (
                        <>
                            {recentlyViewedPlants.length > 0 && recentlyViewedPlants.map((plant, index) => (
                                <View key={index} style={styles.productWrapper}>
                                    <Text style={{ color: theme.textLowContrast }}>{plant.name}</Text>
                                </View>
                            ))}
                        </>
                    )}
                    {/* Afficher les erreurs */}
                    {error && <Text style={{ color: theme.textHighContrast }}>Error: {error.message}</Text>}
                </ScrollView>
            </View>
        </>
    );
};

export default HomeRecentlyViewedView;
