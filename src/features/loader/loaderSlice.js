import { createSlice } from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loading: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLoading} = loaderSlice.actions

export default loaderSlice.reducer