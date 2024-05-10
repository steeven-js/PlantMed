import { useCallback, useEffect, useState } from 'react';
import { ShowToast } from '../functions/toast';

const useFetchFavorisSymptoms = (userFavoris) => {
    const [symptomImages, setSymptomImages] = useState([]);
    const [symptomData, setSymptomData] = useState([]);
    const [isFavorisSymptomsLoading, setIsFavorisSymptomsLoading] =
        useState(false);
    const [dataError, setDataError] = useState(null);

    const endpoint = 'https://apimonremede.jsprod.fr/api/symptomes';

    const fetchData = useCallback(async () => {
        setIsFavorisSymptomsLoading(true);

        try {
            const response = await fetch(endpoint);
            const result = await response.json();

            if (result.length > 0) { // Vérifier si result.length est supérieur à zéro
                // Filtrer les symptômes en fonction des IDs dans userFavoris
                const favorisSymptoms = result.filter((symptom) =>
                    userFavoris.includes(symptom.id),
                );

                // Extraire les URLs des images des symptômes
                const images = favorisSymptoms
                    .map((symptom) => {
                        const firstMedia =
                            symptom.media.length > 0 ? symptom.media[0] : null;
                        return firstMedia ? firstMedia.original_url : null;
                    })
                    .filter((image) => image);

                // Mettre à jour les états
                setSymptomImages(images);
                setSymptomData(favorisSymptoms);
            } else {
                // Afficher une notification toast si result.length est égal à zéro après un délai de 3 secondes
                setTimeout(() => {
                    ShowToast({
                        message: 'Aucun symptôme trouvé',
                        type: 'warning',
                        position: 'top',
                        duration: 3000,
                    });
                }, 3000); // Attendre 3 secondes avant d'afficher le toast
            }
        } catch (error) {
            setDataError(error);
            console.error(error);
        } finally {
            setIsFavorisSymptomsLoading(false);
        }
    }, [userFavoris]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const dataRefetch = () => {
        fetchData();
    };

    return {
        symptomImages,
        symptomData,
        isFavorisSymptomsLoading,
        dataError,
        dataRefetch,
    };
};

export default useFetchFavorisSymptoms;
