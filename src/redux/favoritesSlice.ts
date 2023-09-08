import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import favoritesPersistConfig from './favoritesPersistConfig';
import { Car } from '../types/cars.type';

interface FavoriteState {
  favorites: Car[];
}

const initialState: FavoriteState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Car>) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<Car>) => {
      state.favorites = state.favorites.filter(
        (car) => car.id !== action.payload.id
      );
    },
  },
});

const persistedFavoritesReducer = persistReducer(favoritesPersistConfig, favoritesSlice.reducer);

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default persistedFavoritesReducer;
