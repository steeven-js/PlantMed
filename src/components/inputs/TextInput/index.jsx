import { memo, useContext } from 'react';
import { TextInput as RNTextInput, Text } from 'react-native';

import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const TextInput = ({
    label,
    placeholder,
    value,
    onChangeText,
    autoCapitalize,
    keyboardType,
    disabled = false,
}) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <>
            {/* Text input label */}
            <Text
                style={[
                    styles.textInputLabel,
                    { color: theme.textHighContrast },
                ]}
            >
                {label}
            </Text>
            {/* Text input */}
            <RNTextInput
                placeholder={placeholder}
                placeholderTextColor={theme.textLowContrast}
                style={[
                    styles.textInput,
                    {
                        borderColor: theme.secondaryDark,
                        backgroundColor: theme.secondary,
                        color: theme.textHighContrast,
                    },
                ]}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                editable={!disabled}
            />
        </>
    );
};

// Exporting
export default memo(TextInput);
