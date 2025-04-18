import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar, Toolbar, IconButton, Typography, Menu, Container,
  Avatar, Button, Tooltip, MenuItem, Box
} from '@mui/material';
import { Menu as MenuIcon, Adb } from '@mui/icons-material';

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(null);
  const [userMenu, setUserMenu] = useState(null);

  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const openMenu = (setter) => (e) => setter(e.currentTarget);
  const closeMenu = (setter) => () => setter(null);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' },
           flexGrow: 1 }} component={Link} to="/">
            LOGO
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton onClick={openMenu(setNavMenu)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={navMenu} open={Boolean(navMenu)} onClose={closeMenu(setNavMenu)}>
              {pages.map((p) => (
                <MenuItem key={p} onClick={closeMenu(setNavMenu)}>
                  <Typography textAlign="center">{p}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            {pages.map((p) => (
              <Button key={p} sx={{ color: 'white' }} onClick={closeMenu(setNavMenu)}>
                {p}
              </Button>
            ))}
          </Box>

          {/* Login Button */}
          <Button color="secondary" variant="contained" sx={{ ml: 1 }} component={Link} to="/login">
            Login
          </Button>

          {/* Avatar */}
          <Box sx={{ ml: 2 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={openMenu(setUserMenu)}>
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu anchorEl={userMenu} open={Boolean(userMenu)} onClose={closeMenu(setUserMenu)}>
              {settings.map((s) => (
                <MenuItem key={s} onClick={closeMenu(setUserMenu)}>
                  <Typography textAlign="center">{s}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
