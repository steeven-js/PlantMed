import { memo, useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_minus_dark_green from '../../../assets/icons/svg/ic_minus_dark_green';
import ic_plus_dark_green from '../../../assets/icons/svg/ic_plus_dark_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const CartProduct = ({
    productImage,
    productTitle,
    productPrice,
    productQuantity,
}) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <View
            style={[styles.productCard, { backgroundColor: theme.secondary }]}
        >
            <View
                style={[
                    styles.productImageWrapper,
                    { backgroundColor: theme.primary },
                ]}
            >
                <Image source={productImage} style={styles.productImage} />
            </View>
            {/* Product details wrapper */}
            <View style={styles.productDetailsWrapper}>
                {/* Product title & price */}
                <View>
                    <Text
                        style={[
                            styles.productTitle,
                            { color: theme.textHighContrast },
                        ]}
                        numberOfLines={1}
                    >
                        {productTitle}
                    </Text>
                    <Text
                        style={[styles.productPrice, { color: theme.accent }]}
                    >
                        {productPrice}
                    </Text>
                </View>
            </View>

            {/* Quantity wrapper */}
            <View
                style={[
                    styles.productQuantityWrapper,
                    { borderColor: theme.accent },
                ]}
            >
                {/* Plus icon wrapper */}
                <TouchableOpacity
                    style={[
                        styles.plusIconWrapper,
                        { backgroundColor: theme.primary },
                    ]}
                >
                    <SvgXml
                        xml={ic_plus_dark_green}
                        width={STANDARD_VECTOR_ICON_SIZE * 0.9}
                        height={STANDARD_VECTOR_ICON_SIZE * 0.9}
                    />
                </TouchableOpacity>

                {/* Quantity */}
                <Text
                    style={[
                        styles.productQuantity,
                        { color: theme.textHighContrast },
                    ]}
                >
                    {productQuantity}
                </Text>

                {/* Minus icon wrapper */}
                <TouchableOpacity
                    style={[
                        styles.minusIconWrapper,
                        { backgroundColor: theme.primary },
                    ]}
                >
                    <SvgXml
                        xml={ic_minus_dark_green}
                        width={STANDARD_VECTOR_ICON_SIZE * 0.9}
                        height={STANDARD_VECTOR_ICON_SIZE * 0.9}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Exporting
export default memo(CartProduct);
