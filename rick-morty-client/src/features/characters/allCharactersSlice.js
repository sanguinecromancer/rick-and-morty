import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/customFetch';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const initialState = {
  allCharacterItems: [],
  total: 0,
  loading: true,
};

export const getAllCharacterItems = createAsyncThunk(
  'characters/getAllCharacterItems',
  async (page, thunkAPI) => {
    try {
      const response = await customFetch.get(`/characters?page=${page}`);
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.msg);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const allCharactersSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacterItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCharacterItems.fulfilled, (state, action) => {
        state.loading = false;
        state.allCharacterItems = action.payload.characters;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getAllCharacterItems.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
      })
  },
});

export default allCharactersSlice.reducer;