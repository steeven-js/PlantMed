import styles from '../styles';
import { useContext } from 'react';
import { SvgXml } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import { IndependentColors } from '../../../config/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import PlantMed from '../../../screens/PlantMed';
import GridViewSymptoms from '../../../screens/GridViewSymptoms';
import GridViewPlants from '../../../screens/GridViewPlants';
import Product from '../../../screens/Product';
import ProductReviews from '../../../screens/ProductReviews';
import Symptom from '../../../screens/PlantMed/Symptom';
import Plant from '../../../screens/PlantMed/Plant';


// Creating stack navigator
const Stack = createStackNavigator();

const PlantMedStack = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Screen options
    const screenOptions = ({ navigation, route }) => {

        const handleBack = () => {
            // Redirection logic
            if (route.params.originRoute === 'Home') {
                navigation.navigate('PlantMed');
            } else {
                navigation.goBack();
            }
        };

        // Header options
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
            headerLeft: () => (
                <TouchableOpacity
                    onPress={ handleBack}
                    style={styles.leftArrowIcon}>
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
        <Stack.Navigator initialRouteName="PlantMed" screenOptions={screenOptions}>
            <Stack.Screen name="PlantMed" component={PlantMed} />
            <Stack.Screen name="SymptomsList" component={GridViewSymptoms} options={{ title: 'Usage thérapeutique' }} />
            <Stack.Screen name="PlantsList" component={GridViewPlants} options={{ title: 'Plantes médicinales' }} />
            <Stack.Screen name="SymptomView" component={Symptom} />
            <Stack.Screen name="PlantView" component={Plant} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Product Reviews" component={ProductReviews} />
        </Stack.Navigator>
    );
};

export default PlantMedStack;
