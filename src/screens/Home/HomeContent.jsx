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
import HomeData from '../../data/HomeData';

const HomeContent = ({ theme }) => {
    const homeData = HomeData;
    return (
        <View>
            <HomeCategoriesSection theme={theme} homeData={homeData} />
            <HomeBannerSection1 theme={theme} />
            <HomeMostPopularView theme={theme} homeData={homeData} />
            <HomeBannerSection1 theme={theme} />
            <HomeBestSellerView theme={theme} homeData={homeData} />
            <HomeBannerSection2 theme={theme} />
            <HomeNewArrivalsView theme={theme} homeData={homeData} />
            <HomeBannerSection2 theme={theme} />
            <HomeRecentlyViewedView theme={theme} homeData={homeData} />
            <HomeGlobalOutletsView theme={theme} homeData={homeData} />
        </View>
    );
};

export default HomeContent;
