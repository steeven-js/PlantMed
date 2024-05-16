import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { ShowToast } from '../functions/toast';

const useFetchFavorisSymptoms = (userFavoris) => {
    const [symptomImages, setSymptomImages] = useState([]);
    const [symptomData, setSymptomData] = useState([]);
    const [isFavorisSymptomsLoading, setIsFavorisSymptomsLoading] = useState(false);
    const [dataError, setDataError] = useState(null);

    const endpoint = 'https://apimonremede.jsprod.fr/api/symptomes';

    const fetchData = useCallback(async () => {
        setIsFavorisSymptomsLoading(true);

        try {
            const response = await axios.get(endpoint);
            const result = response.data;

            // Attendre que le résultat soit disponible
            if (result) {
                const favorisSymptoms = result.filter((symptom) =>
                    userFavoris.includes(symptom.id),
                );

                // Extraire les URLs des images des symptômes
                const images = favorisSymptoms.map((symptom) =>
                    symptom.media.length > 0 ? symptom.media[0].original_url : null,
                );

                // Mettre à jour les états
                setSymptomImages(images.filter((image) => image)); // Filtrer les valeurs null
                setSymptomData(favorisSymptoms);
            } else {
                // Afficher une notification toast si le résultat est vide
                ShowToast({
                    message: 'Aucun symptôme trouvé',
                    type: 'warning',
                    position: 'top',
                    duration: 3000,
                });
            }
        } catch (error) {
            setDataError(error);
            console.error(error);
            ShowToast({
                message: 'Erreur lors du chargement des données',
                type: 'danger',
                position: 'top',
                duration: 3000,
            });
        } finally {
            setIsFavorisSymptomsLoading(false);
        }
    }, [userFavoris]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        symptomImages,
        symptomData,
        isFavorisSymptomsLoading,
        dataError,
    };
};

export default useFetchFavorisSymptoms;
