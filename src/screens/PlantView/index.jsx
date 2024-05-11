import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {
    ActivityIndicator,
    Image,
    Linking,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useSelector } from 'react-redux';

import ic_caution_dark_green from '../../assets/icons/svg/ic_caution_dark_green';
import ic_caution_dark_grey from '../../assets/icons/svg/ic_caution_dark_grey';
import ic_clipboard_dark_green from '../../assets/icons/svg/ic_clipboard_dark_green';
import ic_clipboard_dark_grey from '../../assets/icons/svg/ic_clipboard_dark_grey';
import ic_info_dark_green from '../../assets/icons/svg/ic_info_dark_green';
import ic_info_dark_grey from '../../assets/icons/svg/ic_info_dark_grey';
import ic_share from '../../assets/icons/svg/ic_share';
import ic_star from '../../assets/icons/svg/ic_star';
import ic_star_white from '../../assets/icons/svg/ic_star_white';
import ic_use_dark_green from '../../assets/icons/svg/ic_use_dark_green';
import ic_use_dark_grey from '../../assets/icons/svg/ic_use_dark_green copy';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';
import { addOrRemovePlantFavoris } from '../../functions/addOrRemove';
import { useUserPlantsFavoris } from '../../functions/loadUserFavoris';
import { sharePlant } from '../../functions/share';
import useFetchPlant from '../../hooks/useFetchPlant';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const PlantView = ({ route }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Accessing plantId from route params
    const { plantId } = route.params;

    // Fetching plant data
    const { data, isLoading, error } = useFetchPlant(plantId);

    // Image URL
    const imageURL =
        data.media && data.media.length > 0 ? data.media[0].original_url : null;

    // Redux utilisateur connecté
    const uid = useSelector((state) => state.auth.uid);

    // Navigation
    const navigation = useNavigation();

    // Tab navigator
    const Tab = createMaterialTopTabNavigator();

    // Partager une plante
    const handleShare = () => {
        sharePlant(plantId);
    };

    // Use useUserPlantsFavoris to fetch user's favorites
    const userPlantsFavoris = useUserPlantsFavoris(uid);

    // Si plantId est dans userFavoris, alors la plante est en favoris sinon non
    // console.log('userPlantsFavoris:', userPlantsFavoris);
    const isFavoris = userPlantsFavoris && userPlantsFavoris.userPlantsFavoris && userPlantsFavoris.userPlantsFavoris.includes && userPlantsFavoris.userPlantsFavoris.includes(plantId);
    // console.log('isFavoris:', isFavoris);

    // Ajouter ou supprimer une plante des favoris
    const handleaddOrRemovePlantFavoris = async () => {
        await addOrRemovePlantFavoris({ uid, data, plantId });
    };

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

    // Returning
    return (
        <>
            <View style={styles.fullWidthBannerImageWrapper}>
                {/* Banner */}
                {imageURL ? (
                    <Image
                        source={
                            imageURL
                                ? { uri: imageURL }
                                : require('../../assets/images/banners/home/808_x_338.png')
                        }
                        style={styles.bannerImage}
                    />
                ) : (
                    <ActivityIndicator
                        size="large"
                        color={theme.textHighContrast}
                        style={[
                            styles.mainWrapper,
                            { justifyContent: 'center', alignItems: 'center' },
                        ]}
                    />
                )}

                <View style={styles.imageIcons}>
                    <View style={styles.imageIconsItem}>
                        <TouchableOpacity
                            onPress={isLoading ? undefined : handleShare}
                        >
                            {isLoading ? (
                                <ActivityIndicator
                                    size="large"
                                    color={theme.textHighContrast}
                                />
                            ) : (
                                <SvgXml
                                    xml={ic_share}
                                    width={STANDARD_VECTOR_ICON_SIZE * 1.5}
                                    height={STANDARD_VECTOR_ICON_SIZE * 1.5}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageIconsItem}>
                        <TouchableOpacity
                            onPress={
                                isLoading
                                    ? undefined
                                    : uid
                                        ? handleaddOrRemovePlantFavoris
                                        : () =>
                                            navigation.navigate('Auth Stack', {
                                                screen: 'Login',
                                            })
                            }
                        >
                            {isLoading ? (
                                <ActivityIndicator
                                    size="large"
                                    color={theme.textHighContrast}
                                />
                            ) : (
                                <SvgXml
                                    xml={isFavoris ? ic_star : ic_star_white}
                                    width={STANDARD_VECTOR_ICON_SIZE * 1.5}
                                    height={STANDARD_VECTOR_ICON_SIZE * 1.5}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Tab */}
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen
                    name="Info"
                    component={InfoScreen}
                    initialParams={{ plantId: plantId }}
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
                    name="Propriete"
                    component={ProprieteScreen}
                    initialParams={{ plantId: plantId }}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <SvgXml
                                    xml={ic_clipboard_dark_green}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            ) : (
                                <SvgXml
                                    xml={ic_clipboard_dark_grey}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            ),
                    }}
                />
                <Tab.Screen
                    name="Usage"
                    component={UsageScreen}
                    initialParams={{ plantId: plantId }}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <SvgXml
                                    xml={ic_use_dark_green}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            ) : (
                                <SvgXml
                                    xml={ic_use_dark_grey}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            ),
                    }}
                />
                <Tab.Screen
                    name="Precaution"
                    component={PrecautionScreen}
                    initialParams={{ plantId: plantId }}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <SvgXml
                                    xml={ic_caution_dark_green}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            ) : (
                                <SvgXml
                                    xml={ic_caution_dark_grey}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            ),
                    }}
                />
            </Tab.Navigator>
        </>
    );

    function InfoScreen() {
        return (
            <View
                style={[styles.mainWrapper, { backgroundColor: theme.primary }]}
            >
                {/* Content wrapper */}
                <View
                    style={[
                        styles.contentWrapper,
                        { backgroundColor: theme.primary },
                    ]}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={true}
                        bounces={false}
                        contentContainerStyle={
                            styles.scrollViewContentContainerStyle
                        }
                    >
                        {isLoading ? (
                            <ActivityIndicator
                                size="large"
                                color={theme.textHighContrast}
                                style={[
                                    styles.mainWrapper,
                                    {
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                ]}
                            />
                        ) : error || !data ? (
                            <Text
                                style={[
                                    styles.errorText,
                                    { color: theme.textHighContrast },
                                ]}
                            >
                                Error:{' '}
                                {error ? error.message : 'No data available'}
                            </Text>
                        ) : (
                            <View>
                                <Text
                                    style={[
                                        styles.profileName,
                                        {
                                            color: theme.textHighContrast,
                                            textAlign: 'center',
                                        },
                                    ]}
                                >
                                    {data?.name}
                                </Text>
                                {/* Vertical spacer */}
                                <View style={styles.verticalSpacer} />
                                {/* Description */}
                                <Text
                                    style={[
                                        styles.profileName,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    Description
                                </Text>
                                <Text
                                    style={[
                                        styles.sectionTitle,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    {data?.description}
                                </Text>
                                {/* Vertical spacer */}
                                <View style={styles.verticalSpacer} />
                                {/* Habitat */}
                                <Text
                                    style={[
                                        styles.profileName,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    Habitat
                                </Text>
                                <Text
                                    style={[
                                        styles.sectionTitle,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    {data?.habitat}
                                </Text>
                                {/* Vertical spacer */}
                                <View style={styles.verticalSpacer} />
                                {/* Sources */}
                                {data?.source && (
                                    <View>
                                        {/* Sources */}
                                        <Text
                                            style={[
                                                styles.profileName,
                                                { color: theme.textHighContrast },
                                            ]}
                                        >
                                            Sources
                                        </Text>
                                        <TouchableOpacity onPress={() => Linking.openURL(data?.source)}>
                                            <Text style={[styles.sectionTitle, { color: theme.textHighContrast }]}>
                                                {data?.source}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        )}
                    </ScrollView>
                </View>
            </View>
        );
    }

    function ProprieteScreen() {
        return (
            <View
                style={[styles.mainWrapper, { backgroundColor: theme.primary }]}
            >
                {/* Content wrapper */}
                <View
                    style={[
                        styles.contentWrapper,
                        { backgroundColor: theme.primary },
                    ]}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={true}
                        bounces={false}
                        contentContainerStyle={
                            styles.scrollViewContentContainerStyle
                        }
                    >
                        {isLoading ? (
                            <ActivityIndicator
                                size="large"
                                color={theme.textHighContrast}
                                style={[
                                    styles.mainWrapper,
                                    {
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                ]}
                            />
                        ) : error || !data ? (
                            <Text
                                style={[
                                    styles.errorText,
                                    { color: theme.textHighContrast },
                                ]}
                            >
                                Error:{' '}
                                {error ? error.message : 'No data available'}
                            </Text>
                        ) : (
                            <View>
                                <Text
                                    style={[
                                        styles.profileName,
                                        {
                                            color: theme.textHighContrast,
                                            textAlign: 'center',
                                        },
                                    ]}
                                >
                                    {data?.name}
                                </Text>
                                {/* Vertical spacer */}
                                <View style={styles.verticalSpacer} />
                                {/* Propriete */}
                                <Text
                                    style={[
                                        styles.profileName,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    Propriétés
                                </Text>
                                <Text
                                    style={[
                                        styles.sectionTitle,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    {data?.propriete}
                                </Text>
                            </View>
                        )}
                    </ScrollView>
                </View>
            </View>
        );
    }

    function UsageScreen() {
        return (
            <View
                style={[styles.mainWrapper, { backgroundColor: theme.primary }]}
            >
                {/* Content wrapper */}
                <View
                    style={[
                        styles.contentWrapper,
                        { backgroundColor: theme.primary },
                    ]}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={true}
                        bounces={false}
                        contentContainerStyle={
                            styles.scrollViewContentContainerStyle
                        }
                    >
                        {isLoading ? (
                            <ActivityIndicator
                                size="large"
                                color={theme.textHighContrast}
                                style={[
                                    styles.mainWrapper,
                                    {
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                ]}
                            />
                        ) : error || !data ? (
                            <Text
                                style={[
                                    styles.errorText,
                                    { color: theme.textHighContrast },
                                ]}
                            >
                                Error:{' '}
                                {error ? error.message : 'No data available'}
                            </Text>
                        ) : (
                            <View>
                                <Text
                                    style={[
                                        styles.profileName,
                                        {
                                            color: theme.textHighContrast,
                                            textAlign: 'center',
                                        },
                                    ]}
                                >
                                    {data?.name}
                                </Text>
                                {/* Vertical spacer */}
                                <View style={styles.verticalSpacer} />
                                {/* Usage Interne */}
                                <Text
                                    style={[
                                        styles.profileName,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    Usage Interne
                                </Text>
                                <Text
                                    style={[
                                        styles.sectionTitle,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    {data?.usageInterne}
                                </Text>
                                {/* Vertical spacer */}
                                <View style={styles.verticalSpacer} />
                                {/* Usage Externe */}
                                <Text
                                    style={[
                                        styles.profileName,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    Usage Externe
                                </Text>
                                <Text
                                    style={[
                                        styles.sectionTitle,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    {data?.usageExterne}
                                </Text>
                            </View>
                        )}
                    </ScrollView>
                </View>
            </View>
        );
    }

    function PrecautionScreen() {
        return (
            <View
                style={[styles.mainWrapper, { backgroundColor: theme.primary }]}
            >
                {/* Content wrapper */}
                <View
                    style={[
                        styles.contentWrapper,
                        { backgroundColor: theme.primary },
                    ]}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={true}
                        bounces={false}
                        contentContainerStyle={
                            styles.scrollViewContentContainerStyle
                        }
                    >
                        {isLoading ? (
                            <ActivityIndicator
                                size="large"
                                color={theme.textHighContrast}
                                style={[
                                    styles.mainWrapper,
                                    {
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                ]}
                            />
                        ) : error || !data ? (
                            <Text
                                style={[
                                    styles.errorText,
                                    { color: theme.textHighContrast },
                                ]}
                            >
                                Error:{' '}
                                {error ? error.message : 'No data available'}
                            </Text>
                        ) : (
                            <View>
                                <Text
                                    style={[
                                        styles.profileName,
                                        {
                                            color: theme.textHighContrast,
                                            textAlign: 'center',
                                        },
                                    ]}
                                >
                                    {data?.name}
                                </Text>
                                {/* Vertical spacer */}
                                <View style={styles.verticalSpacer} />
                                {/* Précautions */}
                                <Text
                                    style={[
                                        styles.profileName,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    Précautions
                                </Text>
                                <Text
                                    style={[
                                        styles.sectionTitle,
                                        { color: theme.textHighContrast },
                                    ]}
                                >
                                    {data?.precaution}
                                </Text>
                            </View>
                        )}
                    </ScrollView>
                </View>
            </View>
        );
    }
};

export default PlantView;
