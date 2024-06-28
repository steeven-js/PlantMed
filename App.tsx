import {Provider} from 'react-redux';
import React, {useEffect} from 'react';
import {components} from './src/components';
import {persistor, store} from './src/store';
import {enableScreens} from 'react-native-screens';
import Orientation from 'react-native-orientation-locker';
import {PersistGate} from 'redux-persist/integration/react';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

enableScreens();

const App = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={<components.Loader />} persistor={persistor}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </PersistGate>
        <components.AppState />
      </Provider>
      <components.FlashMessage />
    </SafeAreaProvider>
  );
};

export default App;
