import {showMessage} from 'react-native-flash-message';

export const validatePhoneNumber = (
  phoneNumber: string,
  iconValidation = false,
) => {
  if (!phoneNumber.trim()) {
    if (!iconValidation) {
      showMessage({
        message: 'Error',
        description: 'Please fill phone number field',
        type: 'danger',
        icon: 'danger',
      });
    }
    return false;
  }

  const regex = /^\+\d{10,}$/; // Удален знак вопроса после "+"
  if (!regex.test(phoneNumber)) {
    if (!iconValidation) {
      showMessage({
        message: 'Error',
        description:
          'Phone number must start with "+" and be at least 10 digits',
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
