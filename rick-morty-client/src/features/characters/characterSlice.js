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
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      // const resp = await axios(url);

      // return resp.data;
      const response = await customFetch.get('/favorite-characters');
      console.log(response);
      // const { data } = response;
      // const { favoriteCharacters } = data;

      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const getAllCharacterItems = createAsyncThunk(
  'characters/getFavoriteCharacterItems',
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      // const resp = await axios(url);

      // return resp.data;
      const response = await customFetch.get('/characters');
      console.log(response);
      // const { data } = response;
      // const { favoriteCharacters } = data;

      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    removeFromFavorites: (state, action) => {
      const itemId = action.payload;
      state.favoriteCharacterItems = state.favoriteCharacterItems.filter((item) => item._id !== itemId);
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

console.log(characterSlice);

export const { removeFromFavorites, calculateTotalFavorites } = characterSlice.actions;

export default characterSlice.reducer;