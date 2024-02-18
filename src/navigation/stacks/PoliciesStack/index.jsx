import MenuIcon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, IndependentColors } from '../../../config/Colors';
import {TouchableOpacity} from 'react-native';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import styles from '../styles';
import Policies from '../../../screen/Policies';
import Policy from '../../../screen/Policy';

// Creating stack navigator
const Stack = createStackNavigator();

const PoliciesStack = () => {

    // Screen options
    const screenOptions = ({ navigation }) => ({
        headerTitleAlign: 'center',
        headerTitleStyle: [styles.headerTitle],
        headerTintColor: IndependentColors.white,
        headerStyle: [
            {
                backgroundColor: COLORS.accent,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
        ],
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={styles.leftArrowIcon}>
                <MenuIcon name="menu" size={STANDARD_VECTOR_ICON_SIZE} color="#fff"/>
            </TouchableOpacity>
        ),
    });

    // Returning
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Policies" component={Policies} options={{title: 'Conditions légales'}}/>
            <Stack.Screen name="Policy" component={Policy} options={{title: 'Condition légal'}}/>
        </Stack.Navigator>
    )
}

export default PoliciesStack