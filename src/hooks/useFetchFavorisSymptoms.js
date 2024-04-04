import { useCallback, useEffect, useState } from 'react';

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

    const dataRefetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return {
        symptomImages,
        symptomData,
        isFavorisSymptomsLoading,
        dataError,
        dataRefetch,
    };
};

export default useFetchFavorisSymptoms;
