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
  async (name, thunkAPI) => {
    try {
      const response = await customFetch.get('/characters');
      return response.data;
    } catch (error) {
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
        let characters = action.payload.characters;
        state.allCharacterItems = characters;
      })
      .addCase(getAllCharacterItems.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
      })
  },
});

export default allCharactersSlice.reducer;