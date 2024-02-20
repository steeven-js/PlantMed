import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../config/Colors';
import { STANDARD_SPACING } from '../../config/Constants';

const { width } = Dimensions.get('window');
const numColumns = 2;
const columnWidth = width / numColumns;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: COLORS.textHighContrast,
        padding: 10,
    },
    symptomeItem: {
        marginBottom: 10,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'rgba(30, 30, 30, 0.4)',
        padding: 10,
    },
    symptomeName: {
        color: 'white',
        textAlign: 'left',
        fontFamily: 'Dosis-Regular',
        marginLeft: 10,
        width: '100%',
        // backgroundColor: 'red',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
    },
    imageBackground: {
        width: 50,
        height: 50,
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    icon: {
        padding: 10,
        width: 25,
        height: 25,
    },
    verticalSpacer: {
        marginVertical: STANDARD_SPACING * 1.5,
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
    text: {
        color: COLORS.white,
    },
});

export default styles;