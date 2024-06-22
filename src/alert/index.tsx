import {Alert} from 'react-native';

const alreadyAdded = () => {
  return Alert.alert('Already Added', 'Product already in cart.', [
    {text: 'Cancel', style: 'cancel'},
  ]);
};

const userDeleted = () => {
  return Alert.alert('Success', 'Account deleted successfully', [
    {
      text: 'OK',
      onPress: () => {
        console.log('OK Pressed');
      },
    },
  ]);
};

const somethingWentWrong = () => {
  return Alert.alert('Something went wrong, please try again later');
};

const invalidOtp = () => {
  return Alert.alert('Invalid OTP', 'Please enter valid OTP');
};

const invalidUsernameOrPassword = () => {
  return Alert.alert('Error', 'Invalid username or password', [
    {
      text: 'OK',
      onPress: () => {
        console.log('OK Pressed');
      },
    },
  ]);
};

const userWithThisNameOrEmailAlreadyExists = () => {
  return Alert.alert(
    'Error',
    'User with this name or email already exists',
    [
      {
        text: 'OK',
        onPress: () => {
          console.log('OK Pressed');
        },
      },
    ],
    {cancelable: false},
  );
};

export const alert = {
  invalidOtp,
  userDeleted,
  alreadyAdded,
  somethingWentWrong,
  invalidUsernameOrPassword,
  userWithThisNameOrEmailAlreadyExists,
};
