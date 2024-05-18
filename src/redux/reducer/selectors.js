import { createSelector } from 'reselect';

// Input selector to get the plants data from the state
const selectPlantsData = (state) => state.plants.plantsData;

// Memoized selector to get the most popular plants
const selectMostPopularPlants = createSelector(
    [selectPlantsData],
    (plantsData) => plantsData.filter(plant => plant.mostPopular === 1)
);

// Memoized selector to get the recently viewed plants
const selectRecentlyViewedPlants = createSelector(
    [selectPlantsData],
    (plantsData) => plantsData.filter(plant => plant.recentlyViewed === 1)
);

// Input selector to get the banners data from the state
const selectBanners = (state) => state.banners.bannersData;

// Input selector to get the loading status from the plants state
const selectIsLoading = (state) => state.plants.isLoading;

// Input selector to get the error status from the plants state
const selectError = (state) => state.plants.error;

export {
    selectMostPopularPlants,
    selectRecentlyViewedPlants,
    selectIsLoading,
    selectBanners,
    selectError,
};
