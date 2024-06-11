import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { setBannersData, setBannersLoading, setBannersError } from '../redux/reducer/banners';

const useFetchBanners = () => {
    const [banners, setBannersState] = useState([]);
    const [isBannersLoading, setIsBannersLoading] = useState(false);
    const [bannersError, setBannersErrorState] = useState(null);

    const dispatch = useDispatch();

    const endpoint = 'https://apimonremede.jsprod.fr/api/banners';

    const fetchData = useCallback(async () => {
        setIsBannersLoading(true);
        dispatch(setBannersLoading(true));

        try {
            const response = await axios.get(endpoint);
            const result = response.data;
            setBannersState(result);
            dispatch(setBannersData(result));
        } catch (error) {
            setBannersErrorState(error);
            dispatch(setBannersError(error));
            console.error(error);
        } finally {
            setIsBannersLoading(false);
            dispatch(setBannersLoading(false));
        }
    }, [dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const bannersRefetch = () => {
        fetchData();
    };

    return { banners, isBannersLoading, bannersError, bannersRefetch };
};

export default useFetchBanners;
