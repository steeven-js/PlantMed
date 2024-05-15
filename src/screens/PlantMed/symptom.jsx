import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Symptom = ({ route }) => {
    const { symptomId, setTitle } = route.params;
    const symptomData = useSelector((state) => state.symptoms.symptomsData.find(symptom => symptom.id === symptomId));

    // Récupérer la navigation
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: symptomData.name });
    }, [symptomData, setTitle, navigation]);

    return (
        <View>
            <Text>{symptomData.name}</Text>
        </View>
    );
};

export default Symptom;
