import axios from "axios";


export const axiosClient = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_API_URL,
    baseURL: "https://remotive.com/api/",
    // baseURL: "https://jobicy.com/api/v2/",
    withCredentials: false,
})

export const authAxiosClient = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_AUTH_API_URL,
    baseURL: "http://localhost:8000/api/auth/",
    withCredentials: true,
})
