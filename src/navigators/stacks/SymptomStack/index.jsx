import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import { IndependentColors } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import PlantView from '../../../screens/PlantView';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import Plant from '../../tabs/PlantMedTab';
import styles from '../styles';

// Creating stack navigator
const Stack = createStackNavigator();

// PlantStack
const PlantStack = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Screen options
    const screenOptions = ({ navigation, route }) => ({
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
        headerRight: () => null, // Cacher le headerRight pour ce stack
        title: route.params?.plantName || 'Plant Details', // Utiliser une valeur par défaut si route.params.plantName est indéfini
    });

    // Returning
    return (
        <Stack.Navigator initialRouteName="Plant" screenOptions={screenOptions}>
            <Stack.Screen name="Plant" component={Plant} />
            <Stack.Screen name="PlantView" component={PlantView} />
        </Stack.Navigator>
    );
};

// Exporting
export default PlantStack;
