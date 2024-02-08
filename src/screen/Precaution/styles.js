import { StyleSheet } from 'react-native';
import { 
    FONT_SIZE_MD, 
    FONT_SIZE_LG, 
    FONT_SIZE_XL,
    DOSIS_BOLD, 
    DOSIS_MEDIUM 
} from '../../config/Constants';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        // backgroundColor: '#f1e3c6',
        borderRadius: 10,
        // borderColor: 'lightblue',
        // borderWidth: 3,
        margin: 20,
    },
    verticalSpacer: {
        marginVertical: 10 * 1.5,
    },
    content: {
        paddingHorizontal: 10,
    },
    title: {
        fontSize: FONT_SIZE_XL,
        fontFamily: 'Dosis-Bold',
        textAlign: 'left',
        color: '#283828',
    },
    soustitre: {
        fontSize: FONT_SIZE_LG,
        fontFamily: 'Dosis-Bold',
        textAlign: 'left',
        marginBottom: 10,
        color: '#283828',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Dosis-Medium',
        color: '#283828',
        fontSize: FONT_SIZE_MD,
        marginBottom: 10,
    },
});

export default styles;