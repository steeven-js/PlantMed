import {showMessage} from 'react-native-flash-message';

export const validateOTPCode = (otpCode: string) => {
  if (!otpCode.trim()) {
    showMessage({
      message: 'Error',
      description: 'Please fill OTP field',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }

  const regex = /^\d{5}$/;
  if (!regex.test(otpCode)) {
    showMessage({
      message: 'Error',
      description: 'OTP code must be 5 digits',
      type: 'danger',
      icon: 'danger',
    });
    return false;
  }
};
