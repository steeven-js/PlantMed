import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        uid: null,
        email: null,
        displayName: null,
        avatarUrl: null,
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
        setUserAvatarUrl: (state, action) => {
            state.avatarUrl = action.payload;
        },
        clearUser: (state) => {
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.avatarUrl = null;
            console.log('clearUser');
        },
    },
});


// Action creators are generated for each case reducer function
export const { setUserId, setUserEmail, setUserDisplayName, setUserAvatarUrl, clearUser } =
    authSlice.actions;

export default authSlice.reducer;
