import { StyleSheet } from 'react-native';
import { COLORS } from '../../../config/Colors';

const styles = StyleSheet.create({
    topNav: {
        backgroundColor: COLORS.accent,
    },
    header: {
        flexDirection: 'column', 
    },
    icon: {
        padding: 10,
        marginTop: 10,
    },
    TopNavBar: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textTopNavBar: {
        fontSize: 22,
        color: COLORS.white,
        fontFamily: 'Dosis-Medium',
        flex: 1,
        textAlign: 'center',
    },
    Touch: {
        padding: 10,
        // backgroundColor: 'red'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tab: {
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
        textAlign: 'center',
    },
    activeTab1: {
        borderBottomColor: COLORS.white,
    },
    activeTab2: {
        borderBottomColor: COLORS.white,
    },
    activeTab3: {
        borderBottomColor: COLORS.white,
    },
});

export default styles;