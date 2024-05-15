import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducer/auth';
import plantsReducer from './reducer/plants';
import symptomsReducer from './reducer/symptoms';

export default configureStore({
    reducer: {
        auth: authReducer,
        plants: plantsReducer,
        symptoms: symptomsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
