import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeStacks from '../HomeStacks';
import SymptomeStack from '../SymptomStack';
import PlanteStack from '../PlanteStack';
import SearchStack from '../SearchStack';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeStacks} />
            <Stack.Screen name="SymptomeStack" component={SymptomeStack} />
            <Stack.Screen name="PlanteStack" component={PlanteStack} />
            <Stack.Screen name="SearchStack" component={SearchStack} />
        </Stack.Navigator>
    )
}

export default HomeStack