import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const GridViewProducts3 = ({ route }) => {
  const { symptomId } = route.params;
  const symptomData = useSelector((state) => state.symptoms.symptomsData.find(symptom => symptom.id === symptomId));
  console.log('symptomData', symptomData);
  return (
    <View>
      <Text>GridViewProducts3</Text>
    </View>
  );
};

export default GridViewProducts3;
