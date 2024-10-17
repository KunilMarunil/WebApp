import React, { useState, useEffect } from 'react';
import {
  Container,
  Tabs,
  Tab,
  AppBar,
  Box,
  Button,
  Paper,
  Typography,
  Toolbar,
  IconButton,
  Link,
} from "@mui/material";
import axios from 'axios';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DescriptionIcon from "@mui/icons-material/Description";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import DataUtama from './Component/DataUtama';
import DataEntitas from './Component/DataEntitas';
import DataPungutan from './Component/DataPungutan';

function App() {
  const [mainTabValue, setMainTabValue] = React.useState(0);
  const [subTabValue, setSubTabValue] = React.useState(0);
  const [dataUtama, setdataUtama] = useState([]);
  const [dataEntitas, setdataEntitas] = useState([]);
  const [dataPungutan, setdataPungutan] = useState([]);

  const handleMainTabChange = (event, newValue) => {
    setMainTabValue(newValue);
  };

  const handleSubTabChange = (event, newValue) => {
    setSubTabValue(newValue);
  };

  useEffect(() => {
    fetchdataUtama();
    fetchdataEntitas();
    fetchdataPungutan();
    console.log(dataUtama);
    console.log(dataEntitas);
    console.log(dataPungutan);
  }, []);

  const fetchdataUtama = async () => {
    try {
      const response = await axios.get('https://localhost:7208/DataEntitas?id=1');
      setdataUtama(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const fetchdataEntitas = async () => {
    try {
      const response = await axios.get('https://localhost:7208/DataPungutan?id=1');
      setdataEntitas(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const fetchdataPungutan = async () => {
    try {
      const response = await axios.get('https://localhost:7208/DataUtama?id=1');
      setdataPungutan(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 0 }}>
      {/* Navigation Bar */}
      <AppBar position="static" color="primary" sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ mr: 2 }}>NSW</Typography>
          </Box>
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

      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' , height: '40px' }}>
        <Toolbar sx={{ height: '40px', minHeight: '40px !important', px: 1 , justifyContent: 'space-between'}}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="#" color="blue" underline="none" sx={{ mr: 1 }}>Beranda</Link>
            <Typography color="blue">/</Typography>
            <Link href="#" color="blue" underline="none" sx={{ ml: 1 }}>SSM QC</Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowBackIcon sx={{ color: 'blue', mr: 1 }} />
            <Typography variant="body2" sx={{ color: 'blue', mr: 2 }}>
              Beranda Permohonan
            </Typography>
            <HomeIcon sx={{ color: 'blue', mr: 1 }} />
            <Typography variant="body2" sx={{ color: 'blue' }}>
              Beranda Menu
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ mt: 1, backgroundColor: 'white', borderRadius: 2, p: 3 }}>
        {/* Main Tabs */}
        
          <Tabs value={mainTabValue} onChange={handleMainTabChange} centered>
            <Tab icon={<AccountBalanceIcon />} label="Pemberitahuan" />
            <Tab icon={<LocalShippingIcon />} label="Transportasi" />
            <Tab icon={<DescriptionIcon />} label="Dokumen" />
            <Tab icon={<CategoryIcon />} label="Komoditi" />
            <Tab icon={<PeopleIcon />} label="Layanan" />
          </Tabs>
        

        {/* Form Section with Left-Aligned Tabs */}
        <Paper elevation={0} sx={{ p: 3, borderRadius: 2, mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            Data Pemberitahuan
          </Typography>

          {/* Sub-Tabs aligned left */}
          <Tabs
            value={subTabValue}
            onChange={handleSubTabChange}
            indicatorColor="primary"
            textColor="primary"
            TabIndicatorProps={{
              style: {
                height: '3px',
              },
            }}
            sx={{ mb: 2 }}
          >
            <Tab label="Data Utama" sx={{ textTransform: 'none', fontWeight: 'bold', alignItems: 'flex-start' }} />
            <Tab label="Data Entitas" sx={{ textTransform: 'none', fontWeight: 'bold', alignItems: 'flex-start' }} />
            <Tab label="Data Pungutan" sx={{ textTransform: 'none', fontWeight: 'bold', alignItems: 'flex-start' }} />
          </Tabs>

          {/* Content for each Tab */}
          <Box sx={{ backgroundColor: '#f9f9f9', borderRadius: '0 0 4px 4px', p: 3, mt: -1 }}>
            {subTabValue === 0 && <DataUtama data={dataUtama}/>}
            {subTabValue === 1 && <DataEntitas data={dataEntitas}/>}
            {subTabValue === 2 && <DataPungutan data={dataPungutan}/>}
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <Button variant="outlined" size="small">Sebelumnya</Button>
            <Button variant="contained" color="primary" size="small">Selanjutnya</Button>
          </Box>
        </Paper>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#f3f3f3',
          borderTop: '1px solid #ddd',
          py: 1,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © 2020 All Right Reserved |{' '}
          <Link>
            Indonesia National Single Window
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
