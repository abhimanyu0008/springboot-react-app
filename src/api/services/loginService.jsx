
import axiosInstance from '../axiosConfig';

export const login = async (username, password) => {
  const res = await axiosInstance.post('/auth/login', {
    username,
    password,
  });

  const jwtToken = res.data;
  localStorage.setItem('authToken', `Bearer ${jwtToken}`);
  return jwtToken;
};
