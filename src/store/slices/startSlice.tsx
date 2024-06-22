import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Type = {start: boolean};

const initialState: Type = {start: true};

const startSlice = createSlice({
  name: 'start',
  initialState,
  reducers: {
    setStart: (state, action: PayloadAction<boolean>) => {
      state.start = action.payload;
    },
  },
});

export const {setStart} = startSlice.actions;

export {startSlice};
