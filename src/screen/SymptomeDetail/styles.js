import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../config/Colors';
import { FONT_SIZE_XL } from '../../config/Constants';

const { width } = Dimensions.get('window');
const numColumns = 2;
const columnWidth = width / numColumns;

const styles = StyleSheet.create({
    TopNavBar: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.accent,
    },
    textTopNavBar: {
        fontSize: FONT_SIZE_XL,
        color: 'white',
        fontFamily: 'Dosis-Medium',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: COLORS.textHighContrast,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    spacing: {
        color: 'white',
        height: 150,
    },
    plant: {
        width: columnWidth - 20,
        height: columnWidth - 20,
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        margin: 10,
        shadowColor: '#000',
    },
    favoritePlant: {
        width: columnWidth - 20,
        height: columnWidth - 20,
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        margin: 10,
    },
    plantInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 5,
    },
    plantName: {
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
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
});

export default styles;