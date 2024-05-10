import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';

export const useUserPlantsFavoris = (userId) => {
    const [userFavoris, setUserFavoris] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
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
                // console.log('userFavorisData data found:', userFavorisData);
            } else {
                console.log('No userPlantsFavoris data found');
                setUserFavoris([]);
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

    return userFavoris;
};

export const useUserSymptomsFavoris = (userId) => {
    const [userFavoris, setUserFavoris] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
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
                // console.log('userFavorisData data found:', userFavorisData);
            } else {
                console.log('No userSymptomsFavoris data found');
                setUserFavoris([]);
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

    return userFavoris;
};
