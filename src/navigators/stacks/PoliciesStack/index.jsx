import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import { IndependentColors } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import Policies from '../../../screens/Policies';
import Policy from '../../../screens/Policy';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from '../styles';

// Creating stack navigator
const Stack = createStackNavigator();

// Policies stack
const PoliciesStack = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Navigation
    const navigation = useNavigation();

    // Screen options
    const screenOptions = () => ({
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
    });

    // Returning
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Policies" component={Policies} />
            <Stack.Screen name="Policy" component={Policy} />
        </Stack.Navigator>
    );
};

// Exporting
export default PoliciesStack;
