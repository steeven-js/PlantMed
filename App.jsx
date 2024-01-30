import React, { useEffect, useState } from 'react';
import Splash from './src/screen/splash';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import Home from './Home';

const App = () => {
  const [isStarting, setIsStarting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsStarting(false);
    }, 2500);
  }, []);

  if (isStarting) {
    return <Splash />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
