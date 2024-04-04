import { ScrollView, View } from 'react-native';

import OutletCard from '../../components/cards/OutletCard';
import SectionTitle from '../../components/headings/SectionTitle';
import Link from '../../components/links/Link';
import GlobalOutletsData from '../../data/GlobalOutletsData';
import styles from './styles';

const HomeGlobalOutletsView = () => {
    return (
        <>
            {/* Section title & link wrapper */}
            <View style={styles.sectionTitleAndLinkWrapper}>
                {/* Section title component */}
                <SectionTitle title="Global outlets" />

                {/* Link component */}
                <Link label="Tous voir" />
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
                    }
                >
                    {GlobalOutletsData.map((outlet, index) => (
                        <OutletCard
                            key={index}
                            outletImage={outlet.outletImage}
                            outletName={outlet.outletName}
                            rating={outlet.rating}
                            priceRange={outlet.priceRange}
                        />
                    ))}
                </ScrollView>
            </View>
        </>
    );
};

export default HomeGlobalOutletsView;
