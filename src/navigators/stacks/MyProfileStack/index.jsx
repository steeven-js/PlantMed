import styles from '../styles';
import {useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import Order from '../../../screens/Order';
import Orders from '../../../screens/Orders';
import Wallet from '../../../screens/Wallet';
import {TouchableOpacity} from 'react-native';
import Coupons from '../../../screens/Coupons';
import Invoice from '../../../screens/Invoice';
import Wishlist from '../../../screens/Wishlist';
import Messages from '../../../screens/Messages';
import MyProfile from '../../../screens/MyProfile';
import Addresses from '../../../screens/Addresses';
import {IndependentColors} from '../../../config/Colors';
import Notifications from '../../../screens/Notifications';
import {createStackNavigator} from '@react-navigation/stack';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';

// Creating stack navigator
const Stack = createStackNavigator();

// My profile stack
const MyProfileStack = () => {
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
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen name="Addresses" component={Addresses} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Invoice" component={Invoice} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Coupons" component={Coupons} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

// Exporting
export default MyProfileStack;
