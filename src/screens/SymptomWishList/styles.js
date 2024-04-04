import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

import {
    FONT_SIZE_MD,
    FONT_SIZE_XS,
    POPPINS_REGULAR,
    POPPINS_SEMIBOLD,
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
    verticalSpacer: {
        marginVertical: STANDARD_SPACING * 1.5,
    },
    sectionTitleAndLinkWrapper: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: STANDARD_SPACING * 3,
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
    bannerImageWrapper: {
        height: scale(171),
        marginHorizontal: STANDARD_SPACING * 3,
    },
    bannerImage: {
        width: null,
        height: null,
        flex: STANDARD_FLEX,
        resizeMode: 'center',
    },
    productWrapper: {
        marginHorizontal: STANDARD_SPACING * 3,
        paddingVertical: STANDARD_SPACING * 3,
        width: scale(130),
    },
    fullWidthBannerImageWrapper: {
        height: scale(171),
        position: 'relative',
    },
    imageIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        padding: STANDARD_SPACING * 2,
    },
    imageIconsItem: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 50,
        padding: STANDARD_SPACING,
        marginHorizontal: STANDARD_SPACING,
    },
    scrollViewContentContainerStyle: {
        padding: STANDARD_SPACING * 3,
        flexGrow: 1,
        justifyContent: 'center',
    },
    profileName: {
        fontFamily: POPPINS_SEMIBOLD,
        fontSize: FONT_SIZE_MD,
    },
    screenHeaderAndTitleComponentWrapper: {
        marginHorizontal: STANDARD_SPACING * 3,
        marginBottom: STANDARD_SPACING * 3,
    },
    spacerVertical: {
        marginVertical: STANDARD_SPACING * 1.5,
    },
    flatGridWrapper: {
        flex: STANDARD_FLEX,
    },
    flatGrid: {
        flex: STANDARD_FLEX,
    },
});
