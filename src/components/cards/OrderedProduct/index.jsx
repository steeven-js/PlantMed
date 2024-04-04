import { memo, useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_star from '../../../assets/icons/svg/ic_star';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const OrderedProduct = ({
    productImage,
    productTitle,
    moreProductsCount,
    status,
    statusTextColor,
    statusBgColor,
    rating,
    orderDate,
    deliveryDate,
    onPress,
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
            {/* Product image wrapper */}
            <View
                style={[
                    styles.productImageWrapper,
                    { backgroundColor: theme.primary },
                ]}
            >
                {/* Product image */}
                <Image source={productImage} style={styles.productImage} />

                {/* More items count */}
                <View
                    style={[
                        styles.moreProductsCountWrapper,
                        { backgroundColor: theme.secondary },
                    ]}
                >
                    <Text
                        style={[
                            styles.moreProductsCount,
                            { color: theme.textHighContrast },
                        ]}
                    >
                        +{moreProductsCount}
                    </Text>
                </View>
            </View>

            {/* Order details wrapper */}
            <View style={styles.orderDetailsWrapper}>
                <View>
                    <Text
                        numberOfLines={1}
                        style={[
                            styles.productTitle,
                            { color: theme.textHighContrast },
                        ]}
                    >
                        {productTitle}
                    </Text>
                    <View style={styles.productStatusAndRatingWrapper}>
                        <View
                            style={[
                                styles.statusWrapper,
                                { backgroundColor: statusBgColor },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.status,
                                    { color: statusTextColor },
                                ]}
                            >
                                {status}
                            </Text>
                        </View>
                        {rating !== null ? (
                            <View style={styles.starAndRatingWrapper}>
                                <SvgXml
                                    xml={ic_star}
                                    width={STANDARD_VECTOR_ICON_SIZE * 0.75}
                                    height={STANDARD_VECTOR_ICON_SIZE * 0.75}
                                />
                                <Text
                                    style={[
                                        styles.rating,
                                        { color: theme.accent },
                                    ]}
                                >
                                    {rating.toFixed(1)}
                                </Text>
                            </View>
                        ) : null}
                    </View>
                </View>

                {/* Date */}
                <View style={styles.datesWrapper}>
                    <Text
                        style={[styles.date, { color: theme.textLowContrast }]}
                    >
                        {orderDate}
                    </Text>
                    <Text
                        style={[
                            styles.dateDivider,
                            { color: theme.textLowContrast },
                        ]}
                    >
                        |
                    </Text>
                    <Text
                        style={[styles.date, { color: theme.textLowContrast }]}
                    >
                        {deliveryDate}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

// Exporting
export default memo(OrderedProduct);
