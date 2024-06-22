import {showMessage} from 'react-native-flash-message';

export const validateAddress = (address: string) => {
  if (!address.trim()) {
    showMessage({
      message: 'Error',
      description: 'Please fill address field',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }
};
