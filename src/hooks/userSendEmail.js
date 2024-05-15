import firestore from '@react-native-firebase/firestore';

import { getFormattedDate, getFormattedTime } from '../functions/date';
import { ShowToast } from '../functions/toast';

const userSendEmail = async ({ uid, email, message }) => {
    try {
        const userDocRef = firestore().collection('userMail').doc(uid);
        const userDoc = await userDocRef.get();

        const timestamp = Date.now(); // Timestamp actuel côté client
        const formattedDate = getFormattedDate(timestamp); // Utiliser la fonction de formatage de date
        const formattedTime = getFormattedTime(timestamp); // Utiliser la fonction de formatage de l'heure

        if (userDoc.exists) {
            // Vérification de l'existence du document utilisateur
            const userData = userDoc.data(); // Obtention des données utilisateur

            if (userData.mailIds && userData.mailIds.length > 0) {
                // Si l'utilisateur a déjà des mails enregistrés, ajoutez le nouvel e-mail au tableau existant
                const updatedMailIds = [
                    ...userData.mailIds,
                    {
                        email,
                        message,
                        timestamp: `${formattedDate} ${formattedTime}`,
                    },
                ];
                await userDocRef.update({ mailIds: updatedMailIds });
                ShowToast({
                    type: 'success',
                    position: 'top',
                    text1: 'E-mail envoyé avec succès',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            } else {
                await userDocRef.set(
                    {
                        mailIds: [
                            {
                                email,
                                message,
                                timestamp: `${formattedDate} ${formattedTime}`,
                            },
                        ],
                    },
                    { merge: true },
                );
                ShowToast({
                    type: 'success',
                    position: 'top',
                    text1: 'E-mail envoyé avec succès',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            }
            console.log('Document mis à jour avec succès');
        } else {
            await userDocRef.set({
                mailIds: [
                    {
                        email,
                        message,
                        timestamp: `${formattedDate} ${formattedTime}`,
                    },
                ],
            });
            console.log('Document utilisateur créé avec succès');
            ShowToast({
                type: 'success',
                position: 'top',
                text1: 'E-mail envoyé avec succès',
                visibilityTime: 3000,
                autoHide: true,
            });
        }
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email :", error);
        ShowToast({
            type: 'error',
            position: 'top',
            text1: "Erreur lors de l'envoi de l'email",
            visibilityTime: 3000,
            autoHide: true,
        });
    }
};

export default userSendEmail;
