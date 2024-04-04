import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
        searchQuery: '',
    },
    reducers: {
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
});

export default searchSlice.reducer;
