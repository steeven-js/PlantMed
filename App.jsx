import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fetch from './PlantMed/Fetch';
import PlantDetail from './PlantMed/PlantDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Fetch} />
        <Stack.Screen name="PlanteDetail" component={PlantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;