import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useContext } from 'react';
import { SvgXml } from 'react-native-svg';

import ic_heart_dark_green from '../../../assets/icons/svg/ic_heart_dark_green';
import ic_heart_light_green from '../../../assets/icons/svg/ic_heart_light_green';
import ic_info_dark_green from '../../../assets/icons/svg/ic_info_dark_green';
import ic_plant_dark_green from '../../../assets/icons/svg/ic_plant_dark_green';
import ic_plant_light_green from '../../../assets/icons/svg/ic_plant_dark_light_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import ic_info_light_green from '../../../assets/icons/svg/ic_info_light_green';
import GridViewSymptoms from '../../../screens/GridViewSymptoms';
import GridHomePlants from '../../../screens/PlantMed/GridHomePlants';
import Favoris from '../../../screens/PlantMed/favoris';

const Tab = createMaterialTopTabNavigator();

// Functional component
const PlantMedTab = ({ onTabChange }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Screen options
    const screenOptions = {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: theme.primary,
            elevation: 0,
            padding: 5,
        },
    };

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Symptoms"
                component={GridViewSymptoms}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <SvgXml
                                xml={ic_info_dark_green}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                        ) : (
                            <SvgXml
                                xml={ic_info_light_green}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Plants"
                component={GridHomePlants}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <SvgXml
                                xml={ic_plant_dark_green}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                        ) : (
                            <SvgXml
                                xml={ic_plant_light_green}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Favoris"
                component={Favoris}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <SvgXml
                                xml={ic_heart_dark_green}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                        ) : (
                            <SvgXml
                                xml={ic_heart_light_green}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                        ),
                }}
            />
        </Tab.Navigator>
    );
};

export default PlantMedTab;
