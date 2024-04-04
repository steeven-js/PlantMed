import { useCallback, useEffect, useState } from 'react';

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
            const response = await fetch(endpoint); // Effectuer une requête pour récupérer les données
            const result = await response.json(); // Convertir la réponse en JSON
            setData(result); // Mettre à jour les données avec les données récupérées
        } catch (fetchError) {
            setError(fetchError); // Enregistrer l'erreur en cas d'échec de la requête
            console.error(fetchError); // Afficher l'erreur dans la console
        } finally {
            setIsLoading(false); // Définir isLoading à false pour indiquer la fin du chargement, quelle que soit l'issue
        }
    }, [endpoint]); // Utiliser useCallback pour éviter les re-render inutiles en fonction des changements de l'endpoint

    // Utiliser useEffect pour effectuer la requête lors du premier rendu ou lorsque symptomId change
    useEffect(() => {
        fetchData(); // Appeler la fonction fetchData pour récupérer les données des symptômes
    }, [symptomId, fetchData]); // Passer symptomId et fetchData comme dépendances de useEffect

    // Fonction refetch pour recharger les données des symptômes
    const refetch = () => {
        fetchData(); // Appeler la fonction fetchData pour recharger les données
    };

    // Retourner les données des symptômes, l'état de chargement, les erreurs et la fonction de rechargement
    return { data, isLoading, error, refetch };
};

export default useFetchSymptom; // Exporter le hook useFetchSymptom
