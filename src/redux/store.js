import { configureStore } from '@reduxjs/toolkit';

import plantsReducer from './reducer/plants';
import symptomsReducer from './reducer/symptoms';

export default configureStore({
    reducer: {
        plants: plantsReducer,
        symptoms: symptomsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
