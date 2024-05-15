import { SvgXml } from 'react-native-svg';
import { useContext } from 'react';
import HomeStack from '../../stacks/HomeStack';
import PlantMedStack from '../../stacks/PlantMedStack';
import { scale } from 'react-native-size-matters';
import SettingsStack from '../../stacks/SettingsStack';
import MyProfileStack from '../../stacks/MyProfileStack';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ic_plant_dark_green from '../../../assets/icons/svg/ic_plant_dark_green'; import ic_home_dark_green from '../../../assets/icons/svg/ic_home_dark_green';
import ic_plant_light_green from '../../../assets/icons/svg/ic_plant_dark_light_green';
import ic_gear_dark_green from '../../../assets/icons/svg/ic_gear_dark_green';
import ic_home_light_green from '../../../assets/icons/svg/ic_home_light_green';
import ic_gear_light_green from '../../../assets/icons/svg/ic_gear_light_green';
import ic_person_dark_green from '../../../assets/icons/svg/ic_person_dark_green';
import ic_person_light_green from '../../../assets/icons/svg/ic_person_light_green';

// Creating bottom tab navigator
const Tab = createBottomTabNavigator();

// Home bottom tab navigator
const HomeBottomTab = () => {
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
      height: scale(50),
    },
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
        name="PlantMed Stack"
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
