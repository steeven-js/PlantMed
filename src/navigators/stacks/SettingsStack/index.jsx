import styles from '../styles';
import {useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import Settings from '../../../screens/Settings';
import Languages from '../../../screens/Languages';
import EditProfile from '../../../screens/EditProfile';
import {IndependentColors} from '../../../config/Colors';
import ResetPassword from '../../../screens/ResetPassword';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import NotificationSettings from '../../../screens/NotificationSettings';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';

// Creating stack navigator
const Stack = createStackNavigator();

// Settings stack
const SettingsStack = () => {
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
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
      <Stack.Screen name="Reset Password" component={ResetPassword} />
      <Stack.Screen
        name="Notification Settings"
        component={NotificationSettings}
      />
      <Stack.Screen name="Languages" component={Languages} />
    </Stack.Navigator>
  );
};

// Exporting
export default SettingsStack;
