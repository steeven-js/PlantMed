import { useCallback, useEffect, useState } from 'react';

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
