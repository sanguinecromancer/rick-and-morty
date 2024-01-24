import { createSlice } from '@reduxjs/toolkit';
import customFetch from '../../utils/customFetch';
import { useSelector, useDispatch } from 'react-redux';



let characterItems =  [
  {
    "_id": "65afd8bca366c53d8d8beb30",
    "id": 77,
    "createdBy": "65aee5e0e5bbcf1a9cc30f76",
    "createdAt": "2024-01-23T15:18:20.106Z",
    "updatedAt": "2024-01-23T15:18:20.106Z",
    "__v": 0
  },
  {
    "_id": "65afd8c9a366c53d8d8beb33",
    "id": 1,
    "createdBy": "65aee5e0e5bbcf1a9cc30f76",
    "createdAt": "2024-01-23T15:18:33.447Z",
    "updatedAt": "2024-01-23T15:18:33.447Z",
    "__v": 0
  },
  {
    "_id": "65afd8cba366c53d8d8beb35",
    "id": 2,
    "createdBy": "65aee5e0e5bbcf1a9cc30f76",
    "createdAt": "2024-01-23T15:18:35.450Z",
    "updatedAt": "2024-01-23T15:18:35.450Z",
    "__v": 0
  },
  {
    "_id": "65afd8cea366c53d8d8beb37",
    "id": 3,
    "createdBy": "65aee5e0e5bbcf1a9cc30f76",
    "createdAt": "2024-01-23T15:18:38.219Z",
    "updatedAt": "2024-01-23T15:18:38.219Z",
    "__v": 0
  }
];

const initialState = {
  characterItems: characterItems,
  total: 0,
  isLoading: true,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    removeFromFavorites: (state, action) => {
      const itemId = action.payload;
      state.characterItems = state.characterItems.filter((item) => item._id !== itemId);
    },
    calculateTotalFavorites: (state) => {
      state.total = state.characterItems.length;

    }
  }
});

console.log(characterSlice);

export const { removeFromFavorites, calculateTotalFavorites } = characterSlice.actions;

export default characterSlice.reducer;