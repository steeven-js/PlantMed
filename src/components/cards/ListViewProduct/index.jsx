import { memo, useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_bag_white from '../../../assets/icons/svg/ic_bag_white';
import ic_star from '../../../assets/icons/svg/ic_star';
import {
    STANDARD_SPACING,
    STANDARD_VECTOR_ICON_SIZE,
} from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const ListViewProduct = ({
    productImage,
    productTitle,
    productPrice,
    rating,
    isLastItem,
    onPress,
}) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Returning
    return (
        <TouchableOpacity
            style={[
                styles.productCard,
                {
                    backgroundColor: theme.secondary,
                    marginBottom: isLastItem ? 0 : STANDARD_SPACING * 3,
                },
            ]}
            onPress={onPress}
        >
            {/* Product image wrapper */}
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
                {/* Product title, price & rating wrapper */}
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
                    <View style={styles.productPriceAndRatingWrapper}>
                        <Text
                            style={[
                                styles.productPrice,
                                { color: theme.accent },
                            ]}
                        >
                            {productPrice}
                        </Text>
                        <View style={styles.starAndRatingWrapper}>
                            <SvgXml
                                xml={ic_star}
                                width={STANDARD_VECTOR_ICON_SIZE * 0.75}
                                height={STANDARD_VECTOR_ICON_SIZE * 0.75}
                            />
                            <Text
                                style={[styles.rating, { color: theme.accent }]}
                            >
                                {rating}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Bag icon wrapper */}
            <TouchableOpacity
                style={[
                    styles.bagIconWrapper,
                    { backgroundColor: theme.accent },
                ]}
            >
                <SvgXml
                    xml={ic_bag_white}
                    width={STANDARD_VECTOR_ICON_SIZE}
                    height={STANDARD_VECTOR_ICON_SIZE}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

// Exporting
export default memo(ListViewProduct);
