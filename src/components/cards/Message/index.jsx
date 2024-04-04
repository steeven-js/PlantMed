import { memo, useContext } from 'react';
import { Text, View } from 'react-native';

import { STANDARD_SPACING } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const Message = ({
    avatarSvg,
    senderName,
    messageAge,
    message,
    isLastItem,
}) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <View
            style={[
                styles.messageCard,
                { marginBottom: isLastItem ? 0 : STANDARD_SPACING * 3 },
            ]}
        >
            <View style={styles.avatarSvgWrapper}>{avatarSvg}</View>

            <View style={styles.messageWrapper}>
                {/* Message title & age wrapper */}
                <View style={styles.senderNameAndAgeWrapper}>
                    {/* Message title */}
                    <Text
                        style={[
                            styles.senderName,
                            { color: theme.textHighContrast },
                        ]}
                    >
                        {senderName}
                    </Text>

                    {/* Message age */}
                    <Text style={[styles.messageAge, { color: theme.accent }]}>
                        {messageAge}
                    </Text>
                </View>

                {/* Message message */}
                <Text
                    style={[styles.message, { color: theme.textLowContrast }]}
                    numberOfLines={4}
                    ellipsizeMode="tail"
                >
                    {message}
                </Text>
            </View>
        </View>
    );
};

// Exporting
export default memo(Message);
