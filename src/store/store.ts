import { configureStore } from '@reduxjs/toolkit'
import kartReducer from '../reducers/kart'

export const store = configureStore({
  reducer: {
    kart: kartReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
