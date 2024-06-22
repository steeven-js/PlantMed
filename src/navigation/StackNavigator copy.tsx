import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/RootStackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {screens} from '../screens';
import {RootStack} from './RootStack';
import {useAppSelector} from '../store';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export const useAppNavigation = () => {
  return useNavigation<Navigation>();
};

const StackNavigator: React.FC = () => {
  const user = useAppSelector(state => state.userSlice.user);
  const start = useAppSelector(state => state.startSlice.start);

  return (
    <RootStack.Navigator>
      {/* IF USER JUST OPENED THE APP */}
      {start && !user && (
        <RootStack.Group>
          <RootStack.Screen
            name='Onboarding'
            component={screens.Onboarding}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      )}
      {/* IF USER IS LOGGED OUT */}
      {!start && !user && (
        <RootStack.Group>
          <RootStack.Screen
            name='SignIn'
            component={screens.SignIn}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='SignUp'
            component={screens.SignUp}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='SignUpAccountCreated'
            component={screens.SignUpAccountCreated}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='NewPassword'
            component={screens.NewPassword}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='ForgotPasswordSentEmail'
            component={screens.ForgotPasswordSentEmail}
            options={{headerShown: false}}
          />
          {/* VERIFICATION */}
          <RootStack.Screen
            name='SendEmailOtpForgot'
            component={screens.SendEmailOtpForgot}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='VerifyEmailForgot'
            component={screens.VerifyEmailForgot}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      )}
      {/* IF USER IS LOGGED IN */}
      {!start && user && (
        <RootStack.Group>
          <RootStack.Screen
            name='TabNavigator'
            component={screens.TabNavigator}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='InfoSaved'
            component={screens.InfoSaved}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='ShippingAndPaymentInfo'
            component={screens.ShippingAndPaymentInfo}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='LogOut'
            component={screens.LogOut}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='DeleteAccount'
            component={screens.DeleteAccount}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='Search'
            component={screens.Search}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='Description'
            component={screens.Description}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='OrderSuccessful'
            component={screens.OrderSuccessful}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='OrderFailed'
            component={screens.OrderFailed}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='OrderHistory'
            component={screens.OrderHistory}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='LeaveAReview'
            component={screens.LeaveAReview}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='EditProfile'
            component={screens.EditProfile}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='Reviews'
            component={screens.Reviews}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='Checkout'
            component={screens.Checkout}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='MyPromocodes'
            component={screens.MyPromocodes}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='Shop'
            component={screens.Shop}
            options={{headerShown: false}}
          />
          {/* VERIFICATION */}
          <RootStack.Screen
            name='SendEmailOtp'
            component={screens.SendEmailOtp}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='SendPhoneOtp'
            component={screens.SendPhoneOtp}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='VerifyEmail'
            component={screens.VerifyEmail}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='VerifyPhone'
            component={screens.VerifyPhone}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='PhoneVerified'
            component={screens.PhoneVerified}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='EmailVerified'
            component={screens.EmailVerified}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='Product'
            component={screens.Product}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='Filter'
            component={screens.Filter}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};

export default StackNavigator;
