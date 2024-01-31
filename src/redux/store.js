import { configureStore } from '@reduxjs/toolkit'
import favoris from './reducer/favoris'
import auth from './reducer/auth'
import loading from './reducer/loading'

export default configureStore({
    reducer: {
        auth: auth,
        favoris: favoris,
        loading: loading,
    },
})