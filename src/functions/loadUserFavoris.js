import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useUserPlantsFavoris = (userId) => {
    const [userFavoris, setUserFavoris] = useState([]);
    const plantsData = useSelector((state) => state.plants.plantsData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const documentSnapshot = await firestore()
                    .collection('userPlantFavoris')
                    .doc(userId)
                    .get();

                const userFavorisData = documentSnapshot.data();
                if (userFavorisData && userFavorisData.plantIds) {
                    const userPlantIds = userFavorisData.plantIds.map((item) => item.plantId);
                    setUserFavoris(userPlantIds);
                }
            } catch (error) {
                console.error('Error fetching user favoris:', error);
            }
        };

        fetchData();

        const unsubscribe = firestore()
            .collection('userPlantFavoris')
            .doc(userId)
            .onSnapshot(() => {
                fetchData();
            });

        return () => unsubscribe();
    }, [userId]);

    const userPlantsData = userFavoris.map(plantId => plantsData.find(plant => plant.id === plantId)).filter(plant => plant);

    return { userPlantsFavoris: userFavoris, plantsData: userPlantsData };
};

export const useUserSymptomsFavoris = (userId) => {
    const [userFavoris, setUserFavoris] = useState([]);
    const symptomsData = useSelector((state) => state.symptoms.symptomsData);

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

    const userSymptomsData = userFavoris.map(symptomId => symptomsData.find(symptom => symptom.id === symptomId)).filter(symptom => symptom);

    return { userSymptomsFavoris: userFavoris, symptomsData: userSymptomsData };
};
