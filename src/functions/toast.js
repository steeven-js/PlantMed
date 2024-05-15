import Toast from 'react-native-toast-message';

export const ShowToast = ({
    type,
    position,
    text1,
    visibilityTime,
    autoHide,
}) => {
    // Définir un décalage vers le haut personnalisé
    const topOffset = 100; // Ajustez la valeur selon vos besoins

    Toast.show({
        type: type,
        position: position,
        text1: text1,
        visibilityTime: visibilityTime,
        autoHide: autoHide,
        // Spécifier le décalage vers le haut
        topOffset: topOffset,
    });
};
