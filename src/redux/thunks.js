import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers, getAllCampers } from '../services/api';


export const fetchCampers = createAsyncThunk(
  'campers/FirstPage',
  async (page, thunkaAPI) => {
    try {
      return await getCampers(page);
    } catch (error) {
      return thunkaAPI.rejectWithValue(error);
    }
  }
);


export const fetchLoadMore = createAsyncThunk(
  'campers/LoadMore',
  async (page, thunkaAPI) => {
    try {
      return await getCampers(page);
    } catch (error) {
      return thunkaAPI.rejectWithValue(error);
    }
  }
);


export const fetchAllCampers = createAsyncThunk(
  'campers/All',
  async (_, thunkaAPI) => {
    try {
      return await getAllCampers();
    } catch (error) {
      return thunkaAPI.rejectWithValue(error);
    }
  }
);