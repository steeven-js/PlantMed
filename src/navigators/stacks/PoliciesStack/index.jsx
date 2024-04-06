import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import { IndependentColors } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import Policies from '../../../screens/Policies';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from '../styles';
import Cgu from '../../../screens/Cgu';
import Confidentialite from '../../../screens/Confidentialite';
import DataSources from '../../../screens/DataSources';

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
    const screenOptions = ({ route }) => {
        let routeName = '';

        if (route.name === 'Policies') {
            routeName = 'Politiques Légales';
        } else if (route.name === 'Cgu') {
            routeName = 'Conditions Générales d\'Utilisation';
        } else if (route.name === 'Confidentialite') {
            routeName = 'Politique de Confidentialité';
        } else if (route.name === 'DataSources') {
            routeName = 'Sources de Données';
        } else {
            routeName = route.name;
        }

        return {
            headerTitle: routeName,
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerTitle,
            headerTintColor: IndependentColors.white,
            headerStyle: {
                backgroundColor: theme.accent,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {
                        if (route.name === 'Policies') {
                            navigation.navigate('Home Stack');
                        } else {
                            navigation.navigate('Policies');
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
            <Stack.Screen name="Policies" component={Policies} />
            <Stack.Screen name="Cgu" component={Cgu} />
            <Stack.Screen name="Confidentialite" component={Confidentialite} />
            <Stack.Screen name="DataSources" component={DataSources} />
        </Stack.Navigator>
    );
};

// Exporting
export default PoliciesStack;
