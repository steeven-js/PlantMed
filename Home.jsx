import React, { useEffect, useState } from 'react';

import HomeDrawer from './src/navigation/drawer/HomeDrawer';
import { useSelector, useDispatch } from 'react-redux'
import { setUser, clearUser } from './src/redux/reducer/auth';
import { firebase } from '@react-native-firebase/auth';

const Home = () => {
  const dispatch = useDispatch();

  const checkAuthStatus = () => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
            dispatch(setUser(authUser.uid));
            console.log("User is signed in.");
        } else {
            dispatch(clearUser());
            console.log("No user is signed in.");
        }
    });

    return unsubscribe;
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
      <HomeDrawer />
  );
};

export default Home;
