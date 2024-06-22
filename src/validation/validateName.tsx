import {showMessage} from 'react-native-flash-message';

export const validateName = (name: string, iconValidation = false) => {
  if (!name.trim()) {
    if (!iconValidation) {
      showMessage({
        message: 'Error',
        description: 'Please fill name field',
        type: 'danger',
        icon: 'danger',
      });
    }

    return false;
  }

  if (name.trim().length < 2) {
    if (!iconValidation) {
      showMessage({
        message: 'Error',
        description: 'Name must be at least 3 characters',
        type: 'danger',
        icon: 'danger',
      });
    }

    return false;
  }

  const regex = /^[a-zA-Zа-яА-Я\s]*$/;
  if (!regex.test(name)) {
    if (!iconValidation) {
      showMessage({
        message: 'Error',
        description: 'Name can contain only letters',
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
