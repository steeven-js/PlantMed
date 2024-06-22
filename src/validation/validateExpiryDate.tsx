import {showMessage} from 'react-native-flash-message';

export const validateExpiryDate = (expiryDate: string) => {
  if (!expiryDate.trim()) {
    showMessage({
      message: 'Error',
      description: 'Please fill expiry date field',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }

  // const regex = /^(0[1-9]|1[0-2])([0-9]{2})$/;
  // if (!regex.test(expiryDate)) {
  //   showMessage({
  //     message: 'Error',
  //     description: 'Expiry date must be in the format MM/YY',
  //     type: 'danger',
  //     icon: 'danger',
  //   });
  //   return false;
  // }

  const [month, year] = expiryDate.split('/');
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  if (
    Number(year) < currentYear ||
    (Number(year) === currentYear && Number(month) < currentMonth)
  ) {
    showMessage({
      message: 'Error',
      description: 'The card has already expired',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }
};
