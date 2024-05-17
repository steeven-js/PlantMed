import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import { IndependentColors } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from '../styles';
import Login from '../../../screens/Auth/Login';
import Register from '../../../screens/Auth/Register';

// Creating stack navigator
const Stack = createStackNavigator();

// Auth stack
const AuthStack = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Navigation
    const navigation = useNavigation();

    // Options
    const screenOptions = () => ({
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
                style={styles.leftArrowIcon}
            >
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
            <Stack.Screen name="Login" component={Login} options={{ title: 'Se connecter' }} />
            {/* <Stack.Screen name="OTP Verification" component={OtpVerification} /> */}
            <Stack.Screen name="Register" component={Register} options={{ title: 'S\'inscrire' }} />
            {/* <Stack.Screen name="Email Verification" component={EmailVerification} /> */}
        </Stack.Navigator>
    );
};

// Exporting
export default AuthStack;
