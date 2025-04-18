// src/api/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8088',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Inject auth header before every request
axiosInstance.interceptors.request.use(
  (config) => {
    const authHeader = localStorage.getItem('authHeader');
    if (authHeader) {
      config.headers['Authorization'] = authHeader;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
