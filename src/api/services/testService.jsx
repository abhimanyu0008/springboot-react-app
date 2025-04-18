// src/api/services/testService.js
import axiosInstance from '../axiosConfig';

export const testAuth = async (username, password) => {
  const authHeader = 'Basic ' + btoa(`${username}:${password}`);
  localStorage.setItem('authHeader', authHeader); // store after login

  const res = await axiosInstance.get('/users/test', {
    headers: { Authorization: authHeader }
  });

  return res.data;
};
