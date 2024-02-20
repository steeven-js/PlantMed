import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import styles from '../styles';
import SearchTab from '../../tabs/SearchTab';
import { COLORS, IndependentColors } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';

const Stack = createNativeStackNavigator();

const SearchStack = () => {

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

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Search" component={SearchTab} options={{title: 'Recherche'}} />
    </Stack.Navigator>
  )
}

export default SearchStack