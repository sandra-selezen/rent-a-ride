import { useSelector } from "react-redux";
import { RootState } from "./rootReducer";

export const useFavorites = () => {
  return useSelector((state: RootState) => state.favorites.favorites);
};
