import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Welcome from './src/screen/Welcome/Index';
import Home from './src/screen/Home/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
