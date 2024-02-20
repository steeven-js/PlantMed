import { StyleSheet } from 'react-native';
import { COLORS } from '../../config/Colors';
import { STANDARD_SPACING } from '../../config/Constants';

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
    text: {
        color: COLORS.white,
    },
});

export default styles;