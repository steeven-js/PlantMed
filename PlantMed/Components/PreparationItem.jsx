import { View, Text } from 'react-native';
import React from 'react';

const PreparationItem = ({ item }) => {
    return (
        <View>
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
        </View>
    );
};

export default PreparationItem;
