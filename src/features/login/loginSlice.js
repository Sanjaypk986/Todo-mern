import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false
  },
  reducers: {
    changeLogginStatus: (state, action) => {
      state.isLoggedIn = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeLogginStatus} = loginSlice.actions

export default loginSlice.reducer