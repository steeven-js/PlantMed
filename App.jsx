import store from './src/redux/store';
import { Provider } from 'react-redux';
import LaunchApp from './src/screens/launchApp';
import Welcome from './src/Welcome/Index';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContextProvider } from './src/theming/context_providers/ThemeContextProvider';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

// Functional component
const App = () => {

  // Returning
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome" screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="LaunchApp" component={LaunchApp} />
          </Stack.Navigator>
          <Toast />
        </NavigationContainer>
      </ThemeContextProvider>
    </Provider>
  );
};

// Exporting
export default App;
