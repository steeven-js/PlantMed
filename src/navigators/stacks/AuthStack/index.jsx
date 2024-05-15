import styles from '../styles';
import {useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import Login from '../../../screens/Login';
import {TouchableOpacity} from 'react-native';
import Register from '../../../screens/Register';
import {IndependentColors} from '../../../config/Colors';
import {createStackNavigator} from '@react-navigation/stack';
// import OtpVerification from '../../../screens/OtpVerification';
// import EmailVerification from '../../../screens/EmailVerification';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';

// Creating stack navigator
const Stack = createStackNavigator();

// Auth stack
const AuthStack = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Options
  const screenOptions = ({navigation}) => ({
    headerTitleAlign: 'center',
    headerTitleStyle: [styles.headerTitle],
    headerTintColor: IndependentColors.white,
    headerStyle: {
      backgroundColor: theme.accent,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.leftArrowIcon}>
        <SvgXml
          xml={ic_arrow_left_white}
          width={STANDARD_VECTOR_ICON_SIZE}
          height={STANDARD_VECTOR_ICON_SIZE}
        />
      </TouchableOpacity>
    ),
  });

  // Returning
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="OTP Verification" component={OtpVerification} /> */}
      <Stack.Screen name="Register" component={Register} />
      {/* <Stack.Screen name="Email Verification" component={EmailVerification} /> */}
    </Stack.Navigator>
  );
};

// Exporting
export default AuthStack;
