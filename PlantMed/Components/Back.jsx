import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import React from 'react'

const Back = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <TouchableOpacity
            onPress={handleGoBack}
            style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
            <Text>
                <Icon name="arrow-left" size={30} color={Colors.primary} />
            </Text>
            <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Retour</Text>
        </TouchableOpacity>
    )
}

export default Back