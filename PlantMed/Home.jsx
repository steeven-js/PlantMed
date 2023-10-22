import React from 'react';
import { View, Text, FlatList } from 'react-native';
import indexTherapeutique from './data';

const Home = () => {
    return (
        <View>
            <FlatList
                data={indexTherapeutique}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.category}</Text>
                        <Text>{item.items}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Home;
