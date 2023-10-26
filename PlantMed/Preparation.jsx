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
            <View style={{ padding: 10 }}>
                <Back />

                {isLoading ? <ActivityIndicator /> :
                    <View>

                        <View>
                            <Text>
                                Il existe de nombreuses méthodes d'administration des plantes médicinales dont la description est donnée ci-dessous.
                                On veillera à utiliser la partie utile de la plante ; la composition chimique varie d'une partie à l'autre et, pour l'exem-ple, si les feuilles sont décrites comme efficaces, la racine peut être inerte, voir toxique.
                            </Text>
                        </View>

                        <View>
                            {isLoading ? (
                                <ActivityIndicator />
                            ) : (
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
                                    {data.map((item) => (
                                        <PreparationItem key={item.id} item={item} />
                                    ))}
                                </View>
                            )}
                        </View>

                        <View style={{ height: 50, backgroundColor: Colors.primary }}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
                                Preparation
                            </Text>
                        </View>

                    </View>
                }
            </View>

        </ScrollView >
    );
};

export default Preparation;
