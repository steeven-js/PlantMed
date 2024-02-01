import {View, ScrollView, Text} from 'react-native';
import { useCallback } from 'react';
import * as Animatable from 'react-native-animatable';
import styles from './styles'

// Functional component
const Policies = ({ navigation }) => {

    // Navigating to the specified screen
    const _navigateToScreen = useCallback(
        screen => navigation.navigate(screen),
        [],
    );

      // Returning
    return (
        <View>
            <Text>Policies</Text>
        </View>
    )
}

export default Policies