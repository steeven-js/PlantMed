import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setSymptomsData, setSymptomsLoading } from '../redux/reducer/symptoms';

const useFetchSymptoms = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [plantsError, setPlantsError] = useState(null);
    const [isSymptomsLoading, setIsSymptomsLoading] = useState(false);

    const dispatch = useDispatch();

    const endpoint = 'https://apimonremede.jsprod.fr/api/symptomes';

    const fetchData = useCallback(async () => {
        setIsSymptomsLoading(true);

        try {
            const response = await fetch(endpoint);
            const result = await response.json();
            setSymptoms(result);
            dispatch(setSymptomsData(result));
            dispatch(setSymptomsLoading(false));
        } catch (error) {
            setPlantsError(error);
            dispatch(setSymptomsLoading(false));
            console.error(error);
        } finally {
            setIsSymptomsLoading(false);
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