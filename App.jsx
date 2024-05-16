import AppStyles from './AppStyles';
import { Provider } from 'react-redux';
import Splash from './src/screens/Splash';
import { SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Statusbar from './src/components/others/Statusbar';
import HomeDrawer from './src/navigators/drawers/HomeDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContextProvider } from './src/theming/context_providers/ThemeContextProvider';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';

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
            <HomeDrawer />
          </SafeAreaView>
          <Toast />
        </NavigationContainer>
      </ThemeContextProvider>
    </Provider>
  );
};

// Exporting
export default App;
