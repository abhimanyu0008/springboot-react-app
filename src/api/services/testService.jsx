// src/api/services/testService.js
import axiosInstance from '../axiosConfig';

export const testAuth = async () => {
  const res = await axiosInstance.get('/users/test');
  return res.data;
};
