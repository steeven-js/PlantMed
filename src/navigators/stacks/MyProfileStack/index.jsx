import styles from '../styles';
import { useContext } from 'react';
import { SvgXml } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import Wishlist from '../../../screens/Wishlist';
import MyProfile from '../../../screens/MyProfile';
import { IndependentColors } from '../../../config/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import ic_logout_dark_white from '../../../assets/icons/svg/ic_logout_dark_white';
import handleLogout from '../../../functions/handleLogout';

// Creating stack navigator
const Stack = createStackNavigator();

// My profile stack
const MyProfileStack = () => {
  // Using context
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Screen options
  const screenOptions = ({ navigation }) => ({
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
    headerRight: () => (
      <TouchableOpacity onPress={handleLogout} style={styles.rightIcon}>
        <SvgXml
          xml={ic_logout_dark_white}
          width={STANDARD_VECTOR_ICON_SIZE}
          height={STANDARD_VECTOR_ICON_SIZE}
        />
      </TouchableOpacity>
    ),
  });

  // Returning
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
    </Stack.Navigator>
  );
};

// Exporting
export default MyProfileStack;
