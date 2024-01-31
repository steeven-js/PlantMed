import { createSlice } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

export const favorisSlice = createSlice({
    name: 'favoris',
    initialState: [],
    reducers: {
        refresh: async (state, action) => {
            // console.log('refresh');
            const { payload: { uid } } = action;
            const favoritesSnapshot = await firestore()
                .collection('favoris')
                .where('userId', '==', uid)
                .get();
            const favoritePlants = favoritesSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            console.log(favoritePlants);

            // state = favoritePlants;
            return favoritePlants;
        },
        add: (state, action) => {
            // console.log('add');

            return [...state, action.payload]

        },
        remove: (state, action) => {
            // console.log('remove');
            const { payload: { plantId } } = action;

            // Filter out the plant with the specified plantId
            state.value = state.value.filter((fav) => fav.plantId !== plantId);
        },
    },
});

// Action creators are generated for each case reducer function
export const { refresh, add, remove } = favorisSlice.actions;

export default favorisSlice.reducer;
