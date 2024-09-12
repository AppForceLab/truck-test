import { createSlice } from '@reduxjs/toolkit';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    campers: [],
  },
  reducers: {
    setCampers: (state, action) => {
      state.campers = action.payload;
    },
  },
});

export const { setCampers } = catalogSlice.actions;
export default catalogSlice.reducer;