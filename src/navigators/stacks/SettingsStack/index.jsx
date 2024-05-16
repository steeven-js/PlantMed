import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import { IndependentColors } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import EditProfile from '../../../screens/EditProfile';
import ResetPassword from '../../../screens/ResetPassword';
import Settings from '../../../screens/Settings';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from '../styles';
import { SettingsData } from '../../../data/AppData';
import useAuthCheck from '../../../functions/authCheck';

// Creating stack navigator
const Stack = createStackNavigator();

// Settings stack
const SettingsStack = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Navigation
    const navigation = useNavigation();

    // Auth check
    const { isUserAuthenticated } = useAuthCheck();

    // AppData
    const { stackHeader } = SettingsData;

    // Fonction de traduction pour traduire les noms d'écran
    const translateScreenName = (screenName) => {
        switch (screenName) {
            case 'Settings':
                return stackHeader[0].label1;
            case 'Edit Profile':
                return stackHeader[0].label2;
            case 'Reset Password':
                return stackHeader[0].label3;
            default:
                return screenName;
        }
    };

    // Screen options
    const screenOptions = ({ route }) => {
        // Sécurisé les routes Edit Profile et Reset Password pour les utilisateurs authentifiés
        if (route.name === 'Edit Profile' && isUserAuthenticated === false) {
            navigation.navigate('Settings');
        } else if (route.name === 'Reset Password' && isUserAuthenticated === false) {
            navigation.navigate('Settings');
        }

        return {
            headerTitleAlign: 'center',
            headerTitleStyle: [styles.headerTitle],
            headerTintColor: IndependentColors.white,
            headerStyle: [
                {
                    backgroundColor: theme.accent,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
            ],
            title: translateScreenName(route.name),
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {
                        if (route.name === 'Settings') {
                            navigation.navigate('Home Stack');
                        } else {
                            navigation.navigate('Settings');
                        }
                    }}
                    style={styles.leftArrowIcon}
                >
                    <SvgXml
                        xml={ic_arrow_left_white}
                        width={STANDARD_VECTOR_ICON_SIZE}
                        height={STANDARD_VECTOR_ICON_SIZE}
                    />
                </TouchableOpacity>
            ),
        };
    };

    // Returning
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Edit Profile" component={EditProfile} />
            <Stack.Screen name="Reset Password" component={ResetPassword} />
        </Stack.Navigator>
    );
};

// Exporting
export default SettingsStack;
