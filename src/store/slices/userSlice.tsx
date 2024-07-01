import {createSlice, PayloadAction, CaseReducerActions} from '@reduxjs/toolkit';
import {UserType} from '../../types/UserType';

type UserState = {user: UserType | null; rememberMe: boolean};

const initialState: UserState = {user: null, rememberMe: false};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    logOut: state => {
      state.user = null;
      state.rememberMe = false;
    },
    setRememberMe: (state, action: PayloadAction<boolean>) => {
      state.rememberMe = action.payload;
    },
    setPrenium: (state, action: PayloadAction<boolean>) => {
      state.user!.isPremium = action.payload;
    },
    setCancelAtPeriodEnd: (state, action: PayloadAction<boolean>) => {
      state.user!.cancelAtPeriodEnd = action.payload;
    },
  },
});

export const {
  setUser,
  logOut,
  setRememberMe,
  setPrenium,
  setCancelAtPeriodEnd,
} = userSlice.actions;

export {userSlice};
