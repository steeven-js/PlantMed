import firestore from '@react-native-firebase/firestore';
import { ShowToast } from './toast';

export const addOrRemovePlantFavoris = async ({ uid, data, plantId }) => {
    try {
        const plantName = data.name;
        const userDocRef = firestore().collection('userPlantFavoris').doc(uid);
        const userDoc = await userDocRef.get();

        if (userDoc.exists) {
            const userData = userDoc.data();

            if (userData.plantIds) {
                const existingPlantIndex = userData.plantIds.findIndex(
                    (entry) => entry.plantId === plantId,
                );

                if (existingPlantIndex !== -1) {
                    userData.plantIds.splice(existingPlantIndex, 1);
                    ShowToast({
                        type: 'error',
                        position: 'top',
                        text1: 'Plante retirée des favoris',
                        visibilityTime: 3000,
                        autoHide: true,
                    });
                } else {
                    userData.plantIds.push({
                        plantId: plantId,
                        Name: plantName,
                    });
                    ShowToast({
                        type: 'success',
                        position: 'top',
                        text1: 'Plante ajoutée aux favoris',
                        visibilityTime: 3000,
                        autoHide: true,
                    });
                }
            } else {
                userData.plantIds = [{ plantId: plantId, Name: plantName }];
                ShowToast({
                    type: 'info',
                    position: 'top',
                    text1: 'Plante ajoutée aux favoris',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            }

            await userDocRef.set(userData);
            console.log('Document mis à jour avec succès');
        } else {
            await userDocRef.set({
                plantIds: [{ plantId: plantId, Name: plantName }],
            });
            ShowToast({
                type: 'info',
                position: 'top',
                text1: 'Plante ajoutée aux favoris',
                visibilityTime: 3000,
                autoHide: true,
            });
            console.log('Document ajouté avec succès');
        }
    } catch (error) {
        console.error(
            "Erreur lors de l'ajout ou de la mise à jour du document :",
            error,
        );
    }
};

export const addOrRemoveSymptomFavoris = async ({ uid, data, symptomId }) => {
    try {
        const symptomName = data.name;
        const userDocRef = firestore().collection('userSymptomFavoris').doc(uid);
        const userDoc = await userDocRef.get();

        if (userDoc.exists) {
            const userData = userDoc.data();

            if (userData.symptomIds) {
                const existingSymptomIndex = userData.symptomIds.findIndex(
                    (entry) => entry.symptomId === symptomId,
                );

                if (existingSymptomIndex !== -1) {
                    userData.symptomIds.splice(existingSymptomIndex, 1);
                    ShowToast({
                        type: 'error',
                        position: 'top',
                        text1: 'Symptôme retiré des favoris',
                        visibilityTime: 3000,
                        autoHide: true,
                    });
                } else {
                    userData.symptomIds.push({
                        symptomId: symptomId,
                        name: symptomName,
                    });
                    ShowToast({
                        type: 'success',
                        position: 'top',
                        text1: 'Symptôme ajouté aux favoris',
                        visibilityTime: 3000,
                        autoHide: true,
                    });
                }
            } else {
                userData.symptomIds = [{ symptomId: symptomId, name: symptomName }];
                ShowToast({
                    type: 'info',
                    position: 'top',
                    text1: 'Symptôme ajouté aux favoris',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            }

            await userDocRef.set(userData);
            console.log('Document mis à jour avec succès');
        } else {
            await userDocRef.set({
                symptomIds: [{ symptomId: symptomId, name: symptomName }],
            });
            ShowToast({
                type: 'info',
                position: 'top',
                text1: 'Symptôme ajouté aux favoris',
                visibilityTime: 3000,
                autoHide: true,
            });
            console.log('Document ajouté avec succès');
        }
    } catch (error) {
        console.error(
            "Erreur lors de l'ajout ou de la mise à jour du document :",
            error,
        );
    }
};
