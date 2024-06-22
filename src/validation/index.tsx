import {validateCVV} from './validateCVV';
import {validateName} from './validateName';
import {validateEmail} from './validateEmail';
import {validateRating} from './validateRating';
import {validateOTPCode} from './validateOTPCode';
import {validateAddress} from './validateAddress';
import {validateComment} from './validateComment';
import {validatePassword} from './validatePassword';
import {validateLocation} from './validateLocation';
import {validatePromoCode} from './validatePromoCode';
import {validateCardNumber} from './validateCardNumber';
import {validateExpiryDate} from './validateExpiryDate';
import {validatePhoneNumber} from './validatePhoneNumber';
import {validateCardHolderName} from './validateCardHolderName';
import {validateConfirmPassword} from './validateConfirmPassword';

export type ValidationType = {
  cvv?: string;
  code?: string;
  name?: string;
  email?: string;
  rating?: number;
  cardCvv?: string;
  comment?: string;
  otpCode?: string;
  address?: string;
  country?: string;
  password?: string;
  userName?: string;
  location?: string;
  lastName?: string;
  cardYear?: string;
  promocode?: string;
  firstName?: string;
  cardMonth?: string;
  promoCode?: string;
  cardNumber?: string;
  expiryDate?: string;
  orderNumber?: string;
  phoneNumber?: string;
  cardHolderName?: string;
  confirmPassword?: string;
};

export const validation = ({
  cvv,
  name,
  email,
  rating,
  comment,
  otpCode,
  address,
  password,
  location,
  promoCode,
  expiryDate,
  cardNumber,
  phoneNumber,
  cardHolderName,
  confirmPassword,
}: ValidationType) => {
  let isValid = true;

  if (name !== undefined) {
    if (validateName(name) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (email !== undefined) {
    if (validateEmail(email) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (password !== undefined) {
    if (validatePassword(password) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (confirmPassword !== undefined && password !== undefined) {
    if (validateConfirmPassword(password, confirmPassword) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (address !== undefined) {
    if (validateAddress(address) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (cardNumber !== undefined) {
    if (validateCardNumber(cardNumber) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (cvv !== undefined) {
    if (validateCVV(cvv) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (otpCode !== undefined) {
    if (validateOTPCode(otpCode) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (location !== undefined) {
    if (validateLocation(location) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (promoCode !== undefined) {
    if (validatePromoCode(promoCode) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (expiryDate !== undefined) {
    if (validateExpiryDate(expiryDate) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (phoneNumber !== undefined) {
    if (validatePhoneNumber(phoneNumber) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (cardHolderName !== undefined) {
    if (validateCardHolderName(cardHolderName) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (comment !== undefined) {
    if (validateComment(comment) === false) {
      isValid = false;
      return isValid;
    }
  }

  if (rating !== undefined) {
    if (validateRating(rating) === false) {
      isValid = false;
      return isValid;
    }
  }

  return isValid;
};
