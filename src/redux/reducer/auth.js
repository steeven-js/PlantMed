import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        uid: null,
    },
    reducers: {
        setUser: (state, action) => {
            // console.log('setUser', action.payload);
            state.uid = action.payload;
        },
        clearUser: (state) => {
            console.log('clearUser');
            state.uid = null;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
