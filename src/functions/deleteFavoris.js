import firestore from '@react-native-firebase/firestore';

import { ShowToast } from './toast';

const deleteOnePlantFavoris = async ({ uid, plantId }) => {
    try {
        const userDocRef = firestore().collection('userFavoris').doc(uid);
        const userDoc = await userDocRef.get();

        if (userDoc.exists) {
            const userData = userDoc.data();

            if (userData.plantIds) {
                const updatedPlantIds = userData.plantIds.filter(
                    (entry) => entry.plantId !== plantId,
                );
                await userDocRef.update({ plantIds: updatedPlantIds });
                ShowToast({
                    type: 'error',
                    position: 'bottom',
                    text1: 'Plante retirée des favoris',
                    visibilityTime: 3000,
                    autoHide: true,
                });
                console.log('Plante retirée avec succès');
            }
        }
    } catch (error) {
        console.error(
            'Erreur lors de la suppression de la plante des favoris :',
            error,
        );
    }
};

const deleteAllPlantsFavoris = async ({ uid }) => {
    try {
        const userDocRef = firestore().collection('userFavoris').doc(uid);
        await userDocRef.update({ plantIds: [] });
        ShowToast({
            type: 'error',
            position: 'bottom',
            text1: 'Toutes les plantes ont été retirées des favoris',
            visibilityTime: 3000,
            autoHide: true,
        });
        console.log('Toutes les plantes retirées avec succès');
    } catch (error) {
        console.error(
            'Erreur lors de la suppression de toutes les plantes des favoris :',
            error,
        );
    }
};

const deleteOneSymptomFavoris = async ({ uid, symptomId }) => {
    try {
        const userDocRef = firestore()
            .collection('userSymptomFavoris')
            .doc(uid);
        const userDoc = await userDocRef.get();

        if (userDoc.exists) {
            const userData = userDoc.data();

            if (userData.symptomIds) {
                const updatedSymptomIds = userData.symptomIds.filter(
                    (entry) => entry.symptomId !== symptomId,
                );
                await userDocRef.update({ symptomIds: updatedSymptomIds });
                ShowToast({
                    type: 'error',
                    position: 'bottom',
                    text1: 'Symptôme retiré des favoris',
                    visibilityTime: 3000,
                    autoHide: true,
                });
                console.log('Symptôme retiré avec succès');
            }
        }
    } catch (error) {
        console.error(
            'Erreur lors de la suppression du symptôme des favoris :',
            error,
        );
    }
};

const deleteAllSymptomsFavoris = async ({ uid }) => {
    try {
        const userDocRef = firestore()
            .collection('userSymptomFavoris')
            .doc(uid);
        await userDocRef.update({ symptomIds: [] });
        ShowToast({
            type: 'error',
            position: 'bottom',
            text1: 'Tous les symptômes ont été retirés des favoris',
            visibilityTime: 3000,
            autoHide: true,
        });
        console.log('Tous les symptômes retirés avec succès');
    } catch (error) {
        console.error(
            'Erreur lors de la suppression de tous les symptômes des favoris :',
            error,
        );
    }
};

export {
    deleteOnePlantFavoris,
    deleteAllPlantsFavoris,
    deleteOneSymptomFavoris,
    deleteAllSymptomsFavoris,
};
