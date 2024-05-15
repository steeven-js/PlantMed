import styles from '../styles';
import {useContext} from 'react';
import Faqs from '../../../screens/Faqs';
import {SvgXml} from 'react-native-svg';
import Chats from '../../../screens/Chats';
import {TouchableOpacity} from 'react-native';
import Support from '../../../screens/Support';
import ContactUs from '../../../screens/ContactUs';
import {IndependentColors} from '../../../config/Colors';
import {createStackNavigator} from '@react-navigation/stack';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';

// Creating stack navigator
const Stack = createStackNavigator();

// Support stack
const SupportStack = () => {
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
      <Stack.Screen name="Help & Support" component={Support} />
      <Stack.Screen
        name="Chats"
        component={Chats}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Faqs" component={Faqs} />
    </Stack.Navigator>
  );
};

// Exporting
export default SupportStack;
