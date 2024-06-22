import {showMessage} from 'react-native-flash-message';

export const validateCardHolderName = (cardHolder: string) => {
  if (!cardHolder.trim()) {
    showMessage({
      message: 'Error',
      description: 'Please fill card holder name field',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }

  if (cardHolder.trim().length < 2) {
    showMessage({
      message: 'Error',
      description: 'Card holder name must be at least 3 characters',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }

  const regex = /^[a-zA-Zа-яА-Я\s]*$/;
  if (!regex.test(cardHolder)) {
    showMessage({
      message: 'Error',
      description: 'Card holder name can contain only letters',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }
};
