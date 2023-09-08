import { useEffect, useState } from "react"
import { Car } from "../types/cars.type";

export const useLocalStorage = (key: string, initialValue: Car[]) => {
  const storedValue = window.localStorage.getItem(key);
  const initialState = storedValue ? JSON.parse(storedValue) : initialValue;
  
  const [state, setState] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
