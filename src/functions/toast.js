import Toast from 'react-native-toast-message';

export const ShowToast = ({
    type,
    position,
    text1,
    visibilityTime,
    autoHide,
}) => {
    Toast.show({
        type: type,
        position: position,
        text1: text1,
        visibilityTime: visibilityTime,
        autoHide: autoHide,
    });
};
