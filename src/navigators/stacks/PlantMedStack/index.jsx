import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext, useState } from 'react';
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

    // Navigation
    const navigation = useNavigation();

    // Créez un état pour stocker le titre actuel
    const [currentTab, setCurrentTab] = useState('Usages thérapeutiques');

    console.log('currentTab:', currentTab);

    // Définissez la fonction de rappel pour récupérer le titre de l'onglet
    const handleTabChange = (tabName) => {
        setCurrentTab(tabName);
        // Faites ce que vous voulez avec currentTab ici
        console.log('Titre de l\'onglet actuel:', tabName);
    };

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
        headerTitle: currentTab,
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
        headerRight: () => null,
    });

    // Returning
    return (
        <Stack.Navigator
            initialRouteName="PlantMedTab"
            screenOptions={screenOptions}
        >
            {/* Corrected the component prop */}
            <Stack.Screen name="PlantMedTab">
                {props => {
                    return <PlantMedTab {...props} onTabChange={handleTabChange} />;
                }}
            </Stack.Screen>
            <Stack.Screen name="SymptomView" component={SymptomView} />
            <Stack.Screen name="PlantView" component={PlantView} />
        </Stack.Navigator>
    );
};

// Exporting
export default PlantMedStack;
