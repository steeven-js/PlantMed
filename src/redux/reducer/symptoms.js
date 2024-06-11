import { createSlice } from '@reduxjs/toolkit';

export const symptomsSlice = createSlice({
    name: 'symptoms',
    initialState: {
        symptomsData: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setSymptomsData: (state, action) => {
            state.symptomsData = action.payload;
        },
        setSymptomsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setSymptomsError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setSymptomsData, setSymptomsLoading, setSymptomsError } = symptomsSlice.actions;

export default symptomsSlice.reducer;
