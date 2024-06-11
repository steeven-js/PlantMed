const userFetchSearch = (search, plantData, symptomsData) => {
    try {
        let plantsSearchResultData = [];
        let symptomsSearchResultData = [];
        let imagesPlantsURL = [];
        let imagesSymptomsURL = [];

        if (plantData && symptomsData) {
            // Filtrer les données des plantes
            plantsSearchResultData = plantData.filter((plant) =>
                plant.name.toLowerCase().includes(search.toLowerCase()),
            );

            // Filtrer les données des symptômes
            symptomsSearchResultData = symptomsData.filter((symptom) =>
                symptom.name.toLowerCase().includes(search.toLowerCase()),
            );

            // Obtenir les URL des images des plantes
            imagesPlantsURL = plantsSearchResultData.map((plant) =>
                plant.media.length > 0 ? plant.media[0].original_url : null,
            );

            // Obtenir les URL des images des symptômes
            imagesSymptomsURL = symptomsSearchResultData.map((symptom) =>
                symptom.media.length > 0 ? symptom.media[0].original_url : null,
            );
        }

        // Retourner les résultats de la recherche et les URL des images
        return {
            plantsSearchResultData,
            symptomsSearchResultData,
            imagesPlantsURL,
            imagesSymptomsURL,
            searchError: '',
        };
    } catch (error) {
        // Gérer les erreurs de recherche
        console.error('Erreur lors de la recherche :', error);
        return {
            plantsSearchResultData: [],
            symptomsSearchResultData: [],
            imagesPlantsURL: [],
            imagesSymptomsURL: [],
            searchError: 'Une erreur est survenue lors de la recherche.',
        };
    }
};

export default userFetchSearch;
