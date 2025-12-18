import axios from "axios";


export const axiosClient = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_API_URL,
    baseURL: "https://remotive.com/api/",
    // baseURL: "https://jobicy.com/api/v2/",
    withCredentials: false,
})
