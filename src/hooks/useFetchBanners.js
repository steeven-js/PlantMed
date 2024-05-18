import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setBannersLoading } from '../redux/reducer/banners';

const useFetchBanners = () => {
    const [banners, setBanners] = useState([]);
    const [isBannersLoading, setIsBannersLoading] = useState(false);
    const [bannersError, setBannersError] = useState(null);

    const dispatch = useDispatch();

    const endpoint = 'https://apimonremede.jsprod.fr/api/banners';

    const fetchData = useCallback(async () => {
        setIsBannersLoading(true);

        try {
            const response = await axios.get(endpoint);
            const result = response.data;
            setBanners(result);
            dispatch(setBanners(result));
        } catch (error) {
            setBannersError(error);
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
