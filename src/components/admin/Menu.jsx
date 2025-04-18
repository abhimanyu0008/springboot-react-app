import React from 'react';
import {
  Box, Drawer, List, ListItem, ListItemIcon, ListItemText,
  AppBar, Toolbar, Typography, CssBaseline, Button, ListItemButton
} from '@mui/material';
import { Dashboard, People, Settings, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  const menu = [
    { text: 'Dashboard', icon: <Dashboard />, action: () => navigate('/admin') },
    { text: 'Users', icon: <People />, action: () => navigate('/admin/users') },
    { text: 'Settings', icon: <Settings />, action: () => navigate('/admin/settings') },
    { text: 'Logout', icon: <Logout />, action: () => navigate('/') },
  ];

  const handleAdd = (type) => {
    alert(`Add ${type} clicked`);
    // Or navigate(`/add-${type.toLowerCase()}`);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Admin Panel</Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button color="inherit" onClick={() => navigate('/add-faculty')}>Add Faculty</Button>
            <Button color="inherit" onClick={() => handleAdd('Student')}>Add Student</Button>
            <Button color="inherit" onClick={() => navigate('/add-employee')}>Add Employee</Button>
            <Logout onClick={() => navigate('/')} sx={{ cursor: 'pointer', ml: 2 }} />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: 200,
          [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          {menu.map(({ text, icon, action }) => (
            <ListItem disablePadding key={text}>
              <ListItemButton onClick={action}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4">Welcome, Admin</Typography>
      </Box>
    </Box>
  );
};

export default Menu;
