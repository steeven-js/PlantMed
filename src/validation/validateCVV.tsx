import {showMessage} from 'react-native-flash-message';

export const validateCVV = (cvv: string) => {
  if (!cvv.trim()) {
    showMessage({
      message: 'Error',
      description: 'Please fill CVV field',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }

  const regex = /^\d{3,4}$/;
  if (!regex.test(cvv)) {
    showMessage({
      message: 'Error',
      description: 'CVV must be 3 or 4 digits',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }
};
