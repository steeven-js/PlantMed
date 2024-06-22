import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface VersionState {
  doctorList: 1 | 2;
  dashboard: 1 | 2;
}

const initialState: VersionState = {
  doctorList: 1,
  dashboard: 1,
};

const versionSlice = createSlice({
  name: 'versions',
  initialState,
  reducers: {
    setDoctorList: (state, action: PayloadAction<1 | 2>) => {
      state.doctorList = action.payload;
    },
    setDashboard: (state, action: PayloadAction<1 | 2>) => {
      state.dashboard = action.payload;
    },
  },
});

export const {setDoctorList, setDashboard} = versionSlice.actions;

export {versionSlice};
