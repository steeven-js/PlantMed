import firestore from '@react-native-firebase/firestore';
import { createSlice } from '@reduxjs/toolkit';

export const favorisSlice = createSlice({
    name: 'favoris',
    initialState: [],
    reducers: {
        refresh: async (state, action) => {
            const {
                payload: { uid },
            } = action;
            const favoritesSnapshot = await firestore()
                .collection('favoris')
                .where('userId', '==', uid)
                .get();
            const favoritePlants = favoritesSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            console.log(favoritePlants);

            return favoritePlants;
        },
        add: (state, action) => {
            return [...state, action.payload];
        },
        remove: (state = [], action) => {
            // Provide a default value for state
            const {
                payload: { plantId },
            } = action;

            // Ensure that state is defined before trying to filter
            return state.filter((fav) => fav.id !== plantId);
        },
    },
});

// Action creators are generated for each case reducer function
export const { refresh, add, remove } = favorisSlice.actions;

export default favorisSlice.reducer;
