import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1
  },
  reducers: {
    indrement: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  }
})

export const { indrement, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer