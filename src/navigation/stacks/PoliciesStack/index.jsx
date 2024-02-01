import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import {SvgXml} from 'react-native-svg';
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
                onPress={() => navigation.goBack()}
                style={styles.leftArrowIcon}>
                <SvgXml
                    xml={ic_arrow_left_white}
                    width={STANDARD_VECTOR_ICON_SIZE}
                    height={STANDARD_VECTOR_ICON_SIZE}
                />
            </TouchableOpacity>
        ),
    });

    // Returning
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Policies" component={Policies} />
            <Stack.Screen name="Policy" component={Policy} />
        </Stack.Navigator>
    )
}

export default PoliciesStack