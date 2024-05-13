import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const LOADING_TIMEOUT = 2500;

const useFetchSymptom = (symptomId) => {
    // États pour stocker les données, l'état de chargement et les erreurs
    const [data, setData] = useState([]); // Stocker les données récupérées
    const [isLoading, setIsLoading] = useState(false); // Indiquer si les données sont en cours de chargement
    const [error, setError] = useState(null); // Stocker les erreurs rencontrées lors du chargement des données

    // URL de l'API pour récupérer les symptômes en fonction de l'identifiant du symptôme
    const endpoint = `https://apimonremede.jsprod.fr/api/symptomes/${symptomId}`;

    // Fonction fetchData pour effectuer une requête et récupérer les données des symptômes
    const fetchData = useCallback(async () => {
        setIsLoading(true); // Définir isLoading à true pour indiquer le début du chargement

        try {
            const response = await axios.get(endpoint); // Effectuer une requête pour récupérer les données
            const result = response.data; // Obtenez les données de la réponse
            setData(result); // Mettre à jour les données avec les données récupérées
        } catch (fetchError) {
            if (fetchError.response && fetchError.response.status === 429) {
                // Attendre pendant 5 secondes avant de retenter la requête en cas d'erreur 403
                const timeout = setTimeout(() => {
                    fetchData(); // Appeler la fonction fetchData pour récupérer les données des symptômes
                }, LOADING_TIMEOUT);
                return () => clearTimeout(timeout);
            } else {
                console.error(fetchError); // Afficher l'erreur dans la console
                setError(fetchError); // Mettre à jour l'état de l'erreur avec l'erreur rencontrée
                const timeout = setTimeout(() => {
                    fetchData(); // Appeler la fonction fetchData pour récupérer les données des symptômes
                }, LOADING_TIMEOUT * 10);
                return () => clearTimeout(timeout);
            }
        } finally {
            setIsLoading(false); // Définir isLoading à false pour indiquer la fin du chargement, quelle que soit l'issue
        }
    }, [endpoint]); // Utiliser useCallback pour éviter les re-render inutiles en fonction des changements de l'endpoint

    // Utiliser useEffect pour effectuer la requête lors du premier rendu ou lorsque symptomId change
    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchData(); // Appeler la fonction fetchData pour récupérer les données des symptômes
        }, LOADING_TIMEOUT * 0.5);
        return () => clearTimeout(timeout);
    }, [symptomId, fetchData]); // Passer symptomId et fetchData comme dépendances de useEffect

    // Fonction refetch pour recharger les données des symptômes
    const refetch = () => {
        fetchData(); // Appeler la fonction fetchData pour recharger les données
    };

    // Retourner les données des symptômes, l'état de chargement, les erreurs et la fonction de rechargement
    return { data, isLoading, error, refetch };
};

export default useFetchSymptom; // Exporter le hook useFetchSymptom
