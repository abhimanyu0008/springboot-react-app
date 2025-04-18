import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { testAuth } from '../../api/services/testService';
import { useAuth } from '../../context/authContext';
import {
  Container, Paper, Typography, Box, TextField, Button
} from '@mui/material';
import Navbar from './Navbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // get login function

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await testAuth(username, password);
      console.log("Login successful:", data);
      login(); // set isAuthenticated = true
      navigate('/adminpage'); // redirect
    } catch (err) {
      console.error("Login failed:", err);
      setError('Authentication failed');
    }
  };

  return (
    <>
    <Navbar/>
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" align="center">Login</Typography>
        <Box component="form" onSubmit={handleLogin}>
          <TextField fullWidth label="Username" value={username} onChange={(e) => setUsername(e.target.value)} margin="normal" required />
          <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" required />
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>Sign In</Button>
        </Box>
        {error && <Typography color="error" align="center" mt={2}>{error}</Typography>}
      </Paper>
    </Container>
    </>
  );
};

export default Login;
