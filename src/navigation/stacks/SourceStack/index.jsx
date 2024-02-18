import {TouchableOpacity} from 'react-native';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, IndependentColors } from '../../../config/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../config/Constants';
import React from 'react'
import Source from '../../../screen/Source';
import styles from '../styles';

// Creating stack navigator
const Stack = createStackNavigator();

const SourceStack = () => {
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
                <MenuIcon name="menu" size={STANDARD_VECTOR_ICON_SIZE} color="#fff"/>
            </TouchableOpacity>
        ),
    });

    // Returning
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Source" component={Source} options={{ title: 'Source' }} />
        </Stack.Navigator>
    )
}

export default SourceStack