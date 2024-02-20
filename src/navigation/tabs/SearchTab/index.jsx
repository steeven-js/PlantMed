import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import PlantSearchScreen from '../../../screen/PlantSearchScreen';
import SymptomSearchScreen from '../../../screen/SymptomSearchScreen';

const Tab = createMaterialTopTabNavigator();

const SearchTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="SymptomSearch" component={SymptomSearchScreen} options={{title: 'Usages thérapeutiques'}} />
            <Tab.Screen name="PlantSearch" component={PlantSearchScreen} options={{title: 'Plantes médicinales'}} />
        </Tab.Navigator>
    )
}

export default SearchTab 