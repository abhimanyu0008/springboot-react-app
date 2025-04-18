import React, { useEffect, useState } from 'react';
import {
  Container, Paper, Typography, TextField, Button, Grid,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider
} from '@mui/material';
import Menu from './Menu';
import { handleApiError } from '../../utils/handleApiError';
import { getEmployeeList, addEmployee } from '../../api/services/employeeService';

const AddEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    department: '',
    designation: '',
  });

  // Fetching employee list from the backend
  const fetchEmployees = async () => {
    try {
      const res = await getEmployeeList();
      console.log("Fetched Employees:", res); // Debugging the API response
      // Assuming the response structure is res.data (update based on your actual response structure)
      setEmployees(res.data.employees || res.data); // Make sure the structure matches
    } catch (error) {
      handleApiError(error);
    }
  };

  // Fetch employees on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Handle form submission to add a new employee
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add the new employee via API call
      await addEmployee(employee);
      // Reset the employee form
      setEmployee({ name: '', email: '', department: '', designation: '' });
      // Re-fetch the employee list to display the new employee
      fetchEmployees();
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <>
      <Menu />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>Add Employee</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {['name', 'email', 'department', 'designation'].map((field) => (
                <Grid item xs={12} sm={6} key={field}>
                  <TextField
                    name={field}
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    fullWidth
                    value={employee[field]}
                    onChange={handleChange}
                    required
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>Add Employee</Button>
              </Grid>
            </Grid>
          </form>

          {/* Display the employee list if there are employees */}
          {employees.length > 0 && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h6" gutterBottom>Employee List</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Designation</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employees.map((emp) => (
                      <TableRow key={emp.id}> {/* Use unique id for the key */}
                        <TableCell>{emp.name}</TableCell>
                        <TableCell>{emp.email}</TableCell>
                        <TableCell>{emp.department}</TableCell>
                        <TableCell>{emp.designation}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default AddEmployee;
