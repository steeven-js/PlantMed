import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import ic_logout_dark_white from '../../../assets/icons/svg/ic_logout_dark_white';
import { IndependentColors } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import handleLogout from '../../../functions/handleLogout';
import MyProfile from '../../../screens/MyProfile';
import Notifications from '../../../screens/Notifications';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import UserWishlistTab from '../../tabs/UserWishlistTab';
import styles from '../styles';

// Creating stack navigator
const Stack = createStackNavigator();

// My profile stack
const MyProfileStack = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Navigation
    const navigation = useNavigation();

    // Screen options
    const screenOptions = ({ route }) => ({
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
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => {
                    if (route.name === 'My Profile') {
                        navigation.navigate('Home Stack');
                    } else {
                        navigation.navigate('My Profile');
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
        headerRight: () => (
            <TouchableOpacity onPress={handleLogout} style={styles.rightIcon}>
                <SvgXml
                    xml={ic_logout_dark_white}
                    width={STANDARD_VECTOR_ICON_SIZE}
                    height={STANDARD_VECTOR_ICON_SIZE}
                />
            </TouchableOpacity>
        ),
    });

    // Returning
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name="My Profile"
                component={MyProfile}
                options={{ title: 'Mon profile' }}
            />
            <Stack.Screen
                name="Mes favoris"
                component={UserWishlistTab}
                options={{ title: 'Mes favoris' }}
            />
            <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{ title: 'Notifications' }}
            />
        </Stack.Navigator>
    );
};

// Exporting
export default MyProfileStack;
