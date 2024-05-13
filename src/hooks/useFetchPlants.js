import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setPlantsData, setPlantsLoading } from '../redux/reducer/plants';
import axios from 'axios';

const useFetchPlants = () => {
    const [plants, setPlants] = useState([]);
    const [isPlantsLoading, setIsPlantsLoading] = useState(false);
    const [plantsError, setPlantsError] = useState(null);

    const dispatch = useDispatch();

    const endpoint = 'https://apimonremede.jsprod.fr/api/plants';

    const fetchData = useCallback(async () => {
        setIsPlantsLoading(true);

        try {
            const response = await axios.get(endpoint);
            const result = response.data;
            setPlants(result);
            dispatch(setPlantsData(result));
            dispatch(setPlantsLoading(false));
        } catch (error) {
            if (error.response && error.response.status === 403) {
                // Set error to null to clear any previous errors
                setPlantsError(null);
                // Wait for 5 seconds (for example) before retrying the request
                setTimeout(() => {
                    fetchData();
                }, 5000); // 5000 milliseconds = 5 seconds
            } else {
                setPlantsError("Une erreur s'est produite lors du chargement des données.");
                console.error(error);
                dispatch(setPlantsLoading(false));
            }
        } finally {
            setIsPlantsLoading(false);
        }
    }, [dispatch, endpoint]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const plantsRefetch = () => {
        fetchData();
    };

    return { plants, isPlantsLoading, plantsError, plantsRefetch };
};

export default useFetchPlants;
