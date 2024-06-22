import {showMessage} from 'react-native-flash-message';

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
) => {
  if (!confirmPassword.trim()) {
    showMessage({
      message: 'Error',
      description: 'Please fill confirm password field',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }

  if (confirmPassword.trim().length < 6) {
    showMessage({
      message: 'Error',
      description: 'Password must be at least 6 characters',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }

  if (password !== confirmPassword) {
    showMessage({
      message: 'Error',
      description: 'Passwords do not match',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }
};
