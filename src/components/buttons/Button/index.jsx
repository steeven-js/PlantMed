import { memo, useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { IndependentColors } from '../../../config/Colors';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Button = ({ label, onPress, disabled }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.accent }]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text
                style={[styles.buttonLabel, { color: IndependentColors.white }]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

// Exporting
export default memo(Button);
