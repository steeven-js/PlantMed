import Login from "../../../screen/Login";
import Register from "../../../screen/Register";
import { createStackNavigator } from '@react-navigation/stack';

// Creating stack navigator
const Stack = createStackNavigator();

// Auth stack
const AuthStack = () => {

  // Returning
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} options={{title: 'Se connecté'}}/>
      <Stack.Screen name="Register" component={Register} options={{title: 'S\' inscrire'}}/>
    </Stack.Navigator>
  );
};

// Exporting
export default AuthStack;
