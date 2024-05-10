import { useCallback, useEffect, useState } from 'react';
import { ShowToast } from '../functions/toast';

const useFetchFavorisPlants = (userFavoris) => {
    const [plantImages, setPlantImages] = useState([]);
    const [plantData, setPlantData] = useState([]);
    const [isFavorisPlantsLoading, setIsFavorisPlantsLoading] = useState(false);
    const [dataError, setDataError] = useState(null);

    const endpoint = 'https://apimonremede.jsprod.fr/api/plants';

    const fetchData = useCallback(async () => {
        setIsFavorisPlantsLoading(true);

        try {
            const response = await fetch(endpoint);
            const result = await response.json();

            if (result.length > 0) { // Vérifier si result.length est supérieur à zéro
                // Filtrer les plantes en fonction des IDs dans userFavoris
                const favorisPlants = result.filter((plant) =>
                    userFavoris.includes(plant.id),
                );
                // Extraire les URLs des images des plantes
                const images = favorisPlants.map((plant) =>
                    plant.media.length > 0 ? plant.media[0].original_url : null,
                );
                // Mettre à jour les états
                setPlantImages(images.filter((image) => image)); // Filtrer les valeurs null
                setPlantData(favorisPlants);
            } else {
                // Afficher une notification toast si result.length est égal à zéro
                setTimeout(() => {
                    ShowToast({
                        message: 'Aucune plante trouvée',
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
            setIsFavorisPlantsLoading(false);
        }
    }, [userFavoris]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const dataRefetch = () => {
        fetchData();
    };

    return {
        plantImages,
        plantData,
        isFavorisPlantsLoading,
        dataError,
        dataRefetch,
    };
};

export default useFetchFavorisPlants;
