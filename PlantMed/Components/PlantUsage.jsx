import {View, Text} from 'react-native';
import React from 'react';

const PlantUsage = ({item}) => {
  return (
    <View style={{paddingVertical: 10}}>
      <Text style={{fontWeight: 'bold'}}>{item.symptome_name}</Text>
      <Text>{item.notes}</Text>
    </View>
  );
};

export default PlantUsage;
