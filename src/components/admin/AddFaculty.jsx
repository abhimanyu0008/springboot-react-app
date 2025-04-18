import React, { useState, useEffect } from 'react';
import {
  Container, TextField, Button, Box, Typography, MenuItem,
  Grid, Paper, Table, TableHead, TableRow, TableCell, TableBody
} from '@mui/material';

import { handleApiError } from '../../utils/handleApiError';
import { getFacultyList, addFaculty } from '../../api/services/facultyService';
import Menu from './Menu'

const AddFaculty = () => {
  const [formData, setFormData] = useState({
    name: '', age: '', gender: '', dob: '', address: '', phone: ''
  });

  const [facultyList, setFacultyList] = useState([]);

  const fetchFaculty = async () => {
    try {
      const res = await getFacultyList();
      setFacultyList(res.data);
    } catch (error) {
      handleApiError(error);
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addFaculty(formData);
      setFormData({ name: '', age: '', gender: '', dob: '', address: '', phone: '' });
      fetchFaculty();
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <>
    <Menu/>
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h5" align="center" gutterBottom>Add Faculty</Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="Age" name="age" type="number" value={formData.age} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField select fullWidth label="Gender" name="gender" value={formData.gender} onChange={handleChange} required>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>Submit</Button>
            </Grid>
          </Grid>
        </Box>

        <Typography variant="h6" sx={{ mt: 4 }}>Faculty List</Typography>
        <Table sx={{ mt: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {facultyList.map((fac, idx) => (
              <TableRow key={idx}>
                <TableCell>{fac.name}</TableCell>
                <TableCell>{fac.age}</TableCell>
                <TableCell>{fac.gender}</TableCell>
                <TableCell>{fac.dob}</TableCell>
                <TableCell>{fac.address}</TableCell>
                <TableCell>{fac.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
    </>
  );
};

export default AddFaculty;
