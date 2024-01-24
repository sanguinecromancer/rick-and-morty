import { configureStore } from '@reduxjs/toolkit';
import favoriteCharacterReducer from './features/characters/characterSlice';
import dashboardReducer from './features/dashboard/dashboardSlice';

export const store = configureStore({
  reducer: {
		favoriteCharacterItems: favoriteCharacterReducer,
		dashboard: dashboardReducer
  },
});