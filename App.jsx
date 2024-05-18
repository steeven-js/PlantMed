import AppStyles from './AppStyles';
import { Provider } from 'react-redux';
import Splash from './src/screens/Splash';
import { SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Statusbar from './src/components/others/Statusbar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContextProvider } from './src/theming/context_providers/ThemeContextProvider';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';
import Welcome from './src/screens/Welcome/Index';
import LaunchApp from './src/screens/launchApp';

const Stack = createStackNavigator();

// Functional component
const App = () => {
  // Local states
  const [isStarting, setIsStarting] = useState(true);

  // Hooks
  useEffect(() => {
    // Updating state value after 2500 milliseconds(2.5 seconds) of delay.
    setTimeout(() => {
      // Updating states
      setIsStarting(false);
    }, 2500);
  }, []);

  // Checking
  if (isStarting) {
    // Returning
    return <Splash />;
  }

  // Returning
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <NavigationContainer>
          <Statusbar barStyle="light-content" />
          <SafeAreaView style={AppStyles.safeAreaView}>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{
              headerShown: false,
            }}>
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="LaunchApp" component={LaunchApp} />
            </Stack.Navigator>
          </SafeAreaView>
          <Toast />
        </NavigationContainer>
      </ThemeContextProvider>
    </Provider>
  );
};

// Exporting
export default App;
