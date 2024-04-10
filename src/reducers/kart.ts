import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../App'

type kartState = {
  items: Produto[]
}

const initialState: kartState = {
  items: []
}

const kartSlice = createSlice({
  name: 'kart',
  initialState,
  reducers: {
    addToKart: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.items.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(produto)
      }
    }
  }
})

export const { addToKart } = kartSlice.actions
export default kartSlice.reducer
