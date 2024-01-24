import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './features/characters/characterSlice';
import dashboardReducer from './features/dashboard/dashboardSlice';

export const store = configureStore({
  reducer: {
		characters: characterReducer,
		dashboard: dashboardReducer
  },
});