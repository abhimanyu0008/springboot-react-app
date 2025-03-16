import axios from 'axios';

const API_URL = 'http://localhost:8088/students';

// Fetch all students
const fetchStudents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

// Add a new student
const addStudent = async (student) => {
  try {
    const response = await axios.post(API_URL, student);
    return response.data;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

// Delete a student by ID
const deleteStudent = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};

// Update a student by ID
const updateStudent = async (id, student) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, student);
    return response.data;
  } catch (error) {
    console.error('Error updating student:', error);
    throw error;
  }
};

export default {
  fetchStudents,
  addStudent,
  deleteStudent,
  updateStudent,
};