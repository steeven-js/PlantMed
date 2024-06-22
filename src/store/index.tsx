import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {apiSlice} from './slices/apiSlice';
import {tabSlice} from './slices/tabSlice';
import {tagSlice} from './slices/tagSlice';
import {userSlice} from './slices/userSlice';
import {cartSlice} from './slices/cartSlice';
import {startSlice} from './slices/startSlice';
import {filterSlice} from './slices/filterSlice';
import {paymentSlice} from './slices/paymentSlice';
import {versionSlice} from './slices/versionSlice';
import {wishlistSlice} from './slices/wishlistSlice';
import {promocodeSlice} from './slices/promocodeSlice';

const rootReducer = combineReducers({
  tabSlice: tabSlice.reducer,
  tagSlice: tagSlice.reducer,
  apiSlice: apiSlice.reducer,
  userSlice: userSlice.reducer,
  cartSlice: cartSlice.reducer,
  startSlice: startSlice.reducer,
  filterSlice: filterSlice.reducer,
  versionSlice: versionSlice.reducer,
  paymentSlice: paymentSlice.reducer,
  wishlistSlice: wishlistSlice.reducer,
  promocodeSlice: promocodeSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'tabSlice',
    'userSlice',
    'cartSlice',
    'startSlice',
    'versionSlice',
    'paymentSlice',
    'wishlistSlice',
    'promocodeSlice',
    'rememberMeSlice',
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
