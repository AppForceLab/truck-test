import { createSlice } from '@reduxjs/toolkit';
// import { fetchCampers, fetchLoadMore } from './thunks';
// import { handelGetCampers, handelLoadMore } from './handlers';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    campers: [],
    favorites: [],
    filter:{
      location: '',
      equipment: [
      ],
      type: ''
    }
,
    items: [],
    isLoading: false,
    error: '',
  },
  reducers: {
    setCampers: (state, action) => {
      state.campers = action.payload;
    },
    clickFavorites: (state, { payload }) => {
      console.log(payload);
      state.favorites = state.favorites.some(item => item.id === payload)
        ? state.favorites.filter(({ id }) => id !== payload)
        // ? state.favorites.filter(({ id }) => id !== payload)
        // : [...state.favorites, state.campers.items.find(({ id }) => id === payload)];
        : [...state.favorites, {id: payload}];
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    }

    // addFavorites: (state, { payload }) => {
    //   state.favorites.unshift(payload);
    // },
    // delFavorites: (state, { payload }) => {
    //   state.favorites = state.favorites.filter(({ id }) => id !== payload);
    // },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchCampers.fulfilled, handelGetCampers)
  //     .addCase(fetchLoadMore.fulfilled, handelLoadMore)
  // },
});

export const { setCampers, clickFavorites,setFilter} = catalogSlice.actions;
export default catalogSlice.reducer;