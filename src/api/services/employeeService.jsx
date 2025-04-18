// src/api/services/employeeService.jsx

import endpoints from "../endpoints";
import axiosInstance from "../axiosConfig";

// Use axiosInstance instead of axios for consistency
export const getEmployeeList = () => axiosInstance.get(endpoints.employee.list);

export const addEmployee = (data) => axiosInstance.post(endpoints.employee.add, data);
