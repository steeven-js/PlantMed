import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import TopBar from '../../navigation/tabs/TopBar';
import Symptome from '../Symptome';
import Plantes from '../Plante';
import Favoris from '../Favoris';

const HomeStack = createStackNavigator();

const Home = () => {
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

export default Home;