import { configureStore } from '@reduxjs/toolkit'
import favoris from './reducer/favoris'
import auth from './reducer/auth'

export default configureStore({
    reducer: {
        auth: auth,
        favoris: favoris,
    },
})