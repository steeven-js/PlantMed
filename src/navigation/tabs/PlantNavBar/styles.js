import { StyleSheet } from 'react-native';
import { COLORS } from '../../../config/Colors';

const styles = StyleSheet.create({
    backgroundImage: {
        height: 300,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    divAboveTabs: {
        padding: 10,
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    divAboveTabsContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    divAboveRightContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: {
        padding: 10,
    },
    share: {
        padding: 10,
        marginRight: 10,
    },
    star: {
        padding: 10,
    },
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.blackBackground,
    },
    touchableOpacity: {
        padding: 10,
        width: '20%',
        alignItems: 'center',
    },
    bgIcon: {
        backgroundColor: COLORS.blackBackground,
        borderRadius: 50,
    },
});

export default styles;