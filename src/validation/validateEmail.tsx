import {showMessage} from 'react-native-flash-message';

export const validateEmail = (email: string, iconValidation = false) => {
  if (!email.trim()) {
    if (!iconValidation) {
      showMessage({
        message: 'Error',
        description: 'Please fill email field',
        type: 'danger',
        icon: 'danger',
      });
    }
    return false;
  }

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
    if (!iconValidation) {
      showMessage({
        message: 'Error',
        description: 'Invalid email format',
        type: 'danger',
        icon: 'danger',
      });
    }
    return false;
  }

  if (iconValidation) {
    return true;
  }
};
