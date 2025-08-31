import { Axios } from 'axios';

export const apiService = new Axios({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

apiService.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
