import React from 'react';
import { View } from 'react-native';

import HomeBannerSection1 from '../HomeBannerSection1';
import HomeBannerSection2 from '../HomeBannerSection2';
import HomeBestSellerView from '../HomeBestSellerView';
import HomeCategoriesSection from '../HomeCategories';
import HomeGlobalOutletsView from '../HomeGlobalOutletsView';
import HomeMostPopularView from '../HomeMostPopularView';
import HomeNewArrivalsView from '../HomeNewArrivalsView';
import HomeRecentlyViewedView from '../HomeRecentlyViewedView';

const HomeContent = ({ theme }) => {
    return (
        <View>
            <HomeCategoriesSection theme={theme} />
            <HomeBannerSection1 theme={theme} />
            <HomeMostPopularView theme={theme} />
            <HomeBannerSection1 theme={theme} />
            <HomeBestSellerView theme={theme} />
            <HomeBannerSection2 theme={theme} />
            <HomeNewArrivalsView theme={theme} />
            <HomeBannerSection2 theme={theme} />
            <HomeRecentlyViewedView theme={theme} />
            <HomeGlobalOutletsView theme={theme} />
        </View>
    );
};

export default HomeContent;
