import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

import {
    FONT_SIZE_SM,
    FONT_SIZE_XS,
    POPPINS_MEDIUM,
    POPPINS_REGULAR,
    SCREEN_HEIGHT,
    STANDARD_FLEX,
    STANDARD_SPACING,
} from '../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
    mainWrapper: {
        flex: STANDARD_FLEX,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: STANDARD_SPACING * 3,
    },
    svgBg: {
        backgroundColor: '#588157',
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    verticalSpacer: {
        marginVertical: STANDARD_SPACING * 1.5,
    },
    sectionTitleAndLinkWrapper: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: STANDARD_SPACING * 3,
    },
    sectionTitle: {
        fontFamily: POPPINS_MEDIUM,
        fontSize: FONT_SIZE_SM,
    },
    sectionSearch: {
        marginVertical: STANDARD_SPACING * 1.5,
    },
    categoryLabelWrapper: {
        padding: STANDARD_SPACING * 2,
        borderRadius: STANDARD_SPACING,
        marginHorizontal: STANDARD_SPACING * 1.5,
    },
    categoryLabel: {
        fontFamily: POPPINS_REGULAR,
        fontSize: FONT_SIZE_XS,
    },
    horizontalScrollViewContentContainerStyle: {
        marginHorizontal: STANDARD_SPACING * 1.5,
    },
    verticalScrollViewContentContainerStyle: {
        marginHorizontal: STANDARD_SPACING * 1.5,
    },
    bannerImageWrapper: {
        height: scale(171),
        marginHorizontal: STANDARD_SPACING * 3,
    },
    bannerImage: {
        width: null,
        height: null,
        flex: STANDARD_FLEX,
        resizeMode: 'cover',
    },
    productWrapper: {
        marginHorizontal: STANDARD_SPACING * 3,
        paddingVertical: STANDARD_SPACING * 3,
        width: scale(130),
    },
    fullWidthBannerImageWrapper: {
        height: scale(171),
    },
    sectionSearchWrapper: {
        marginHorizontal: STANDARD_SPACING * 3,
    },
    searchTitle: {
        fontFamily: POPPINS_MEDIUM,
        fontSize: FONT_SIZE_SM,
    },
    flatGridWrapper: {
        flex: STANDARD_FLEX,
    },
    flatGrid: {
        flex: STANDARD_FLEX,
    },
    scrollViewContentContainerStyle: {
        padding: STANDARD_SPACING * 3,
    },
    listItemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    scrollViewContent: {
        flexGrow: 1,
        // paddingVertical: 20,
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
