// src/api/services/studentService.jsx
import axios from '../axiosConfig';
import endpoints from '../endpoints';

const studentService = {
    fetchStudents: () => axios.get(endpoints.student.list).then(res => res.data),
    addStudent: (data) => axios.post(endpoints.student.add, data),
    updateStudent: (id, data) => axios.put(endpoints.student.update(id), data),
    deleteStudent: (id) => axios.delete(endpoints.student.delete(id)),
  };
  
  export default studentService;

  // axiosInstance.interceptors.request.use(config => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }
  //   return config;
  // });
  
