import styles from '../styles';
import { useContext } from 'react';
import { SvgXml } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import { IndependentColors } from '../../../config/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import Symptom from '../../../screens/PlantMed/Symptom';
import Plant from '../../../screens/PlantMed/Plant';
import Favoris from '../../../screens/PlantMed/Favoris/favoris';
import PlantMedTab from '../../tabs/PlantMedTab';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import GridViewSymptoms from '../../../screens/PlantMed/GridViewSymptoms';
import GridViewPlants from '../../../screens/PlantMed/GridViewPlants';


// Creating stack navigator
const Stack = createStackNavigator();

const PlantMedStack = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Navigation
    const navigation = useNavigation();

    // Get header title according to the route
    const getHeaderTitle = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'Symptoms';
        switch (routeName) {
            case 'Symptoms':
                return 'Usages thérapeutiques';
            case 'Plants':
                return 'Plantes médicinales';
            case 'Favoris':
                return 'Mes favoris';
        }
    };

    // Screen options
    const screenOptions = ({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        // Header options
        return {
            headerTitle: routeName ? getHeaderTitle(route) : null,
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
                        if (route.name === 'PlantMedTab') {
                            navigation.navigate('Home Stack');
                        } else {
                            navigation.navigate('PlantMedTab');
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
            <Stack.Screen name="PlantMedTab" component={PlantMedTab} />
            <Stack.Screen name="SymptomsList" component={GridViewSymptoms} />
            <Stack.Screen name="PlantsList" component={GridViewPlants} />
            <Stack.Screen name="SymptomView" component={Symptom} />
            <Stack.Screen name="PlantView" component={Plant} />
            <Stack.Screen name="Favoris" component={Favoris} />
        </Stack.Navigator>
    );
};

export default PlantMedStack;
