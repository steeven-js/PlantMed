import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSymptomsData, setSymptomsLoading, setSymptomsError } from '../redux/reducer/symptoms';

const useFetchSymptoms = () => {
    const dispatch = useDispatch();
    const symptomsData = useSelector((state) => state.symptoms.symptomsData);
    const isSymptomsLoading = useSelector((state) => state.symptoms.isLoading);
    const symptomsError = useSelector((state) => state.symptoms.error);

    const endpoint = 'https://apimonremede.jsprod.fr/api/symptomes';

    const fetchData = useCallback(async () => {
        dispatch(setSymptomsLoading(true));
        dispatch(setSymptomsError(null));

        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            dispatch(setSymptomsData(result));
        } catch (error) {
            dispatch(setSymptomsError(error.message));
        } finally {
            dispatch(setSymptomsLoading(false));
        }
    }, [dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const symptomsRefetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return { symptomsData, isSymptomsLoading, symptomsError, symptomsRefetch }; // Utilisation du même nom de variable
};

export default useFetchSymptoms;
