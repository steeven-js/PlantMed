import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducer/auth';
import plantsReducer from './reducer/plants';
import bannersReducer from './reducer/banners';
import symptomsReducer from './reducer/symptoms';

export default configureStore({
    reducer: {
        auth: authReducer,
        plants: plantsReducer,
        symptoms: symptomsReducer,
        banners: bannersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
