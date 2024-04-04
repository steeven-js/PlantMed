import { memo, useContext } from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_star from '../../../assets/icons/svg/ic_star';
import {
    STANDARD_SPACING,
    STANDARD_VECTOR_ICON_SIZE,
} from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from './styles';

// Functional component
const BuyerReview = ({
    buyerAvatarSvg,
    buyerName,
    reviewAge,
    rating,
    review,
    isLastItem,
}) => {
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
        <View
            style={[
                styles.buyerReviewCard,
                {
                    backgroundColor: theme.secondary,
                    marginBottom: isLastItem ? 0 : STANDARD_SPACING * 3,
                },
            ]}
        >
            <View style={styles.buyerReviewCardHeader}>
                <View style={styles.buyerAvatarSvgNameWrapper}>
                    {buyerAvatarSvg}
                    <View style={styles.buyerNameAndReviewAgeWrapper}>
                        <Text
                            style={[
                                styles.buyerName,
                                { color: theme.textHighContrast },
                            ]}
                        >
                            {buyerName}
                        </Text>
                        <Text
                            style={[styles.reviewAge, { color: theme.accent }]}
                        >
                            ({reviewAge})
                        </Text>
                    </View>
                </View>
                <View style={styles.ratingStarsWrapper}>
                    {/* Displaying rating stars */}
                    {getRatingStars(rating)}
                </View>
            </View>
            <Text style={[styles.review, { color: theme.textLowContrast }]}>
                {review}
            </Text>
        </View>
    );
};

// Exporting
export default memo(BuyerReview);
