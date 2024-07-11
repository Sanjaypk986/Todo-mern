import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loading: false,
    loadingA: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loadingA = action.payload;
    },
    setLoadingA: (state, action) => {
      state.loadingB = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoadingA, setLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
