import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {useContext} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {SvgXml} from 'react-native-svg';
import AuthStack from '../../stacks/AuthStack';
import Contacts from '../../../screens/Contacts';
import HomeBottomTab from '../../tabs/HomeBottomTab';
import SupportStack from '../../stacks/SupportStack';
import PoliciesStack from '../../stacks/PoliciesStack';
import {IndependentColors} from '../../../config/Colors';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import ic_home_dark_green from '../../../assets/icons/svg/ic_home_dark_green';
import ic_home_light_grey from '../../../assets/icons/svg/ic_home_light_grey';
import ic_call_dark_green from '../../../assets/icons/svg/ic_call_dark_green';
import ic_call_light_grey from '../../../assets/icons/svg/ic_call_light_grey';
import ic_paper_dark_green from '../../../assets/icons/svg/ic_paper_dark_green';
import ic_paper_light_grey from '../../../assets/icons/svg/ic_paper_light_grey';
import ic_login_dark_green from '../../../assets/icons/svg/ic_login_dark_green';
import ic_login_light_grey from '../../../assets/icons/svg/ic_login_light_grey';
import ic_users_dark_green from '../../../assets/icons/svg/ic_users_dark_green';
import ic_users_light_grey from '../../../assets/icons/svg/ic_users_light_grey';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';

// Creating drawer navigator
const Drawer = createDrawerNavigator();

// Custom drawer content component
const CustomDrawerContent = props => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Header image background */}
      <ImageBackground
        source={require('../../../assets/images/backgrounds/liquid-cheese-background.png')}
        style={styles.drawerHeaderImageBackground}>
        <View style={[styles.logoWrapper, {backgroundColor: theme.primary}]}>
          <Image
            source={
              isLightTheme
                ? require('../../../assets/images/logos/logo_light.png')
                : require('../../../assets/images/logos/logo_dark.png')
            }
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.brandName}>PlantMart</Text>
          <Text style={styles.brandSlogan}>World of indoor plants!</Text>
        </View>
      </ImageBackground>

      {/* Drawer item list */}
      <DrawerContentScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Custom drawer item */}
      <View>
        <DrawerItem
          label="App Version 3.0.0 - March, 2024"
          labelStyle={[
            styles.drawerItemLabel,
            {color: theme.textLowContrast, alignSelf: 'center'},
          ]}
        />
      </View>
    </View>
  );
};

// Home drawer
const HomeDrawer = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Retuning
  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
        drawerActiveTintColor: theme.accent,
        drawerInactiveTintColor: theme.textLowContrast,
        drawerInactiveBackgroundColor: theme.primary,
        drawerStyle: styles.drawer,
        drawerItemStyle: styles.drawerItem,
        swipeEdgeWidth: 0,
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
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeBottomTab"
        component={HomeBottomTab}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({focused}) =>
            focused ? (
              <SvgXml
                xml={ic_home_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <SvgXml
                xml={ic_home_light_grey}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
          drawerLabelStyle: styles.drawerItemLabel,
        }}
      />

      <Drawer.Screen
        name="SupportStack"
        component={SupportStack}
        options={{
          drawerLabel: 'Help & Support',
          drawerIcon: ({focused}) =>
            focused ? (
              <SvgXml
                xml={ic_call_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <SvgXml
                xml={ic_call_light_grey}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
          drawerLabelStyle: styles.drawerItemLabel,
        }}
      />

      <Drawer.Screen
        name="PoliciesStack"
        component={PoliciesStack}
        options={{
          drawerLabel: 'Legal Policies',
          drawerIcon: ({focused}) =>
            focused ? (
              <SvgXml
                xml={ic_paper_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <SvgXml
                xml={ic_paper_light_grey}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
          drawerLabelStyle: styles.drawerItemLabel,
        }}
      />

      <Drawer.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          drawerLabel: 'Account Login',
          drawerIcon: ({focused}) =>
            focused ? (
              <SvgXml
                xml={ic_login_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <SvgXml
                xml={ic_login_light_grey}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
          drawerLabelStyle: styles.drawerItemLabel,
        }}
      />

      <Drawer.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerShown: true,
          drawerLabel: 'Contacts',
          drawerIcon: ({focused}) =>
            focused ? (
              <SvgXml
                xml={ic_users_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ) : (
              <SvgXml
                xml={ic_users_light_grey}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
              />
            ),
          drawerLabelStyle: styles.drawerItemLabel,
        }}
      />
    </Drawer.Navigator>
  );
};

// Exporting
export default HomeDrawer;
