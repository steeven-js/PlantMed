import styles from '../styles';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { COLORS, IndependentColors } from '../../../config/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import Support from '../../../screen/Support';
import ContactUs from '../../../screen/ContactUs';
import Faqs from '../../../screen/Faqs';

// Creating stack navigator
const Stack = createStackNavigator();

// Support stack
const SupportStack = () => {
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
        <MenuIcon name="menu" size={STANDARD_VECTOR_ICON_SIZE} color="#fff" />
      </TouchableOpacity>
    ),
  });

  // Returning
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Help & Support" component={Support} options={{ title: 'Aide et support' }} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Faqs" component={Faqs} />
    </Stack.Navigator>
  );
};

// Exporting
export default SupportStack;
