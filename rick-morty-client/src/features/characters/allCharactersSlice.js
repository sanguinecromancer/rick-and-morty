import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/customFetch';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


const initialState = {
  allCharacterItems: [],
  total: 0,
  isLoading: true,
};


export const getAllCharacterItems = createAsyncThunk(
  'characters/getAllCharacterItems',
  async (name, thunkAPI) => {
    try {
      const response = await customFetch.get('/characters');
      console.log(response);
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
    // removeFromFavorites: (state, action) => {
    //   const itemId = action.payload;
    //   state.favoriteCharacterItems = state.favoriteCharacterItems.filter((item) => item._id !== itemId);
    //   removeRequest(itemId);
    // },
    // calculateTotalFavorites: (state) => {
    //   state.total = state.favoriteCharacterItems.length;

    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacterItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCharacterItems.fulfilled, (state, action) => {
        state.isLoading = false;
        let allCharacters = action.payload.allCharacters;
        state.favoriteCharacterItems = allCharacters;
      })
      .addCase(getAllCharacterItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      })
  },
});

//export const {} = allCharactersSlice.actions;

export default allCharactersSlice.reducer;