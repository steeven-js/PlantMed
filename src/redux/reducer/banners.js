import { createSlice } from '@reduxjs/toolkit';

export const bannersSlice = createSlice({
    name: 'banners',
    initialState: {
        bannersData: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setBannersData: (state, action) => {
            state.bannersData = action.payload;
        },
        setBannersLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setBannersError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setBannersData, setBannersLoading, setBannersError } = bannersSlice.actions;

export default bannersSlice.reducer;
