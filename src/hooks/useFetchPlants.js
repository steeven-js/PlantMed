import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { setPlantsData, setPlantsLoading } from '../redux/reducer/plants';

const useFetchPlants = () => {
    const [plants, setPlants] = useState([]);
    const [isPlantsLoading, setIsPlantsLoading] = useState(false);
    const [plantsError, setPlantsError] = useState(null);

    const dispatch = useDispatch();

    const endpoint = 'https://apimonremede.jsprod.fr/api/plants';

    const fetchData = useCallback(async () => {
        setIsPlantsLoading(true);
        dispatch(setPlantsLoading(true));

        try {
            const response = await axios.get(endpoint);
            const result = response.data;
            setPlants(result);
            dispatch(setPlantsData(result));
        } catch (error) {
            setPlantsError(error);
            console.error(error);
        } finally {
            setIsPlantsLoading(false);
            dispatch(setPlantsLoading(false));
        }
    }, [dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const plantsRefetch = () => {
        fetchData();
    };

    return { plants, isPlantsLoading, plantsError, plantsRefetch };
};

export default useFetchPlants;
