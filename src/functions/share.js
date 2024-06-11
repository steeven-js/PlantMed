import { Share } from 'react-native';

export const sharePlant = (plantId) => {
    const plantUrl = `https://jsplantmed.vercel.app/plantmed/plante/${plantId}`;

    Share.share({
        message: plantUrl,
    })
        .then((result) => console.log(result))
        .catch((errorMsg) => console.error(errorMsg));
};

export const shareSymptom = (symptomId) => {
    const symptomUrl = `https://jsplantmed.vercel.app/plantmed/symptome/${symptomId}`;

    Share.share({
        message: symptomUrl,
    })
        .then((result) => console.log(result))
        .catch((errorMsg) => console.error(errorMsg));
};
