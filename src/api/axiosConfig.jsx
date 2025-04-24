import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8088", // Adjust as per your backend
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle auto-refresh on 403
instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("http://localhost:8088/auth/refresh", { refreshToken });

        localStorage.setItem("accessToken", response.data.accessToken);

        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
        return axios(originalRequest);
      } catch (err) {
        console.error("Refresh token invalid. Please login again.");
        // Optional: redirect to login page
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
