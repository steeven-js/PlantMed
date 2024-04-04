import { memo, useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const PlantGridView = ({
    plantImage = null,
    plantTitle = '',
    onPress = () => {},
}) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <TouchableOpacity
            style={[styles.productCard, { backgroundColor: theme.secondary }]}
            onPress={onPress}
        >
            {/* Rotated background */}
            <View
                style={[
                    styles.rotatedBackground,
                    { borderColor: theme.secondary },
                ]}
            />
            {/* Product image */}
            {plantImage && (
                <Image source={plantImage} style={styles.productImage} />
            )}

            {/* Product title */}
            <Text
                style={[styles.productTitle, { color: theme.textHighContrast }]}
                numberOfLines={1}
                ellipsizeMode="tail"
            >
                {plantTitle}
            </Text>
        </TouchableOpacity>
    );
};

// Exporting
export default memo(PlantGridView);
