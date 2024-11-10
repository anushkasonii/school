import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import logo from '../Assets/logo.png'; 
const NameLogo = () => {
    return (
      <Box 
        display="flex" 
        alignItems="center" 
        p={2}  
      >
        <Avatar 
          alt="Logo Of XYZ Learning Centre" 
          src={logo} 
          sx={{ width: 80, height: 80, mr: 2 }} 
        />
        <Box>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ fontFamily: 'Poppins', color: '#53389E' }}
          >
            XYZ Learning Centre
          </Typography>
          <div style={{ marginBottom: '-10px' }}></div>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ fontFamily: 'Poppins', color: '#635881', mt: 1 }} 
          >
            Daycare and Childcare, Preschools, Centre
          </Typography>
        </Box>
      </Box>
    );
  };

  export default NameLogo;