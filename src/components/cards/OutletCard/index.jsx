import { memo, useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_star from '../../../assets/icons/svg/ic_star';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const OutletCard = ({ outletImage, outletName, rating, priceRange }) => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Getting rating stars
    const getRatingStars = (count) => {
        // Declaring an empty array
        const stars = [];

        // Iterating
        for (let index = 0; index < count; index++) {
            // Pushing into array
            stars.push(
                <View key={index}>
                    <SvgXml
                        xml={ic_star}
                        width={STANDARD_VECTOR_ICON_SIZE * 0.65}
                        height={STANDARD_VECTOR_ICON_SIZE * 0.65}
                    />
                </View>,
            );
        }

        // Returning
        return stars;
    };

    // Returning
    return (
        <View style={styles.outletWrapper}>
            <View style={styles.outletImageWrapper}>
                <Image source={outletImage} style={styles.outletImage} />
            </View>

            <View
                style={[
                    styles.outletDetailsWrapper,
                    { backgroundColor: theme.secondary },
                ]}
            >
                {/* Outlet name */}
                <Text
                    style={[
                        styles.outletName,
                        { color: theme.textHighContrast },
                    ]}
                    numberOfLines={1}
                >
                    {outletName}
                </Text>

                {/* Rating wrapper */}
                <View style={styles.outletRatingWrapper}>
                    <View style={styles.outletRatingStarsWrapper}>
                        {/* Displaying rating stars */}
                        {getRatingStars(rating)}
                    </View>
                    <Text
                        style={[styles.outletRating, { color: theme.accent }]}
                    >
                        {rating.toFixed(1)}
                    </Text>
                </View>

                {/* Price range */}
                <View style={styles.outletPriceRangeWrapper}>
                    <Text
                        style={[
                            styles.outletPriceRangeLabel,
                            { color: theme.accent },
                        ]}
                    >
                        Price range:
                    </Text>
                    <Text
                        style={[
                            styles.outletPriceRange,
                            { color: theme.textHighContrast },
                        ]}
                    >
                        {priceRange}
                    </Text>
                </View>
            </View>
        </View>
    );
};

// Exporting
export default memo(OutletCard);
