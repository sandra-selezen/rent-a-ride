import { httpCommon } from "./http-common";

const getAllCars = () => httpCommon.get("/cars");

const getCarById = (id: number) => httpCommon.get(`/cars/${id}`);

const getCarsWithPagination = (page: number) => httpCommon.get(`/cars?page=${page}&limit=8`);

export const carService = {
  getAllCars,
  getCarById,
  getCarsWithPagination,
}
