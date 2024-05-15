import styles from '../styles';
import {useContext} from 'react';
import Cart from '../../../screens/Cart';
import {SvgXml} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import Checkout from '../../../screens/Checkout';
import {IndependentColors} from '../../../config/Colors';
import PaymentStatus from '../../../screens/PaymentStatus';
import {createStackNavigator} from '@react-navigation/stack';
import PaymentMethods from '../../../screens/PaymentMethods';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';

// Creating stack navigator
const Stack = createStackNavigator();

// Cart stack
const CartStack = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Screen options
  const screenOptions = ({navigation}) => ({
    headerTitleAlign: 'center',
    headerTitleStyle: [styles.headerTitle],
    headerTintColor: IndependentColors.white,
    headerStyle: [
      {
        backgroundColor: theme.accent,
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
    <Stack.Navigator initialRouteName="Cart" screenOptions={screenOptions}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Payment Methods" component={PaymentMethods} />
      <Stack.Screen name="Payment Status" component={PaymentStatus} />
    </Stack.Navigator>
  );
};

// Exporting
export default CartStack;
