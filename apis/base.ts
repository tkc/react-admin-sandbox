import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
export const baseURL = "example.com";

export type Response<T> = {
  code: number;
  data: T;
  status: string;
};

const defaultOptions = {
  timeout: 60000,
  baseURL,
  headers: {},
};

export class Api {
  api: AxiosInstance;
  constructor(options: AxiosRequestConfig = {}) {
    this.api = axios.create({ ...defaultOptions, ...options });
  }
  get(url: string, params?: any) {
    return this.api.get(url, params ? { params } : {}).catch(e => {
      return Promise.reject(e.response);
    });
  }
  post(url: string, body: any) {
    return this.api.post(url, body).catch(e => {
      return Promise.reject(e.response);
    });
  }
  delete(url: string, body: any) {
    return this.api.delete(url, body).catch(e => {
      return Promise.reject(e.response);
    });
  }
  put(url: string, body: any) {
    return this.api.put(url, body).catch(e => {
      return Promise.reject(e.response);
    });
  }
  patch(url: string, body: any) {
    return this.api.patch(url, body).catch(e => {
      return Promise.reject(e.response);
    });
  }
}
