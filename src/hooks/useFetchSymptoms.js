import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setSymptomsData, setSymptomsLoading } from '../redux/reducer/symptoms';
import axios from 'axios';

const useFetchSymptoms = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [plantsError, setPlantsError] = useState(null);
    const [isSymptomsLoading, setIsSymptomsLoading] = useState(false);

    const dispatch = useDispatch();

    const endpoint = 'https://apimonremede.jsprod.fr/api/symptomes';

    const fetchData = useCallback(async () => {
        setIsSymptomsLoading(true);

        try {
            const response = await axios.get(endpoint);
            const result = response.data;
            setSymptoms(result);
            dispatch(setSymptomsData(result));
            dispatch(setSymptomsLoading(false));
        } catch (error) {
            if (error.response && error.response.status === 403) {
                // Attendre pendant 5 secondes avant de retenter la requête en cas d'erreur 403
                await new Promise(resolve => setTimeout(resolve, 5000));
                fetchData(); // Retenter la requête
            } else {
                setPlantsError(error);
                dispatch(setSymptomsLoading(false));
                console.error(error);
            }
        } finally {
            setIsSymptomsLoading(false);
        }
    }, [dispatch, endpoint]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const symptomsRefetch = () => {
        fetchData();
    };

    return { symptoms, isSymptomsLoading, plantsError, symptomsRefetch };
};

export default useFetchSymptoms;
