import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContextProvider } from './src/theming/context_providers/ThemeContextProvider';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/Welcome/Index';
import LaunchApp from './src/screens/launchApp';
import Statusbar from './src/components/others/Statusbar';
import { BannerAd, BannerAdSize } from '@react-native-admob/admob';

const Stack = createStackNavigator();

// AdMob unit IDs
const adUnitId = Platform.OS === 'ios'
  ? 'ca-app-pub-2536948516491703/5832444748'
  : 'ca-app-pub-2536948516491703/8832931036';

async function query(data) {
  const response = await fetch(
    'http://localhost:3000/api/v1/prediction/c24bbcf3-5107-4b8c-954a-8b2d29c25bf5',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

query({ 'question': 'Hey, how are you?' }).then((response) => {
  console.log(response);
});

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
          <Stack.Navigator initialRouteName="Welcome" screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="LaunchApp" component={LaunchApp} />
          </Stack.Navigator>
          <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ADAPTIVE_BANNER}
          />
          <Toast />
        </NavigationContainer>
      </ThemeContextProvider>
    </Provider>
  );
};

// Exporting
export default App;
