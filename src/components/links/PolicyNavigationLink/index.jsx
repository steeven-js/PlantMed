import { memo, useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_arrow_right_dark_green from '../../../assets/icons/svg/ic_arrow_right_dark_green';
import ic_file_dark_green from '../../../assets/icons/svg/ic_file_dark_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const NavigationLink = ({ label, borderBottomColor, onPress }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Getting theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <TouchableOpacity
            style={[styles.link, { borderBottomColor }]}
            onPress={onPress}
        >
            <View style={styles.leftIconAndLinkLabelWrapper}>
                <View
                    style={[
                        styles.leftIconWrapper,
                        { backgroundColor: theme.primary },
                    ]}
                >
                    <SvgXml
                        xml={ic_file_dark_green}
                        width={STANDARD_VECTOR_ICON_SIZE}
                        height={STANDARD_VECTOR_ICON_SIZE}
                    />
                </View>
                <Text
                    style={[
                        styles.linkLabel,
                        { color: theme.textHighContrast },
                    ]}
                >
                    {label}
                </Text>
            </View>
            <SvgXml
                xml={ic_arrow_right_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
            />
        </TouchableOpacity>
    );
};

// Exporting
export default memo(NavigationLink);
