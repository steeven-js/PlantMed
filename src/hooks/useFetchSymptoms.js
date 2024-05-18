import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { setSymptomsData, setSymptomsLoading } from '../redux/reducer/symptoms';

const useFetchSymptoms = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [plantsError, setPlantsError] = useState(null);
    const [isSymptomsLoading, setIsSymptomsLoading] = useState(false);

    const dispatch = useDispatch();

    const endpoint = 'https://apimonremede.jsprod.fr/api/symptomes';

    const fetchData = useCallback(async () => {
        setIsSymptomsLoading(true);
        dispatch(setSymptomsLoading(true));

        try {
            const response = await axios.get(endpoint);
            const result = response.data;
            setSymptoms(result);
            dispatch(setSymptomsData(result));
        } catch (error) {
            setPlantsError(error);
            console.error(error);
        } finally {
            setIsSymptomsLoading(false);
            dispatch(setSymptomsLoading(false));
        }
    }, [dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const symptomsRefetch = () => {
        fetchData();
    };

    return { symptoms, isSymptomsLoading, plantsError, symptomsRefetch };
};

export default useFetchSymptoms;
