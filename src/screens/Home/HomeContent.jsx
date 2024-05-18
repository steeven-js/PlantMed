import React from 'react';
import { View } from 'react-native';

import HomeCategoriesSection from './HomeCategories';
import HomeMostPopularView from './HomeMostPopularView';
import HomeRecentlyViewedView from './HomeRecentlyViewedView';
import { HomeData } from '../../data/AppData';
import { useSelector } from 'react-redux';
import HomeBannerSection1 from './HomeBannerSection1';
import HomeBannerSection2 from './HomeBannerSection2';
import HomeBannerSection3 from './HomeBannerSection3';
import { selectBanners, selectError, selectIsLoading, selectMostPopularPlants, selectRecentlyViewedPlants } from '../../redux/reducer/selectors';

const HomeContent = ({ theme }) => {
    const homeData = HomeData;

    const mostPopularPlants = useSelector(selectMostPopularPlants);
    const recentlyViewedPlants = useSelector(selectRecentlyViewedPlants);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    // Sélectionner les bannières depuis le state Redux
    const banners = useSelector(selectBanners);

    // Extraire la première bannière s'il existe
    const banner1 = banners && banners.length > 0 ? banners[0].media[0].original_url : null;
    const banner2 = banners && banners.length > 0 ? banners[1].media[0].original_url : null;
    const banner3 = banners && banners.length > 0 ? banners[2].media[0].original_url : null;

    console.log('banner1:', banner1);
    console.log('banner2:', banner2);
    console.log('banner3:', banner3);

    return (
        <View>
            <HomeBannerSection1 theme={theme} banner={banner1} />
            <HomeCategoriesSection theme={theme} homeData={homeData} />
            <HomeBannerSection2 theme={theme} banner={banner2} />
            <HomeMostPopularView
                theme={theme}
                homeData={homeData}
                mostPopularPlants={mostPopularPlants}
                isLoading={isLoading}
                error={error}
            />
            <HomeBannerSection3 theme={theme} banner={banner3} />
            <HomeRecentlyViewedView
                theme={theme}
                homeData={homeData}
                recentlyViewedPlants={recentlyViewedPlants}
                isLoading={isLoading}
                error={error}
            />
        </View>
    );
};

export default HomeContent;
