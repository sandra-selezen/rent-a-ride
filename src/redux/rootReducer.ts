import { combineReducers } from "@reduxjs/toolkit";
import persistedFavoritesReducer from "./favoritesSlice";

const rootReducer = combineReducers({
  favorites: persistedFavoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
