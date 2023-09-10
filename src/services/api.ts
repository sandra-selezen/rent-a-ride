import { carService } from "./car.service";

export const fetchCarsWithPagination = async (page: number) => {
  try {
    const response = await carService.getCarsWithPagination(page);
    return response.data;
  } catch (error) {
    throw new Error();
  }
}
