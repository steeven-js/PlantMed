import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import HomeStack from '../../stacks/HomeStack';
import { SvgXml } from 'react-native-svg';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import ic_home_dark_green from '../../../assets/icons/svg/ic_home_dark_green';
import ic_home_light_grey from '../../../assets/icons/svg/ic_home_light_grey';
import ic_login_dark_green from '../../../assets/icons/svg/ic_login_dark_green';
import ic_login_light_grey from '../../../assets/icons/svg/ic_login_light_grey';
import ic_paper_dark_green from '../../../assets/icons/svg/ic_paper_dark_green';
import ic_paper_light_grey from '../../../assets/icons/svg/ic_paper_light_grey';

import styles from './styles';
import AuthStack from '../../stacks/AuthStack';
import MyProfileStack from '../../stacks/MyProfileStack';
import { COLORS, IndependentColors } from '../../../config/Colors';
import {
    STANDARD_VECTOR_ICON_SIZE,
} from '../../../config/Constants';
import PoliciesStack from '../../stacks/PoliciesStack';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            setIsUserAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Drawer.Navigator
            initialRouteName="HomeStack"
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
            drawerContent={(props) => {
                return (
                    <SafeAreaView>
                        <ImageBackground
                            source={require('../../../assets/images/backgrounds/liquid-cheese-background.png')}
                            style={styles.drawerHeaderImageBackground}
                        >
                            <View style={styles.logoWrapper}>
                                <Image
                                    source={require('../../../assets/images/logos/logo_light.png')}
                                    style={styles.logo}
                                />
                            </View>
                            <View>
                                <Text style={styles.brandName}>Mon Remède</Text>
                                <Text style={styles.brandSlogan}>Les soins par les plantes</Text>
                            </View>
                        </ImageBackground>
                        <DrawerItemList {...props} />
                    </SafeAreaView>
                )

            }}
        >
            <Drawer.Screen
                name="Accueil"
                component={HomeStack}
                options={{
                    headerShown: false,
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

            {isUserAuthenticated ? (
                <>
                    {/* Afficher les écrans lorsque l'utilisateur est connecté */}
                    <Drawer.Screen
                        name="Mon Profile"
                        component={MyProfileStack}
                        options={{
                            drawerLabel: 'Mon Profile',
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
                </>
            ) : (
                <>
                    {/* Afficher les écrans lorsque l'utilisateur n'est pas connecté */}
                    <Drawer.Screen
                        name="Se connecter"
                        component={AuthStack}
                        options={{
                            headerShown: false,
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
                </>
            )}

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

        </Drawer.Navigator>
    )
}

export default HomeDrawer