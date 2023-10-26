import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const CategoryItem = ({ item }) => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('CategoryDetail', { id: item.id });
    };
    return (
        <TouchableOpacity onPress={handlePress} >
            <View
                style={{
                    width: 150,
                    height: 150,
                    margin: 10,
                    backgroundColor: 'lightgray',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity >
    )
}

export default CategoryItem
