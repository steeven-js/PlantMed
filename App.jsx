import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import Home from './Home';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
