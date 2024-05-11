import { memo, useContext } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_search_dark_green from '../../../assets/icons/svg/ic_search_dark_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const SearchTextInput = ({ value, onChangeText }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <View
            style={[
                styles.textInputWrapper,
                {
                    borderColor: theme.secondaryDark,
                    backgroundColor: theme.secondary,
                    color: theme.textHighContrast,
                },
            ]}
        >
            {/* Text input */}
            <TextInput
                placeholder="Recherche..."
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={theme.textLowContrast}
                style={[styles.textInput, { color: theme.textHighContrast }]}
            />

            {/* Search icon */}
            <TouchableOpacity style={styles.searchIconWrapper}>
                <SvgXml
                    xml={ic_search_dark_green}
                    width={STANDARD_VECTOR_ICON_SIZE * 0.8}
                    height={STANDARD_VECTOR_ICON_SIZE * 0.8}
                />
            </TouchableOpacity>
        </View>
    );
};

// Exporting
export default memo(SearchTextInput);
