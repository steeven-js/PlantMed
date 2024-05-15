import { useCallback, useEffect, useState } from 'react';

const useFetchPlant = (plantId) => {
    // États pour stocker les données, l'état de chargement et les erreurs
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Point de terminaison pour récupérer les données de la plante
    const endpoint = `https://apimonremede.jsprod.fr/api/plants/${plantId}`;

    // Fonction pour récupérer les données de la plante
    const fetchData = useCallback(async () => {
        setIsLoading(true); // Début du chargement
        setError(null); // Réinitialiser l'erreur

        try {
            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            setData(result); // Mise à jour des données de la plante
        } catch (fetchError) {
            setError(fetchError.message); // Gestion des erreurs
        } finally {
            setIsLoading(false); // Fin du chargement
        }
    }, [endpoint]);

    // Utilisation de useEffect pour exécuter fetchData lorsque plantId ou fetchData changent
    useEffect(() => {
        let isMounted = true;

        const fetchDataSafe = async () => {
            await fetchData();
            if (!isMounted) {return;}
        };

        fetchDataSafe();

        return () => {
            isMounted = false;
        };
    }, [plantId, fetchData]);

    // Fonction pour recharger les données de la plante
    const refetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return { data, isLoading, error, refetch }; // Retourne les données de la plante, l'état de chargement, l'erreur et la fonction de rechargement
};

export default useFetchPlant;
