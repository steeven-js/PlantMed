import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_drawer_menu from '../../assets/icons/svg/ic_drawer_menu';
import ic_moon from '../../assets/icons/svg/ic_moon';
import ic_sun from '../../assets/icons/svg/ic_sun';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';
import { ThemeContext } from '../../theming/contexts/ThemeContext';
import styles from './styles';

const HomeHeader = () => {
    const { isLightTheme, lightTheme, darkTheme, _toggleTheme } =
        useContext(ThemeContext);
    const theme = isLightTheme ? lightTheme : darkTheme;
    const _toggleThemeSwitch = useCallback(() => {
        setIsThemeSwitchOn((previousState) => !previousState);
        _toggleTheme();
    }, [_toggleTheme]);
    const navigation = useNavigation();
    const [isThemeSwitchOn, setIsThemeSwitchOn] = useState(false);

    return (
        <View style={[styles.header, { backgroundColor: theme.primary }]}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <SvgXml
                    xml={ic_drawer_menu}
                    width={STANDARD_VECTOR_ICON_SIZE * 2}
                    height={STANDARD_VECTOR_ICON_SIZE * 2}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={_toggleThemeSwitch}>
                <View style={styles.svgBg}>
                    <SvgXml
                        xml={isThemeSwitchOn ? ic_moon : ic_sun}
                        width={STANDARD_VECTOR_ICON_SIZE}
                        height={STANDARD_VECTOR_ICON_SIZE}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default HomeHeader;
