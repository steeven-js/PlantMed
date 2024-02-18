import {
    View,
    Image,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { SvgXml } from 'react-native-svg';
import AuthStack from '../../stacks/AuthStack';
import PoliciesStack from '../../stacks/PoliciesStack';
import { COLORS, IndependentColors } from '../../../config/Colors';
import { FONT_SIZE_LG, FONT_SIZE_MD, FONT_SIZE_SM, FONT_SIZE_XL, STANDARD_STANDARD, STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import ic_home_dark_green from '../../../assets/icons/svg/ic_home_dark_green';
import ic_home_light_grey from '../../../assets/icons/svg/ic_home_light_grey';
import ic_call_dark_green from '../../../assets/icons/svg/ic_call_dark_green';
import ic_call_light_grey from '../../../assets/icons/svg/ic_call_light_grey';
import ic_paper_dark_green from '../../../assets/icons/svg/ic_paper_dark_green';
import ic_paper_light_grey from '../../../assets/icons/svg/ic_paper_light_grey';
import ic_login_dark_green from '../../../assets/icons/svg/ic_login_dark_green';
import ic_login_light_grey from '../../../assets/icons/svg/ic_login_light_grey';
import ic_gear_dark_green from '../../../assets/icons/svg/ic_gear_dark_green';
import ic_gear_light_green from '../../../assets/icons/svg/ic_gear_light_green';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import HomeStack from '../../stacks/HomeStack';
import SupportStack from '../../stacks/SupportStack';
import SettingsStack from '../../stacks/SettingsStack';
import { useSelector } from 'react-redux'
import MyProfileStack from '../../stacks/MyProfileStack';
import SourceStack from '../../stacks/SourceStack';

// Creating drawer navigator
const Drawer = createDrawerNavigator();

// Custom drawer content component
const CustomDrawerContent = props => {

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: COLORS.primary }]}>
            {/* Header image background */}
            <ImageBackground
                source={require('../../../assets/images/backgrounds/liquid-cheese-background.png')}
                style={styles.drawerHeaderImageBackground}>
                <View style={[styles.logoWrapper, { backgroundColor: COLORS.primary }]}>
                    <Image
                        source={require('../../../assets/images/logos/logo_light.png')}
                        style={styles.logo}
                    />
                </View>
                <View>
                    <Text style={styles.brandName}>PlantMed</Text>
                    <Text style={styles.brandSlogan}>Le soins par les plantes!</Text>
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
                    label="App Version 1.0.5 - Fev, 2024"
                    labelStyle={[
                        styles.drawerItemLabel,
                        { color: COLORS.textLowContrast, alignSelf: 'center' },
                    ]}
                />
            </View>
        </View>
    );
};

// Home drawer
const HomeDrawer = () => {

    // Constants
    const uid = useSelector(state => state.auth.uid);

    // Retuning
    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                headerShown: false,
                drawerActiveTintColor: COLORS.accent,
                drawerInactiveTintColor: COLORS.textLowContrast,
                drawerInactiveBackgroundColor: COLORS.primary,
                drawerStyle: styles.drawer,
                drawerItemStyle: styles.drawerItem,
                swipeEdgeWidth: 0,
                headerTitleAlign: 'center',
                headerTitleStyle: [styles.headerTitle],
                headerTintColor: IndependentColors.white,
                headerStyle: [
                    {
                        backgroundColor: COLORS.accent,
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
                name="HomeStack"
                component={HomeStack}
                options={{
                    drawerLabel: 'Accueil',
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
                    drawerLabelStyle: [
                        styles.drawerItemLabel,
                        { fontSize: 'Accueil'.length >= STANDARD_STANDARD * 2 ? FONT_SIZE_MD : FONT_SIZE_LG },
                    ],
                }}
            />

            <Drawer.Screen
                name="SourceStack"
                component={SourceStack}
                options={{
                    drawerLabel: 'Source',
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
                    drawerLabelStyle: [
                        styles.drawerItemLabel,
                        { fontSize: 'Source'.length >= STANDARD_STANDARD * 2 ? FONT_SIZE_MD : FONT_SIZE_LG },
                    ],
                }}
            />

            {uid == null ? (
                <Drawer.Screen
                    name="AuthStack"
                    component={AuthStack}
                    options={{
                        drawerLabel: 'Se connecter',
                        drawerIcon: ({ focused }) => (
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
                            )
                        ),
                        drawerLabelStyle: [
                            styles.drawerItemLabel,
                            { fontSize: 'Se connecter'.length >= STANDARD_STANDARD * 2 ? FONT_SIZE_MD : FONT_SIZE_LG },
                        ],
                    }}
                />
            ) : (
                <Drawer.Screen
                    name="MyProfileStack"
                    component={MyProfileStack}
                    options={{
                        drawerLabel: 'Mon profil',
                        drawerIcon: ({ focused }) => (
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
                            )
                        ),
                        drawerLabelStyle: [
                            styles.drawerItemLabel,
                            { fontSize: 'Mon profil'.length >= STANDARD_STANDARD * 2 ? FONT_SIZE_MD : FONT_SIZE_LG },
                        ],
                    }}
                />
            )}

            <Drawer.Screen
                name="SupportStack"
                component={SupportStack}
                options={{
                    drawerLabel: 'Assistance',
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
                    drawerLabelStyle: [
                        styles.drawerItemLabel,
                        { fontSize: 'Assistance'.length >= STANDARD_STANDARD * 2 ? FONT_SIZE_MD : FONT_SIZE_LG },
                    ],
                }}
            />

            <Drawer.Screen
                name="PoliciesStack"
                component={PoliciesStack}
                options={{
                    drawerLabel: 'Conditions légales',
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
                    drawerLabelStyle: [
                        styles.drawerItemLabel,
                        { fontSize: 'Conditions légales'.length >= STANDARD_STANDARD ? FONT_SIZE_SM : FONT_SIZE_MD },
                    ],
                }}
            />

            {uid !== null && (
                <Drawer.Screen
                    name="SettingsStack"
                    component={SettingsStack}
                    options={{
                        headerShown: false,
                        drawerLabel: 'Paramètres',
                        drawerIcon: ({ focused }) =>
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
                        drawerLabelStyle: [
                            styles.drawerItemLabel,
                            { fontSize: 'Paramètres'.length >= STANDARD_STANDARD * 2 ? FONT_SIZE_MD : FONT_SIZE_LG },
                        ],
                    }}
                />
            )}


        </Drawer.Navigator>
    );
};

// Exporting
export default HomeDrawer;
