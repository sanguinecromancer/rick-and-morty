import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/customFetch';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const initialState = {
  favoriteCharacterItems: [],
  total: 0,
  isLoading: true,
  favoriteIds: []
};

export const getFavoriteCharacterItems = createAsyncThunk(
  'characters/getFavoriteCharacterItems',
  async (name, thunkAPI) => {
    try {
      const response = await customFetch.get('/favorite-characters');
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const addToFavoritesRequest = createAsyncThunk(
  'characters/addToFavorites',
  async (params, thunkAPI) => {
    try {
      const response = await customFetch.post('/favorite-characters/' + params);
      toast.success(response.data.msg);
      console.log(response);
      await thunkAPI.dispatch(getFavoriteCharacterItems());
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.msg);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'favorite-characters/removeFromFavorites',
  async (params, thunkAPI) => {
    try {
      const response = await customFetch.delete('/favorite-characters/' + params);
      toast.success(response.data.msg);
      await thunkAPI.dispatch(getFavoriteCharacterItems());
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.msg);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    calculateTotalFavorites: (state) => {
      state.total = state.favoriteCharacterItems.length;
    },
    getIdsOfFavorites: (state) => {
      state.favoriteIds = state.favoriteCharacterItems.map((item) => item.id);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteCharacterItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavoriteCharacterItems.fulfilled, (state, action) => {
        state.isLoading = false;
        let favorites = action.payload.favoriteCharacters;
        state.favoriteCharacterItems = favorites;
        state.favoriteIds = favorites.map((item) => item.id);

      })
      /*
      .addCase(getFavoriteCharacterItems.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addToFavoritesRequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addToFavoritesRequest.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addToFavoritesRequest.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(removeFromFavorites.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(removeFromFavorites.rejected, (state, action) => {
        state.loading = false;
      })
      */
  },
});

export const { calculateTotalFavorites, getIdsOfFavorites } = characterSlice.actions;

export default characterSlice.reducer;