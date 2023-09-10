import { httpCommon } from "./http-common";

const getCarsWithPagination = (page: number) => httpCommon.get(`/cars?page=${page}&limit=8`);

export const carService = {
  getCarsWithPagination,
}
