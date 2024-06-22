import {showMessage} from 'react-native-flash-message';

export const validateRating = (rating: number) => {
  if (rating < 1 || rating > 5) {
    showMessage({
      message: 'Error',
      description: 'Rating must be 1 to 5',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }
};
