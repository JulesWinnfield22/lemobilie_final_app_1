import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null
  },
  reducers: {
    setLoggedInUser: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
  }
})

export const { setLoggedInUser } = counterSlice.actions
export default counterSlice.reducer