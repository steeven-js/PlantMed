import React, { useEffect, useState } from 'react';

import useAuthCheck from '../../functions/authCheck';
import useFetchPlants from '../../hooks/useFetchPlants';
import useFetchSymptoms from '../../hooks/useFetchSymptoms';
import HomeDrawer from '../../navigators/drawers/HomeDrawer';
import Splash from '../Splash';

const LOADING_TIMEOUT = 2500;

const LaunchApp = () => {
    const [isStarting, setIsStarting] = useState(true);

    // Utilisation des hooks personnalisés
    const { isSymptomsLoading } = useFetchSymptoms();
    const { isPlantsLoading } = useFetchPlants();
    const { isUserAuthenticated } = useAuthCheck();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsStarting(false);
        }, LOADING_TIMEOUT);

        return () => clearTimeout(timeout);
    }, []);

    // Rendu en fonction de l'état de chargement et de l'authentification de l'utilisateur
    if (isUserAuthenticated) {
        return isStarting || isSymptomsLoading || isPlantsLoading ? (
            <Splash />
        ) : (
            <HomeDrawer />
        );
    } else {
        return isStarting || isSymptomsLoading || isPlantsLoading ? (
            <Splash />
        ) : (
            <HomeDrawer />
        );
    }
};

export default LaunchApp;
