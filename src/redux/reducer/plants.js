import { createSlice } from '@reduxjs/toolkit';

export const plantsSlice = createSlice({
    name: 'plants',
    initialState: {
        plantData: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        setPlantsData: (state, action) => {
            state.plantData = action.payload;
        },
        setPlantsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setPlantsError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setPlantsData, setPlantsLoading, setPlantsError } =
    plantsSlice.actions;

export default plantsSlice.reducer;
