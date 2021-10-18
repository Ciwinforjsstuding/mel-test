import { configureStore } from '@reduxjs/toolkit';
import starWarsReducer from './StarWars/starWarsSlice';
export const store = configureStore({
  reducer: {
    starWars: starWarsReducer,
  },
});
