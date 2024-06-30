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
import {StripeProvider} from '@stripe/stripe-react-native';

enableScreens();

const App = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StripeProvider
          publishableKey='pk_test_51LeOHYBy39DOXZlGRv6tHgXPh93Q0wEpgvTbT6ASeEE7p0miCzLzZp3LRmZiCzk7ids8vFrGQjjlNFLsub3wyVnC00cvQ0H2eI'
          urlScheme='com.jsprod.plantmed' // required for 3D Secure and bank redirects
          merchantIdentifier='merchant.com.{{YOUR_APP_NAME}}' // required for Apple Pay
        >
          <PersistGate loading={<components.Loader />} persistor={persistor}>
            <NavigationContainer>
              <StackNavigator />
            </NavigationContainer>
          </PersistGate>
          <components.AppState />
        </StripeProvider>
      </Provider>
      <components.FlashMessage />
    </SafeAreaProvider>
  );
};

export default App;
