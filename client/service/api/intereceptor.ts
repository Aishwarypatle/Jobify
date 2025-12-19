import { axiosClient } from './axios';

axiosClient.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error)
)
