import { StyleSheet } from 'react-native';

import { IndependentColors } from '../../config/Colors';
import {
    DOSIS_BOLD,
    DOSIS_MEDIUM,
    FONT_SIZE_LG,
    FONT_SIZE_SM,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    STANDARD_BORDER_RADIUS,
    STANDARD_FLEX,
    STANDARD_SPACING,
} from '../../config/Constants';

const styles = StyleSheet.create({
    mainWrapper: {
        flex: STANDARD_FLEX,
    },
    formWrapper: {
        width: SCREEN_WIDTH,
        flex: STANDARD_FLEX,
        height: SCREEN_HEIGHT,
        padding: STANDARD_SPACING * 6,
        borderTopLeftRadius: STANDARD_SPACING * 6,
        borderTopRightRadius: STANDARD_SPACING * 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    verticalSpacer: {
        marginVertical: STANDARD_SPACING * 1.5,
    },
    logoWrapper: {
        marginHorizontal: STANDARD_SPACING * 2,
        marginVertical: STANDARD_SPACING * 2,
        padding: STANDARD_SPACING,
        borderRadius: STANDARD_BORDER_RADIUS * 20,
        width: 150,
        aspectRatio: 1,
        backgroundColor: IndependentColors.white,
    },
    logo: {
        width: null,
        height: null,
        flex: STANDARD_FLEX,
        resizeMode: 'contain',
    },
    brandName: {
        fontFamily: DOSIS_BOLD,
        fontSize: FONT_SIZE_LG,
        color: IndependentColors.white,
    },
    brandSlogan: {
        fontFamily: DOSIS_MEDIUM,
        fontSize: FONT_SIZE_SM,
        color: IndependentColors.white,
    },
    socialMediaIconsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    questionAndLinkWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default styles;
