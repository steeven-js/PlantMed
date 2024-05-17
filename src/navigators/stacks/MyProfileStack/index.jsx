import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import ic_logout_dark_white from '../../../assets/icons/svg/ic_logout_dark_white';
import { IndependentColors } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import handleLogout from '../../../functions/handleLogout';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from '../styles';
import Favoris from '../../../screens/PlantMed/Favoris/favoris';
import MyProfile from '../../../screens/Auth/MyProfile';

// Creating stack navigator
const Stack = createStackNavigator();

// My profile stack
const MyProfileStack = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Screen options
    const screenOptions = ({ navigation }) => ({
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
        <Stack.Navigator initialRouteName="My Profile" screenOptions={screenOptions}>
            <Stack.Screen
                name="My Profile"
                component={MyProfile}
                options={{ title: 'Mon profil' }}
            />
            <Stack.Screen name="Mes favoris" component={Favoris} />
        </Stack.Navigator>
    );
};

// Exporting
export default MyProfileStack;
