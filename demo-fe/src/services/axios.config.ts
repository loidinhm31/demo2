import axios, { AxiosHeaders, AxiosResponse, CreateAxiosDefaults } from "axios";

import { APP_API_URL } from "@/env";

const config: CreateAxiosDefaults = {
  baseURL: `${APP_API_URL}/api`,
  headers: new AxiosHeaders({
    "Content-Type": "application/json",
    Accept: "application/json"
  }),
  withCredentials: true
};

const axiosInstance = axios.create(config);

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("JWT_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: any) => {
    console.log("Axios interceptor error:", error);
    console.log("Error response:", error?.response);
    console.log("Error response data:", error?.response?.data);

    // Re-throw the error to be caught by the service
    return Promise.reject(error);
  }
);

export default axiosInstance;