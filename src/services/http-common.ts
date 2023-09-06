import axios from "axios"

export const httpCommon = axios.create({
  baseURL: "https://64f61aab2b07270f705e26bd.mockapi.io/api",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  }
})
