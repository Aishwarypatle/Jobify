import { authAxiosClient, axiosClient } from './axios';
import { NextRequest } from "next/server";

export const request = {
  get: <T>(url: string, params?: unknown) =>
    axiosClient.get<T>(url, { params }).then(r => r.data),

  post: <T, B>(url: string, body: B) =>
    axiosClient.post<T>(url, body).then(r => r.data),

  put: <T, B>(url: string, body: B) =>
    axiosClient.put<T>(url, body).then(r => r.data),

  delete: <T>(url: string) =>
    axiosClient.delete<T>(url).then(r => r.data),
}

export const authRequest = {
  get: <T>(url: string, params?: unknown) =>
    authAxiosClient.get<T>(url, { params }).then(r => r.data),

  post: <T, B>(url: string, body: B) =>
    authAxiosClient.post<T>(url, body).then(r => r.data),

  put: <T, B>(url: string, body: B) =>
    authAxiosClient.put<T>(url, body).then(r => r.data),

  delete: <T>(url: string) =>
    authAxiosClient.delete<T>(url).then(r => r.data),
}