import { memo, useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_checkmark_black from '../../../assets/icons/svg/ic_checkmark_black';
import ic_checkmark_white from '../../../assets/icons/svg/ic_checkmark_white';
import {
    STANDARD_SPACING,
    STANDARD_VECTOR_ICON_SIZE,
} from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Language = ({ flagImage, languageTitle, isChecked, isLastItem }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <TouchableOpacity
            style={[
                styles.languageCard,
                {
                    backgroundColor: isChecked
                        ? theme.accentLightest
                        : theme.secondary,
                    borderColor: isChecked ? theme.accent : theme.secondaryDark,
                    marginBottom: isLastItem ? 0 : STANDARD_SPACING * 3,
                },
            ]}
        >
            {/* Flag & language title wrapper */}
            <View style={styles.flagImageAndLanguageTitleWrapper}>
                <Image style={styles.flagImage} source={flagImage} />
                <Text
                    style={[
                        styles.languageTitle,
                        {
                            color: isChecked
                                ? theme.textHighContrast
                                : theme.textLowContrast,
                        },
                    ]}
                >
                    {languageTitle}
                </Text>
            </View>

            {/* Checkbox */}
            <View
                style={[
                    styles.checkedIconWrapper,
                    {
                        backgroundColor: isChecked
                            ? theme.accent
                            : theme.primary,
                    },
                    {
                        borderColor: isChecked
                            ? theme.accent
                            : theme.secondaryDark,
                    },
                ]}
            >
                {isLightTheme ? (
                    <SvgXml
                        xml={ic_checkmark_white}
                        width={STANDARD_VECTOR_ICON_SIZE * 0.5}
                        height={STANDARD_VECTOR_ICON_SIZE * 0.5}
                    />
                ) : (
                    <SvgXml
                        xml={ic_checkmark_black}
                        width={STANDARD_VECTOR_ICON_SIZE * 0.5}
                        height={STANDARD_VECTOR_ICON_SIZE * 0.5}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};

// Exporting
export default memo(Language);
