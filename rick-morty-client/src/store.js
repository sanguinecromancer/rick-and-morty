import { configureStore } from '@reduxjs/toolkit';
import allCharactersReducer from './features/characters/allCharactersSlice';
import favoriteCharacterReducer from './features/characters/favoriteCharacterSlice';
import dashboardReducer from './features/dashboard/dashboardSlice';

export const store = configureStore({
  reducer: {
    allCharacterItems: allCharactersReducer,
		favoriteCharacterItems: favoriteCharacterReducer,
		dashboard: dashboardReducer
  },
});