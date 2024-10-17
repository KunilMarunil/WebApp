import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CustomAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#002B7F', height: '60px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
        {/* Left Section: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="logo.png" alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
          <Typography variant="body2" sx={{ color: 'white' }}>
            / Beranda / SSM QC
          </Typography>
        </Box>

        {/* Middle Section: Breadcrumb */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ArrowBackIcon sx={{ color: 'white', mr: 1 }} />
          <Typography variant="body2" sx={{ color: 'white', mr: 2 }}>
            Beranda Permohonan
          </Typography>
          <HomeIcon sx={{ color: 'white', mr: 1 }} />
          <Typography variant="body2" sx={{ color: 'white' }}>
            Beranda Menu
          </Typography>
        </Box>

        {/* Right Section: Date, Notifications, Profile */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ color: 'white', mr: 2 }}>
            Senin, 22 Juli 2024 - 15:15:51
          </Typography>
          <IconButton sx={{ color: 'white' }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
