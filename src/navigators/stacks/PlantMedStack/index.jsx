import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import { IndependentColors } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import PlantView from '../../../screens/PlantView';
import SymptomView from '../../../screens/SymptomView';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import PlantMedTab from '../../tabs/PlantMedTab';
import styles from '../styles';

// Creating stack navigator
const Stack = createStackNavigator();

// PlantStack
const PlantMedStack = () => {
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
        headerRight: () => null,
    });

    // Returning
    return (
        <Stack.Navigator
            initialRouteName="PlantMedTab"
            screenOptions={screenOptions}
        >
            {/* name="Symptoms" component={SymptomsList} | name="Plants" component={PlantList} | name="Favoris" component={UserFavorisList} */}
            <Stack.Screen name="PlantMedTab" component={PlantMedTab} />
            <Stack.Screen name="SymptomView" component={SymptomView} />
            <Stack.Screen name="PlantView" component={PlantView} />
        </Stack.Navigator>
    );
};

// Exporting
export default PlantMedStack;