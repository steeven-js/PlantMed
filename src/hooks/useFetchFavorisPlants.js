import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
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
            const response = await axios.get(endpoint);
            const result = response.data;

            // Attendre que le résultat soit disponible
            if (result) {
                const favorisPlants = result.filter((plant) =>
                    userFavoris.includes(plant.id),
                );

                const images = favorisPlants.map((plant) =>
                    plant.media.length > 0 ? plant.media[0].original_url : null,
                );

                setPlantImages(images.filter((image) => image));
                setPlantData(favorisPlants);
            } else {
                // Afficher une notification toast si le résultat est vide
                ShowToast({
                    message: 'Aucune plante trouvée',
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
            setIsFavorisPlantsLoading(false);
        }
    }, [userFavoris]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        plantImages,
        plantData,
        isFavorisPlantsLoading,
        dataError,
    };
};

export default useFetchFavorisPlants;
