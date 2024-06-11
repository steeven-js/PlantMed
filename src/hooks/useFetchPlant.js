import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useFetchPlant = (plantId) => {
    const [data, setData] = useState([]); // Données de la plante
    const [isLoading, setIsLoading] = useState(false); // État de chargement
    const [error, setError] = useState(null); // Erreur lors du chargement

    const endpoint = `https://apimonremede.jsprod.fr/api/plants/${plantId}`;

    // Fonction pour récupérer les données de la plante
    const fetchData = useCallback(async () => {
        setIsLoading(true); // Début du chargement

        try {
            const response = await axios.get(endpoint);
            const result = response.data;
            setData(result); // Mise à jour des données de la plante
        } catch (fetchError) {
            setError(fetchError); // Gestion des erreurs
            console.error(fetchError);
        } finally {
            setIsLoading(false); // Fin du chargement, que ce soit réussi ou non
        }
    }, [endpoint]);

    // Utilisation de useEffect pour exécuter fetchData lorsque plantId ou fetchData changent
    useEffect(() => {
        fetchData();
    }, [plantId, fetchData]);

    // Fonction pour recharger les données de la plante
    const refetch = () => {
        fetchData();
    };

    return { data, isLoading, error, refetch }; // Retourne les données de la plante, l'état de chargement, l'erreur et la fonction de rechargement
};

export default useFetchPlant;
