import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_arrow_left_white from '../../../assets/icons/svg/ic_arrow_left_white';
import { IndependentColors } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import Categories from '../../../screens/Categories';
import GridViewProducts from '../../../screens/GridViewProducts';
import Home from '../../../screens/Home';
import ListViewProducts from '../../../screens/ListViewProducts';
import Product from '../../../screens/Product';
import ProductReviews from '../../../screens/ProductReviews';
import { ThemeContext } from '../../../theming/contexts/ThemeContext';
import styles from '../styles';

// Creating stack navigator
const Stack = createStackNavigator();

// Home stack
const HomeStack = () => {
    // Using context
    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    // Storing theme config according to the theme mode
    const theme = isLightTheme ? lightTheme : darkTheme;

    // Navigation
    const navigation = useNavigation();

    // Screen options
    const screenOptions = () => ({
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
                style={styles.leftArrowIcon}
            >
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
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen
                name="List View Products"
                component={ListViewProducts}
            />
            <Stack.Screen
                name="Grid View Products"
                component={GridViewProducts}
            />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Product Reviews" component={ProductReviews} />
        </Stack.Navigator>
    );
};

// Exporting
export default HomeStack;
