import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useContext } from 'react';
import { SvgXml } from 'react-native-svg';

import ic_info_dark_green from '../../../assets/icons/svg/ic_info_dark_green';
import ic_info_dark_grey from '../../../assets/icons/svg/ic_info_dark_grey';
import ic_plant_dark_green from '../../../assets/icons/svg/ic_plant_dark_green';
import ic_plant_light_green from '../../../assets/icons/svg/ic_plant_dark_light_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import PlantWishList from '../../../screens/PlantWishList';
import SymptomWishList from '../../../screens/SymptomWishList';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';

const Tab = createMaterialTopTabNavigator();

// Functional component
const UserWishlistTab = () => {
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
                name="SymptomWishList"
                component={SymptomWishList}
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
                                xml={ic_info_dark_grey}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="PlantWishList"
                component={PlantWishList}
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
        </Tab.Navigator>
    );
};

// Exporting
export default UserWishlistTab;
