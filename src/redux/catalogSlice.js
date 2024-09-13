import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchLoadMore } from './thunks';
import { handelGetCampers, handelLoadMore } from './handlers';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    campers: [],
    favorites: [],
    items: [],
    isLoading: false,
    error: '',
  },
  reducers: {
    setCampers: (state, action) => {
      state.campers = action.payload;
    },
    addFavorites: (state, { payload }) => {
      state.favorites.unshift(payload);
    },
    delFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(({ id }) => id !== payload);
    },
  },
  extraReducers: bilder => {
    bilder
      .addCase(fetchCampers.fulfilled, handelGetCampers)
      .addCase(fetchLoadMore.fulfilled, handelLoadMore)
  },
});

export const { setCampers, addFavorites, delFavorites } = catalogSlice.actions;
export default catalogSlice.reducer;