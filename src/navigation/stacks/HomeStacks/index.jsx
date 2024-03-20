import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import TopBar from '../../tabs/TopBar';
import Symptome from '../../../screen/Symptome';
import Plantes from '../../../screen/Plante';
import Favoris from '../../../screen/Favoris';

const HomeStack = createStackNavigator();

const HomeStacks = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                header: (props) => <TopBar {...props} />,
                animationEnabled: false,
            }}
        >
            <HomeStack.Screen name="Symptomes" component={Symptome} options={{title: 'Usages thérapeutiques'}}/>
            <HomeStack.Screen name="Plantes" component={Plantes} options={{title: 'Plantes médicinales'}}/>
            <HomeStack.Screen name="Favoris" component={Favoris} />
        </HomeStack.Navigator>
    );
};

export default HomeStacks;