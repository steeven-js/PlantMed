import { StyleSheet, Dimensions } from 'react-native';
import {
    STANDARD_FLEX,
    STANDARD_SPACING,
    FONT_SIZE_SM,
    FONT_SIZE_LG,
    FONT_SIZE_XL,
} from '../../config/Constants';
import { COLORS } from '../../config/Colors';

const { width } = Dimensions.get('window');
const numColumns = 2;
const columnWidth = width / numColumns;

const styles = StyleSheet.create({
    background: {
        flex: STANDARD_FLEX,
        resizeMode: 'cover',
        backgroundColor: COLORS.textHighContrast,
    },
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    favorite: {
        width: columnWidth - 20,
        height: columnWidth - 20,
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        borderColor: COLORS.white,
        margin: 10,
    },
    favoriteInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: COLORS.blackBackground,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 5,
    },
    favoriteName: {
        color: COLORS.white,
        textAlign: 'center',
        fontFamily: 'Dosis-Regular',
        fontWeight: '500',
        fontSize: 22,
    },
    plantImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    loadingContainer: {
        flex: STANDARD_FLEX,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
        flex: STANDARD_FLEX,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: STANDARD_FLEX,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    noFavorite: {
        flex: STANDARD_FLEX,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionAndLinkWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingBottom: STANDARD_SPACING * 5,
    },
    backgroundLogOut: {
        flex: STANDARD_FLEX,
        justifyContent: 'center',
        backgroundColor: COLORS.secondary,
        padding: STANDARD_SPACING * 5,
    },
    backgroundNoFavoris: {
        flex: STANDARD_FLEX,
        justifyContent: 'center',
        backgroundColor: COLORS.secondary,
        padding: STANDARD_SPACING * 5,
    },
    verticalSpacer: {
        marginVertical: STANDARD_SPACING * 5,
    },
});

export default styles;