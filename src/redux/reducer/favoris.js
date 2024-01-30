import { createSlice } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

export const favorisSlice = createSlice({
    name: 'favoris',
    initialState: {
        value: [],
    },
    reducers: {
        refresh: async (state, action) => {
            console.log('refresh');
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

            state.value = favoritePlants;
        },
        add: (state, action) => {
            console.log('add');
            const { payload: { plantId, uid } } = action;

            // Check if the plant is already in the favorites
            const existingPlant = state.value.find((fav) => fav.plantId === plantId);

            if (!existingPlant) {
                // If not, add it to the favorites
                state.value.push({
                    id: 'new', 
                    plantId,
                    uid,
                    // Add other properties as needed
                });
            }
        },
        remove: (state, action) => {
            console.log('remove');
            const { payload: { plantId } } = action;

            // Filter out the plant with the specified plantId
            state.value = state.value.filter((fav) => fav.plantId !== plantId);
        },
    },
});

// Action creators are generated for each case reducer function
export const { refresh, add, remove } = favorisSlice.actions;

export default favorisSlice.reducer;
