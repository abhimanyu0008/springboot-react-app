import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, TextField, MenuItem, Button,
  Table, TableContainer, TableHead, TableBody, TableRow, TableCell,
  Paper, IconButton, TablePagination,} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import studentService from '../../api/services/studentService';

const Student = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', gender: '', branch: '' });
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => { fetchStudents(); }, []);

  const fetchStudents = async () => {
    try {
      const data = await studentService.fetchStudents();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingStudent) {
        await studentService.updateStudent(editingStudent.id, formData);
        setEditingStudent(null);
      } else {
        await studentService.addStudent(formData);
      }
      fetchStudents();
      setFormData({ name: '', email: '', phone: '', gender: '', branch: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await studentService.deleteStudent(id);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleEdit = (student) => {
    setFormData(student);
    setEditingStudent(student);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rowsToDisplay = students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>Student Form</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {['name', 'email', 'phone'].map((field) => (
            <Grid item xs={12} sm={6} md={3} key={field}>
              <TextField fullWidth label={field.charAt(0).toUpperCase() + field.slice(1)} name={field}
                value={formData[field]} onChange={handleChange} size="medium" required
                type={field === 'email' ? 'email' : 'text'} />
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={3}>
            <TextField  fullWidth select label="Gender"  name="gender" value={formData.gender}
              onChange={handleChange} size="medium" required >
              {['Male', 'Female', 'Other'].map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth select  label="Branch"  name="branch" value={formData.branch}
              onChange={handleChange} size="medium" required >
              {['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering'].map((branch) => (
                <MenuItem key={branch} value={branch}>{branch}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button type="submit" variant="contained" color="primary" size="small" fullWidth>
              {editingStudent ? 'Update' : 'Submit'}
            </Button>
          </Grid>
        </Grid>
      </form>

      <Typography variant="h5" align="center" sx={{ mt: 4, mb: 2 }}>Student Data</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#1976d2' }}>
              {['S.No.', 'Name', 'Email', 'Phone', 'Gender', 'Branch', 'Actions'].map((header) => (
                <TableCell key={header} sx={{ color: 'white', fontWeight: 'bold' }}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsToDisplay.map((student, index) => (
              <TableRow key={student.id}>
                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                {['name', 'email', 'phone', 'gender', 'branch'].map((field) => (
                  <TableCell key={field}>{student[field]}</TableCell>
                ))}
                <TableCell>
                  <IconButton onClick={() => handleEdit(student)} color="primary"><Edit /></IconButton>
                  <IconButton onClick={() => handleDelete(student.id)} color="error"><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={students.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default Student;