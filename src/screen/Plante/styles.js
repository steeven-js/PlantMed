import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../config/Colors';

const { width } = Dimensions.get('window');
const numColumns = 2;
const columnWidth = width / numColumns;

export default StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: COLORS.textHighContrast,
    },
    overlay: {
        flex: 1,
    },
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spacing: {
        color: COLORS.white,
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
        backgroundColor: COLORS.blackBackground,
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