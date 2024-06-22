import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  PostDetails: {id: string};
  NotFound: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Onboarding: undefined;
  TabNavigator: undefined;
};

export type SignInScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignIn'
>;

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUp'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
