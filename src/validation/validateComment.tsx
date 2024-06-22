import {showMessage} from 'react-native-flash-message';

export const validateComment = (comment: string) => {
  if (!comment.trim()) {
    showMessage({
      message: 'Error',
      description: 'Please enter your comment',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }

  if (comment.trim().length < 5) {
    showMessage({
      message: 'Error',
      description: 'Comment must be at least 5 characters',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }

  if (comment.trim().length > 250) {
    showMessage({
      message: 'Error',
      description: 'Comment must be at most 100 characters',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }

  const regex = /^[a-zA-Zа-яА-Я\s!,.]*$/;
  if (!regex.test(comment)) {
    showMessage({
      message: 'Error',
      description: 'Comment must contain only letters',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }
};
