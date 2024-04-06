import { useCallback, useContext, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_edit_dark_green from '../../assets/icons/svg/ic_edit_dark_green';
import ic_lock_dark_green from '../../assets/icons/svg/ic_lock_dark_green';
import SectionTitle from '../../components/headings/SectionTitle';
import NavigationLink from '../../components/links/NavigationLink';
import SwitchList from '../../components/switches/SwitchList';
import { IndependentColors } from '../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';
import useAuthCheck from '../../functions/authCheck';
import {SettingsData} from '../../data/AppData';

// Functional component
const Settings = ({ navigation }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme, _toggleTheme } =
        useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Local states
    const [isThemeSwitchOn, setIsThemeSwitchOn] = useState(false);

    const _toggleThemeSwitch = useCallback(() => {
        // Updating local state value
        setIsThemeSwitchOn((previousState) => !previousState);
        // Calling function to toggling theme mode(Light & Dark)
        _toggleTheme();
    }, [_toggleTheme]);

    // Constants
    const Track_Active_Color = theme.accent;
    const Track_Inactive_Color = theme.accentLightest;
    const Thumb_Active_Color = IndependentColors.white;
    const Thumb_Inactive_Color = theme.secondary;

    // AuthCheck hook
    const { isUserAuthenticated } = useAuthCheck();

    // AppData
    const { account, appearance } = SettingsData;

    // Returning
    return (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContentContainerStyle}
            >
                {isUserAuthenticated && (
                    <>
                        {/* Section Account */}

                        {/* Section title component */}
                        <SectionTitle title={account[0].label} />

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />

                        {/* Navigation link component */}
                        <NavigationLink
                            leftIcon={
                                <SvgXml
                                    xml={ic_edit_dark_green}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            }
                            label={account[0].options[0].label1}
                            onPress={() => navigation.navigate('Edit Profile')}
                        />

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />

                        {/* Navigation link component */}
                        <NavigationLink
                            leftIcon={
                                <SvgXml
                                    xml={ic_lock_dark_green}
                                    width={STANDARD_VECTOR_ICON_SIZE}
                                    height={STANDARD_VECTOR_ICON_SIZE}
                                />
                            }
                            label={account[0].options[0].label2}
                            onPress={() => navigation.navigate('Reset Password')}
                        />

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />
                    </>
                )}

                {/* Section Appearance */}

                {/* Section title component */}
                <SectionTitle title={appearance[0].label} />

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                {/* Switch list */}
                <SwitchList
                    label={appearance[0].options[0].label1}
                    labelInfo={`Passer en mode ${isLightTheme ? 'sombre' : 'clair'}.`}
                    trackActiveColor={Track_Active_Color}
                    trackInactiveColor={Track_Inactive_Color}
                    thumbActiveColor={Thumb_Active_Color}
                    thumbInactiveColor={Thumb_Inactive_Color}
                    onValueChange={_toggleThemeSwitch}
                    value={isThemeSwitchOn}
                />
            </ScrollView>
        </View>
    );
};

// Exporting
export default Settings;
