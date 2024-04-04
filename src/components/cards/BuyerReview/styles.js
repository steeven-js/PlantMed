import { StyleSheet } from 'react-native';

import {
    FONT_SIZE_XS,
    FONT_SIZE_XXS,
    POPPINS_REGULAR,
    POPPINS_SEMIBOLD,
    STANDARD_BORDER_RADIUS,
    STANDARD_CARD_MIN_HEIGHT,
    STANDARD_SPACING,
} from '../../../config/Constants';

// Exporting style
export default StyleSheet.create({
    buyerReviewCard: {
        padding: STANDARD_SPACING * 3,
        minHeight: STANDARD_CARD_MIN_HEIGHT,
        borderRadius: STANDARD_BORDER_RADIUS,
        justifyContent: 'space-between',
    },
    buyerReviewCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buyerAvatarSvgNameWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buyerNameAndReviewAgeWrapper: {
        marginLeft: STANDARD_SPACING * 3,
    },
    buyerName: {
        fontFamily: POPPINS_SEMIBOLD,
        fontSize: FONT_SIZE_XS,
    },
    reviewAge: {
        fontFamily: POPPINS_REGULAR,
        fontSize: FONT_SIZE_XXS,
    },
    ratingStarsWrapper: {
        flexDirection: 'row',
    },
    review: {
        marginTop: STANDARD_SPACING * 1.5,
        fontFamily: POPPINS_REGULAR,
        fontSize: FONT_SIZE_XXS,
    },
});
