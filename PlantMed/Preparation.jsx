import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Colors from './constants/Colors';
import { preparationApiUrl } from './Common/const';
import PreparationItem from './Components/PreparationItem';
import Back from './Components/Back';

const Preparation = () => {

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

    return (
        <ScrollView>
            <View>
                <Back />

                <View>
                    {isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                            {data.map((item) => (
                                <PreparationItem key={item.id} item={item} />
                            ))}
                        </View>
                    )}
                </View>
            </View>


            <View style={{ height: 50, backgroundColor: Colors.primary }}>
                <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
                    Preparation
                </Text>
            </View>

        </ScrollView >
    );
};

export default Preparation;
