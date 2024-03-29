import { StyleSheet } from 'react-native';
import {
    STANDARD_SPACING,
    STANDARD_FLEX,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
} from '../../config/Constants';
import { COLORS } from '../../config/Colors';

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
        justifyContent: 'flex-start',
    },
    verticalSpacer: {
        marginVertical: STANDARD_SPACING * 1.5,
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
        backgroundColor: COLORS.accent,
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