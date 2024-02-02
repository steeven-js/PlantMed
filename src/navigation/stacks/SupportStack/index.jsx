import styles from '../styles';
import {SvgXml} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {COLORS, IndependentColors} from '../../../config/Colors';
import {createStackNavigator} from '@react-navigation/stack';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import Support from '../../../screen/Support';
import ContactUs from '../../../screen/ContactUs';
import Faqs from '../../../screen/Faqs';

// Creating stack navigator
const Stack = createStackNavigator();

// Support stack
const SupportStack = () => {
  // Screen options
  const screenOptions = ({navigation}) => ({
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
      <Stack.Screen name="Help & Support" component={Support} options={{title:'Aide et support'}} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Faqs" component={Faqs} />
    </Stack.Navigator>
  );
};

// Exporting
export default SupportStack;
