import {showMessage} from 'react-native-flash-message';

export const validateCardNumber = (cardNumber: string) => {
  if (!cardNumber.trim()) {
    showMessage({
      message: 'Error',
      description: 'Please fill card number field',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }

  const cleanCardNumber = cardNumber.replace(/\s/g, '');
  const regex = /^\d{16}$/;
  if (!regex.test(cleanCardNumber)) {
    showMessage({
      message: 'Error',
      description: 'Card number must be 16 digits',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }
};
