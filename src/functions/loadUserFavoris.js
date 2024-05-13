import axios from 'axios';
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';

export const useUserPlantsFavoris = (userId) => {
    const [userFavoris, setUserFavoris] = useState([]);
    const [plantsData, setPlantsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const documentSnapshot = await firestore()
                    .collection('userFavoris')
                    .doc(userId)
                    .get();

                const userFavorisData = documentSnapshot.data();
                if (userFavorisData && userFavorisData.plantIds) {
                    const userPlantIds = userFavorisData.plantIds.map(
                        (item) => item.plantId,
                    );
                    setUserFavoris(userPlantIds);
                    const fetchedPlantsData = await Promise.all(userPlantIds.map(async (plantId) => {
                        try {
                            const response = await axios.get(`https://apimonremede.jsprod.fr/api/plants/${plantId}`);
                            return {
                                id: plantId,
                                name: response.data.name,
                                image: response.data.media && response.data.media.length > 0 ? response.data.media[0].original_url : null,
                            };
                        } catch (error) {
                            // console.error('Error fetching plant data:', error);
                            return null;
                        }
                    }));
                    setPlantsData(fetchedPlantsData.filter(data => data !== null));
                }
            } catch (error) {
                console.error('Error fetching user favoris:', error);
            }
        };

        fetchData();

        const unsubscribe = firestore()
            .collection('userFavoris')
            .doc(userId)
            .onSnapshot(() => {
                fetchData();
            });

        return () => unsubscribe();
    }, [userId]);

    return { userPlantsFavoris: userFavoris, plantsData };
};

export const useUserSymptomsFavoris = (userId) => {
    const [userFavoris, setUserFavoris] = useState([]);
    const [symptomsData, setSymptomsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const documentSnapshot = await firestore()
                    .collection('userSymptomFavoris')
                    .doc(userId)
                    .get();

                const userFavorisData = documentSnapshot.data();
                if (userFavorisData && userFavorisData.symptomIds) {
                    const userSymptomIds = userFavorisData.symptomIds.map(
                        (item) => item.symptomId,
                    );
                    setUserFavoris(userSymptomIds);
                    const fetchedSymptomsData = await Promise.all(userSymptomIds.map(async (symptomId) => {
                        try {
                            const response = await axios.get(`https://apimonremede.jsprod.fr/api/symptomes/${symptomId}`);
                            return {
                                id: symptomId,
                                name: response.data.name,
                                image: response.data.media && response.data.media.length > 0 ? response.data.media[0].original_url : null,
                            };
                        } catch (error) {
                            // console.error('Error fetching symptom data:', error);
                            return null;
                        }
                    }));
                    setSymptomsData(fetchedSymptomsData.filter(data => data !== null));
                }
            } catch (error) {
                console.error('Error fetching user favoris:', error);
            }
        };

        fetchData();

        const unsubscribe = firestore()
            .collection('userSymptomFavoris')
            .doc(userId)
            .onSnapshot(() => {
                fetchData();
            });

        return () => unsubscribe();
    }, [userId]);

    return { userSymptomsFavoris: userFavoris, symptomsData };
};
