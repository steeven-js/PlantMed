import React from 'react';
import { View } from 'react-native';

import HomeCategoriesSection from './HomeCategories';
import HomeMostPopularView from './HomeMostPopularView';
import HomeRecentlyViewedView from './HomeRecentlyViewedView';
import { HomeData } from '../../data/AppData';
import HomeBannerSection2 from './HomeBannerSection2';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectMostPopularPlants, selectRecentlyViewedPlants } from '../../redux/reducer/selectors';

const HomeContent = ({ theme }) => {
    const homeData = HomeData;

    const mostPopularPlants = useSelector(selectMostPopularPlants);
    const recentlyViewedPlants = useSelector(selectRecentlyViewedPlants);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    return (
        <View>
            <HomeBannerSection2 theme={theme} />
            <HomeCategoriesSection theme={theme} homeData={homeData} />
            <HomeBannerSection2 theme={theme} />
            <HomeMostPopularView
                theme={theme}
                homeData={homeData}
                mostPopularPlants={mostPopularPlants}
                isLoading={isLoading}
                error={error}
            />
            {/* <HomeBannerSection2 theme={theme} /> */}
            {/* <HomeBestSellerView theme={theme} homeData={homeData} /> */}
            <HomeBannerSection2 theme={theme} />
            {/* <HomeNewArrivalsView theme={theme} homeData={homeData} /> */}
            {/* <HomeBannerSection2 theme={theme} /> */}
            <HomeRecentlyViewedView
                theme={theme}
                homeData={homeData}
                recentlyViewedPlants={recentlyViewedPlants}
                isLoading={isLoading}
                error={error}
            />
            {/* <HomeGlobalOutletsView theme={theme} homeData={homeData} /> */}
        </View>
    );
};

export default HomeContent;
