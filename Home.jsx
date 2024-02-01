import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from './src/redux/reducer/auth';
import { firebase } from '@react-native-firebase/auth';
import { startLoading, stopLoading } from './src/redux/reducer/loading';
import { add, remove } from './src/redux/reducer/favoris';
import firestore from '@react-native-firebase/firestore';
import Splash from './src/screen/splash';
import HomeDrawer from './src/navigation/drawer/HomeDrawer';

const LOADING_TIMEOUT = 2500;

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  const uid = useSelector((state) => state.auth.uid);
  const [isStarting, setIsStarting] = useState(true);

  useEffect(() => {
    const checkAuthStatus = () => {
      return firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch(setUser(authUser.uid));
          dispatch(startLoading());

          setTimeout(() => {
            dispatch(stopLoading());
          }, LOADING_TIMEOUT);
          console.log('User is signed in.');
        } else {
          dispatch(clearUser());
          console.log('No user is signed in.');
        }
      });
    };

    const unsubscribe = checkAuthStatus();
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    if (uid !== null) {
      const unsubscribe = firestore()
        .collection('favoris')
        .where('userId', '==', uid)
        .onSnapshot((documentSnapshot) => {
          documentSnapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              dispatch(add({ id: change.doc.id, ...change.doc.data() }));
            } else if (change.type === 'removed') {
              dispatch(remove(change.doc.id));
            }
          });
        });

      return () => {
        unsubscribe();
      };
    }
  }, [dispatch, uid]);

  useEffect(() => {
    setTimeout(() => {
      setIsStarting(false);
    }, LOADING_TIMEOUT);
  }, []);

  return isStarting ? <Splash /> : <HomeDrawer />;
};

export default Home;
