import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

import {
    SCREEN_HEIGHT,
    STANDARD_FLEX,
    STANDARD_SPACING,
} from '../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
    mainWrapper: {
        flex: STANDARD_FLEX,
    },
    scrollViewContentContainerStyle: {
        padding: STANDARD_SPACING * 3,
    },
    verticalSpacer: {
        marginVertical: STANDARD_SPACING * 1.5,
    },
    noFavorisWrapper: {
        flex: STANDARD_FLEX,
        height: SCREEN_HEIGHT * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTitleAndLinkWrapper: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: STANDARD_SPACING * 3,
    },
    horizontalScrollViewContentContainerStyle: {
        marginHorizontal: STANDARD_SPACING * 1.5,
    },
    productWrapper: {
        marginHorizontal: STANDARD_SPACING * 3,
        paddingVertical: STANDARD_SPACING * 3,
        width: scale(130),
    },
    fullWidthBannerImageWrapper: {
        height: scale(171),
    },
});
