import axios from "axios";


export const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
    withCredentials: false,
})

export const authAxiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_AUTH_API_URL}/api/auth/`,
    withCredentials: true,
})
