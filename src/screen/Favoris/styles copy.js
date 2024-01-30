import { StyleSheet, Dimensions } from 'react-native';
import {
    STANDARD_SPACING,
    STANDARD_FLEX,
    SCREEN_WIDTH,
    SCREEN_HEIGHT
} from '../../config/Constants';
import { COLORS } from '../../config/Colors';

const { width } = Dimensions.get('window');
const numColumns = 2;
const columnWidth = width / numColumns;

const styles = StyleSheet.create({
    background: {
        flex: STANDARD_FLEX,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: COLORS.textHighContrast,
    },
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    verticalSpacer: {
        marginVertical: 10 * 1.5,
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
    favorite: {
        width: columnWidth - 20,
        height: columnWidth - 20,
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        margin: 10,
        shadowColor: COLORS.black,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    noFavorite: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionAndLinkWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingBottom: STANDARD_SPACING * 5,
    },
});

export default styles;