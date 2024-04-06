import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { scale } from 'react-native-size-matters';
import { SvgXml } from 'react-native-svg';
import { Platform } from 'react-native';

import ic_gear_dark_green from '../../../assets/icons/svg/ic_gear_dark_green';
import ic_gear_light_green from '../../../assets/icons/svg/ic_gear_light_green';
import ic_home_dark_green from '../../../assets/icons/svg/ic_home_dark_green';
import ic_home_light_green from '../../../assets/icons/svg/ic_home_light_green';
import ic_person_dark_green from '../../../assets/icons/svg/ic_person_dark_green';
import ic_person_light_green from '../../../assets/icons/svg/ic_person_light_green';
import ic_plant_dark_green from '../../../assets/icons/svg/ic_plant_dark_green';
import ic_plant_light_green from '../../../assets/icons/svg/ic_plant_dark_light_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import useAuthCheck from '../../../functions/authCheck';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import AuthStack from '../../stacks/AuthStack';
import HomeStack from '../../stacks/HomeStack';
import MyProfileStack from '../../stacks/MyProfileStack';
import PlantMedStack from '../../stacks/PlantMedStack';
import SettingsStack from '../../stacks/SettingsStack';

// Creating bottom tab navigator
const Tab = createBottomTabNavigator();

// Home bottom tab navigator
const HomeBottomTab = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    const { isUserAuthenticated, userId } = useAuthCheck();

    const iosTabBarStyle = {
        borderTopWidth: 0,
        backgroundColor: theme.primary,
        elevation: 0,
        height: scale(70),
        padding: scale(15),
    };

    const androidTabBarStyle = {
        borderTopWidth: 0,
        backgroundColor: theme.primary,
        elevation: 0,
        height: scale(50),
    };

    // Screen options
    const screenOptions = {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
            ios: iosTabBarStyle,
            android: androidTabBarStyle,
        }),
    };

    // Returning
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Home Stack"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <SvgXml
                                xml={ic_home_dark_green}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                        ) : (
                            <SvgXml
                                xml={ic_home_light_green}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Plant Stack"
                component={PlantMedStack}
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
            {isUserAuthenticated === false || userId === '' ? (
                <Tab.Screen
                    name="Auth Stack"
                    component={AuthStack}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <SvgXml
                                    xml={ic_person_dark_green}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            ) : (
                                <SvgXml
                                    xml={ic_person_light_green}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            ),
                    }}
                />
            ) : (
                <Tab.Screen
                    name="My Profile Stack"
                    component={MyProfileStack}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <SvgXml
                                    xml={ic_person_dark_green}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            ) : (
                                <SvgXml
                                    xml={ic_person_light_green}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            ),
                    }}
                />
            )}

            <Tab.Screen
                name="Settings Stack"
                component={SettingsStack}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <SvgXml
                                xml={ic_gear_dark_green}
                                width={STANDARD_VECTOR_ICON_SIZE}
                                height={STANDARD_VECTOR_ICON_SIZE}
                            />
                        ) : (
                            <SvgXml
                                xml={ic_gear_light_green}
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
export default HomeBottomTab;
