import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { preparationApiUrl } from './Common/const';
import Colors from './constants/Colors';
import PreparationItem from './Components/PreparationItem';

const Preparation = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getPreparation();
    }, []);

    const getPreparation = async () => {
        try {
            const response = await fetch(preparationApiUrl);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={handleGoBack}
                style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Text>
                    <Icon name="arrow-left" size={30} color={Colors.primary} />
                </Text>
                <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Back</Text>
            </TouchableOpacity>

            <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <PreparationItem item={item} />}
                        numColumns={2}
                    />
                )}
            </SafeAreaView>
        </View>
    );
};

export default Preparation;
