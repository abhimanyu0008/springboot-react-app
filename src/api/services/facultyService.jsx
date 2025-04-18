// src/api/services/facultyService.js
import axios from '../axiosConfig';
import endpoints from '../endpoints';

export const getFacultyList = () => axios.get(endpoints.faculty.list);

export const addFaculty = (data) => axios.post(endpoints.faculty.add, data);

export const updateFaculty = (id, data) =>
  axios.put(endpoints.faculty.update(id), data);

export const deleteFaculty = (id) => axios.delete(endpoints.faculty.delete(id));
