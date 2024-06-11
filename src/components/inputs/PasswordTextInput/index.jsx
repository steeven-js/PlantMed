import { memo, useContext, useState } from 'react';
import {
    TextInput as RNTextInput,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_eye_off from '../../../assets/icons/svg/ic_eye_off';
import ic_eye_on from '../../../assets/icons/svg/ic_eye_off copy';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const PasswordTextInput = ({ label, placeholder, value, onChangeText }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // State to track whether password is visible or not
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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

            <View style={styles.textInputWrapper}>
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
                    secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
                    value={value}
                    onChangeText={onChangeText}
                />

                {/* Eye icon wrapper */}
                <TouchableOpacity
                    style={styles.eyeIconWrapper}
                    onPress={togglePasswordVisibility} // Toggle password visibility on press
                >
                    <SvgXml
                        xml={showPassword ? ic_eye_on : ic_eye_off} // Use different icon based on showPassword state
                        width={STANDARD_VECTOR_ICON_SIZE}
                        height={STANDARD_VECTOR_ICON_SIZE}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

// Exporting
export default memo(PasswordTextInput);
