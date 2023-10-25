import {TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const PreparationItem = ({ item }) => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('PreparationDetail', { id: item.id });
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
                }}>
                <Text style={{fontWeight: 'bold', padding: 10, textAlign: 'center'}}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default PreparationItem;
