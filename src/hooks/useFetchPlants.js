import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlantsData, setPlantsLoading, setPlantsError } from '../redux/reducer/plants';

const useFetchPlants = () => {
    const dispatch = useDispatch();
    const plants = useSelector((state) => state.plants.plantsData);
    const isPlantsLoading = useSelector((state) => state.plants.isLoading);
    const plantsError = useSelector((state) => state.plants.error);

    const endpoint = 'https://apimonremede.jsprod.fr/api/plants';

    const fetchData = useCallback(async () => {
        dispatch(setPlantsLoading(true));
        dispatch(setPlantsError(null));

        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            dispatch(setPlantsData(result));
        } catch (error) {
            dispatch(setPlantsError(error.message));
        } finally {
            dispatch(setPlantsLoading(false));
        }
    }, [dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const plantsRefetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return { plants, isPlantsLoading, plantsError, plantsRefetch };
};

export default useFetchPlants;
