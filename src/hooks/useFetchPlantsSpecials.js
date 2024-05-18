import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useFetchPlantsSpecials = () => {
    const [mostPopularPlants, setMostPopularPlants] = useState([]);
    const [bestSellerPlants, setBestSellerPlants] = useState([]);
    const [newArrivalsPlants, setNewArrivalsPlants] = useState([]);
    const [recentlyViewedPlants, setRecentlyViewedPlants] = useState([]);
    const [isPlantsLoading, setIsPlantsLoading] = useState(false);
    const [plantsError, setPlantsError] = useState(null);

    const endpoint = 'https://apimonremede.jsprod.fr/api/plants';

    const fetchData = useCallback(async () => {
        setIsPlantsLoading(true);

        try {
            const response = await axios.get(endpoint);
            const data = response.data;

            const mostPopularData = data.filter(plant => plant.mostPopular === 1);
            setMostPopularPlants(mostPopularData);

            const bestSellerData = data.filter(plant => plant.bestSeller === 1);
            setBestSellerPlants(bestSellerData);

            const newArrivalsData = data.filter(plant => plant.newArrivals === 1);
            setNewArrivalsPlants(newArrivalsData);

            const recentlyViewedData = data.filter(plant => plant.recentlyViewed === 1);
            setRecentlyViewedPlants(recentlyViewedData);
        } catch (error) {
            setPlantsError(error);
        } finally {
            setIsPlantsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const plantsRefetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return { mostPopularPlants, bestSellerPlants, newArrivalsPlants, recentlyViewedPlants, isPlantsLoading, plantsError, plantsRefetch };
};

export default useFetchPlantsSpecials;
