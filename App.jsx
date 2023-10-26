import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Plant from './PlantMed/Plant';
import Home from './PlantMed/Home';
import Preparation from './PlantMed/Preparation';
import PreparationDetail from './PlantMed/PreparationDetail';
import PlantDetail from './PlantMed/PlantDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Plant" component={Plant} />
        <Stack.Screen name="PlanteDetail" component={PlantDetail} />
        <Stack.Screen name="Preparation" component={Preparation} />
        <Stack.Screen name="PreparationDetail" component={PreparationDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
