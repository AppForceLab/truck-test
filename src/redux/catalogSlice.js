import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    campers: [],
    favorites: [],
    filter: {
      location: "",
      equipment: [],
      type: "",
    },
    error: "",
  },
  reducers: {
    setCampers: (state, action) => {
      state.campers = action.payload;
    },
    clickFavorites: (state, { payload }) => {
      state.favorites = state.favorites.some((item) => item.id === payload)
        ? state.favorites.filter(({ id }) => id !== payload)
        : [...state.favorites, { id: payload }];
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { setCampers, clickFavorites, setFilter } = catalogSlice.actions;
export default catalogSlice.reducer;
