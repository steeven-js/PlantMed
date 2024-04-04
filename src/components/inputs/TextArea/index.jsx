import { memo, useContext } from 'react';
import { TextInput as RNTextInput, Text } from 'react-native';

import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const TextArea = ({
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
                    styles.textareaLabel,
                    { color: theme.textHighContrast },
                ]}
            >
                {label}
            </Text>
            {/* Text input */}
            <RNTextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                disabled={disabled}
                placeholderTextColor={theme.textLowContrast}
                numberOfLines={10}
                multiline={true}
                style={[
                    styles.textareaContainer,
                    {
                        borderColor: theme.secondaryDark,
                        backgroundColor: theme.secondary,
                        color: theme.textHighContrast,
                    },
                ]}
            />
        </>
    );
};

// Exporting
export default memo(TextArea);
