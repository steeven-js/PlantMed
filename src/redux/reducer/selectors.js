import { createSelector } from 'reselect';

// Input selector to get the plants data
const selectPlantsData = (state) => state.plants.plantsData;

// Memoized selector to get most popular plants
const selectMostPopularPlants = createSelector(
    [selectPlantsData],
    (plantsData) => plantsData.filter(plant => plant.mostPopular === 1)
);

// Memoized selector to get recently viewed plants
const selectRecentlyViewedPlants = createSelector(
    [selectPlantsData],
    (plantsData) => plantsData.filter(plant => plant.recentlyViewed === 1)
);

// Selector to get isLoading
const selectIsLoading = (state) => state.plants.isLoading;

// Selector to get error
const selectError = (state) => state.plants.error;

export {
    selectMostPopularPlants,
    selectRecentlyViewedPlants,
    selectIsLoading,
    selectError,
};
