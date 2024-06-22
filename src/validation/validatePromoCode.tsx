import {showMessage} from 'react-native-flash-message';

export const validatePromoCode = (promoCode: string) => {
  if (!promoCode.trim()) {
    showMessage({
      message: 'Error',
      description: 'Please fill promo code field',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }

  if (promoCode.length < 3) {
    showMessage({
      message: 'Error',
      description: 'Promo code must be at least 3 characters',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }
};
