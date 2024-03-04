import styles from '../styles';
import { SvgXml } from 'react-native-svg';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import { TouchableOpacity } from 'react-native';
import { COLORS, IndependentColors } from '../../../config/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import Settings from '../../../screen/Settings';
import EditProfile from '../../../screen/EditProfile';
import ResetPassword from '../../../screen/ResetPassword';
import NotificationSettings from '../../../screen/NotificationSettings';

// Creating stack navigator
const Stack = createStackNavigator();

// Settings stack
const SettingsStack = () => {

  // Screen options
  const screenOptions = ({ navigation }) => ({
    headerTitleAlign: 'center',
    headerTitleStyle: [styles.headerTitle],
    headerTintColor: IndependentColors.white,
    headerShown: true,
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
      <Stack.Screen name="Settings" component={Settings} options={{ title: "Paramètres" }} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: "Modifier le profil" }}
      />
      <Stack.Screen name="Reset Password" component={ResetPassword} options={{ title: "Modifier le mot de passe" }} />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettings}
        options={{ title: "Paramètre de notification" }}
      />
    </Stack.Navigator>
  );
};

// Exporting
export default SettingsStack;
