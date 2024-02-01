import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from './src/redux/reducer/auth';
import { firebase } from '@react-native-firebase/auth';
import { startLoading, stopLoading } from './src/redux/reducer/loading';
import { add, remove } from './src/redux/reducer/favoris';
import firestore from '@react-native-firebase/firestore';
import Splash from './src/screen/splash';
import HomeDrawer from './src/navigation/drawer/HomeDrawer';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading);
  const uid = useSelector(state => state.auth.uid);

  const checkAuthStatus = () => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser.uid));
        dispatch(startLoading());

        setTimeout(() => {
          dispatch(stopLoading());
        }, 2500);
        console.log("User is signed in.");

      } else {
        dispatch(clearUser());
        console.log("No user is signed in.");
      }
    });

    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribe = checkAuthStatus();
    unsubscribe();
  }, []);

  useEffect(() => {
    if (uid !== null) {
      firestore()
        .collection('favoris')
        .where('userId', '==', uid)
        .onSnapshot(documentSnapshot => {
          // console.log('favoris data: ');
          documentSnapshot.docChanges().forEach((change) => {
            // console.log('change', change.type)
            if (change.type === 'added') {
              // console.log('Liste des favoris: ', change.doc.data());
              dispatch(add({ id: change.doc.id, ...change.doc.data() }))
            } else if (change.type === 'removed') {
              // console.log('Removed favoris: ', change.doc.data());
              dispatch(remove(change.doc.id))
            }
          });
        });
    }

  }, [uid]);

  return (
    !isLoading ? <HomeDrawer /> : <Splash />
  );
};

export default Home;
