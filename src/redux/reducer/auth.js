import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        uid: null,
        email: null,
        displayName: null,
    },
    reducers: {
        setUserId: (state, action) => {
            state.uid = action.payload;
        },
        setUserEmail: (state, action) => {
            state.email = action.payload;
        },
        setUserDisplayName: (state, action) => {
            state.displayName = action.payload;
        },
        clearUser: (state) => {
            state.uid = null;
            state.email = null;
            state.displayName = null;
            console.log('clearUser');
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserId, setUserEmail, setUserDisplayName, clearUser } =
    authSlice.actions;

export default authSlice.reducer;
