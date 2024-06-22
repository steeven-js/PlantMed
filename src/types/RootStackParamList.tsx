import {PlantmedType, ProductType} from '../types';
import {UserType} from './UserType';
import {ReviewType} from './ReviewType';

export type RootStackParamList = {
  FAQ: undefined;
  Filter: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Search: undefined;
  LogOut: undefined;
  MyProfile: undefined;
  Gravatar: undefined;
  Web: {url: string; title: string};
  UserCreationProcess: {user: UserType};
  MyAddress: undefined;
  NewPassword: {email?: string};
  Onboarding: undefined;
  EditProfile: undefined;
  OrderFailed: undefined;
  Plant: {plant: PlantmedType};
  OrderHistory: undefined;
  Shop: {title: string; products: PlantmedType[]};
  MyPromocodes: undefined;
  TabNavigator: undefined;
  LeaveAReview: {productId: number};
  PaymentMethod: undefined;
  OrderSuccessful: undefined;
  ConfirmationCode: undefined;
  MyTestsAndDiagnostics: undefined;
  PrivacyPolicy: undefined;
  LanguageList: undefined;
  Reviews: {reviews: ReviewType[]};
  MyPromocodesEmpty: undefined;
  ModalScreen: undefined;
  Source: {source: string[]; title: string};
  Description: {description: string; title: string};
  CheckoutPaymentMethod: undefined;
  CheckoutShippingDetails: undefined;
  Filters: undefined;
  ForgotPasswordSentEmail: undefined;
  Checkout: undefined;
  InfoSaved: undefined;
  AccountCreated: undefined;
  PasswordChanged: undefined;
  AccountCreatedFailed: undefined;
  ShippingAndPaymentInfo: undefined;

  /* VERIFICATION */
  SignUpAccountCreated: {email?: string; password?: string};

  /* VERIFICATION */
  VerifyEmail: {email?: string};
  VerifyPhone: {email?: string; phoneNumber?: string};
  SendPhoneOtp: undefined;
  SendEmailOtp: undefined;
  PhoneVerified: undefined;
  EmailVerified: undefined;
  DeleteAccount: undefined;
  VerifyEmailForgot: {email?: string};
  SendEmailOtpForgot: undefined;
  Product: {item: PlantmedType};
};
