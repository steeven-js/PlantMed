import {showMessage} from 'react-native-flash-message';

export const validateLocation = (location: string) => {
  if (!location.trim()) {
    showMessage({
      message: 'Error',
      description: 'Please fill location field',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }
};
