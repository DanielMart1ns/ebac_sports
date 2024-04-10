import { configureStore } from '@reduxjs/toolkit'
import kartReducer from '../reducers/kart'
import favoriteReducer from '../reducers/favorites'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    kart: kartReducer,
    favorite: favoriteReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
