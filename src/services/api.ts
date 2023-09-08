import { Car } from "../types/cars.type";
import { carService } from "./car.service";

export const fetchAllCars = async () => {
  try {
    const response = await carService.getAllCars();
    return response.data as Car[];
  } catch (error) {
    console.error(error);
  }
}

export const fetchCarById = async (id: number) => {
  try {
    const response = await carService.getCarById(id);
    return response.data as Car;
  } catch (error) {
    console.error(error);
  }
}

export const fetchCarsWithPagination = async (page: number) => {
  try {
    const response = await carService.getCarsWithPagination(page);
    return response.data as Car[];
  } catch (error) {
    console.error(error);
  }
}