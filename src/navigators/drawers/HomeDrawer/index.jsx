import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
    createDrawerNavigator,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import ic_call_dark_green from '../../../assets/icons/svg/ic_call_dark_green';
import ic_call_light_grey from '../../../assets/icons/svg/ic_call_light_grey';
import ic_home_dark_green from '../../../assets/icons/svg/ic_home_dark_green';
import ic_home_light_grey from '../../../assets/icons/svg/ic_home_light_grey';
import ic_login_dark_green from '../../../assets/icons/svg/ic_login_dark_green';
import ic_login_light_grey from '../../../assets/icons/svg/ic_login_light_grey';
import ic_paper_dark_green from '../../../assets/icons/svg/ic_paper_dark_green';
import ic_paper_light_grey from '../../../assets/icons/svg/ic_paper_light_grey';
import ic_person_dark_green from '../../../assets/icons/svg/ic_person_dark_green';
import ic_person_light_green from '../../../assets/icons/svg/ic_person_light_grey';
import { IndependentColors } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import useAuthCheck from '../../../functions/authCheck';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import AuthStack from '../../stacks/AuthStack';
import MyProfileStack from '../../stacks/MyProfileStack';
import PoliciesStack from '../../stacks/PoliciesStack';
import SupportStack from '../../stacks/SupportStack';
import HomeBottomTab from '../../tabs/HomeBottomTab';
import styles from './styles';

// Creating drawer navigator
const Drawer = createDrawerNavigator();

// Custom drawer content component
const CustomDrawerContent = (props) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {/* Header image background */}
            <ImageBackground
                source={require('../../../assets/images/backgrounds/liquid-cheese-background.png')}
                style={styles.drawerHeaderImageBackground}
            >
                <View
                    style={[
                        styles.logoWrapper,
                        { backgroundColor: theme.primary },
                    ]}
                >
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
                    <Text style={styles.brandName}>PlantMed</Text>
                    <Text style={styles.brandSlogan}>
                        Le soin par les plantes!
                    </Text>
                </View>
            </ImageBackground>

            {/* Drawer item list */}
            <DrawerContentScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            {/* Custom drawer item */}
            <View>
                <DrawerItem
                    label="App Version 3.0.0 - March, 2024"
                    labelStyle={[
                        styles.drawerItemLabel,
                        { color: theme.textLowContrast, alignSelf: 'center' },
                    ]}
                />
            </View>
        </View>
    );
};

// Home drawer
const HomeDrawer = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    const { isUserAuthenticated, userAuthUid } = useAuthCheck();

    // Navigation
    const navigation = useNavigation();

    // Retuning
    return (
        <Drawer.Navigator
            screenOptions={() => ({
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
                        style={styles.leftArrowIcon}
                    >
                        <SvgXml
                            xml={ic_arrow_left_white}
                            width={STANDARD_VECTOR_ICON_SIZE}
                            height={STANDARD_VECTOR_ICON_SIZE}
                        />
                    </TouchableOpacity>
                ),
            })}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="HomeBottomTab"
                component={HomeBottomTab}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ focused }) =>
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
                    drawerIcon: ({ focused }) =>
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
                    drawerIcon: ({ focused }) =>
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

            {isUserAuthenticated === false || userAuthUid === '' ? (
                <Drawer.Screen
                    name="Auth Stack"
                    component={AuthStack}
                    options={{
                        drawerLabel: 'Account Login',
                        drawerIcon: ({ focused }) =>
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
            ) : (
                <Drawer.Screen
                    name="MyProfileStack"
                    component={MyProfileStack}
                    options={{
                        drawerLabel: 'My Profile',
                        drawerIcon: ({ focused }) =>
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
                        drawerLabelStyle: styles.drawerItemLabel,
                    }}
                />
            )}
        </Drawer.Navigator>
    );
};

// Exporting
export default HomeDrawer;
