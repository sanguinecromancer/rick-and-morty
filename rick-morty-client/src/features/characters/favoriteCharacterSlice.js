import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/customFetch';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


const initialState = {
  favoriteCharacterItems: [],
  total: 0,
  isLoading: true,
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

export const getAllCharacterItems = createAsyncThunk(
  'characters/getAllCharacterItems',
  async (name, thunkAPI) => {
    try {
      debugger;
      const response = await customFetch.get('/characters');
      console.log(response);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const removeRequest = async(params) => {
    try {
      const response = await customFetch.delete('/favorite-characters/' + params);
      toast.success(response.data.msg);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
    }
  };


const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    removeFromFavorites: (state, action) => {
      const itemId = action.payload;
      state.favoriteCharacterItems = state.favoriteCharacterItems.filter((item) => item._id !== itemId);
      removeRequest(itemId);
    },
    calculateTotalFavorites: (state) => {
      state.total = state.favoriteCharacterItems.length;

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
      })
      .addCase(getFavoriteCharacterItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { removeFromFavorites, calculateTotalFavorites } = characterSlice.actions;

export default characterSlice.reducer;