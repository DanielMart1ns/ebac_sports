import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../App'

type favoriteStates = {
  item: Produto[]
}

const initialState: favoriteStates = {
  item: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.item.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = state.item.filter(
          (p) => p.id !== produto.id
        )
        state.item = favoritosSemProduto
      } else {
        state.item.push(produto)
      }
    }
  }
})

export const { addToFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
