import styles from '../styles';
import { useContext } from 'react';
import { SvgXml } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import { IndependentColors } from '../../../config/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import Plant from '../../../screens/PlantMed/plant';
import Symptom from '../../../screens/PlantMed/symptom';
import Favoris from '../../../screens/PlantMed/favoris';
import PlantMed from '../../../screens/PlantMed';

// Creating stack navigator
const Stack = createStackNavigator();

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
        <Stack.Navigator initialRouteName="PlantMed" screenOptions={screenOptions}>
            <Stack.Screen name="PlantMed" component={PlantMed} />
            <Stack.Screen name="Symptom" component={Symptom} />
            <Stack.Screen name="Plant" component={Plant} />
            <Stack.Screen name="Mes favoris" component={Favoris} />
        </Stack.Navigator>
    );
};

export default PlantMedStack;
