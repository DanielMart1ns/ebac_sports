import { configureStore } from '@reduxjs/toolkit'
import kartReducer from '../reducers/kart'
import favoriteReducer from '../reducers/favorites'

export const store = configureStore({
  reducer: {
    kart: kartReducer,
    favorite: favoriteReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
