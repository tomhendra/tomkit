import type { Expense } from "@/types/api-types"
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios"

const API_BASE_URL = "http://localhost:3000/api"
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    language: "en-US",
  },
})

const api = async ({ ...options }: AxiosRequestConfig) => {
  try {
    const response = await axiosInstance(options)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data)
        console.error(error.response.status)
        console.error(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an
        // instance of http.ClientRequest in node.js
        console.error(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error", error.message)
      }
      console.error(error.config)
    } else {
      // Handle non-Axios errors
      console.error("Unexpected error", error)
    }
    return Promise.reject(error)
  }
}

/*
 * expenses
 ******************************************************************************/
export const getExpenses = async (): Promise<Expense[]> => {
  const opts = {
    url: "expenses",
    method: "get",
  }
  return api(opts)
}
