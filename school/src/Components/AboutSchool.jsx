import React, { useState } from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BusinessIcon from '@mui/icons-material/Business';
import ServiceIcons from './ServiceIcons.jsx'



const AboutSchool = () => {

    const [activeButton, setActiveButton] = useState('about');

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveButton(id);
        }
    };

    const getButtonStyles = (id) => ({
         margin: '5px',
         color: activeButton === id ? '#3f2189' : '#635881',
            fontWeight: 'bold',
            fontSize: '16px',
            backgroundColor: '#ded8e1',
            position: 'relative',
            textDecoration: 'none',
            '&:after': {
              content: '""',
              display: 'block',
              height: '2px',
              backgroundColor: activeButton === id ? '#3f2189' : '#635881', // Underline color
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: -2,
              transform: activeButton === id ? 'scaleX(1)' : 'scaleX(0)', // Show underline if active
              transition: 'transform 0.3s ease',
            },
            
          });

   

  return (
    <Box sx={{ display: 'flex', fontFamily: 'Poppins', padding: '20px' }}>
      {/* ABOUT SCHOOL */}
      <Box sx={{ flex: 1, padding: '20px' }}>
        <Box
          sx={{
            backgroundColor: '#ded8e1',
            padding: '10px',
            borderRadius: '10px',
            marginBottom: '20px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}>

        <Button onClick={() => scrollToSection('about')} 
        sx={getButtonStyles('about')}>
        About School
        </Button>


        <Button onClick={() => scrollToSection('services')} 
        sx={getButtonStyles('services')}>
        Facilities
        </Button>

        <Button onClick={() => scrollToSection('visit')} 
        sx={getButtonStyles('visit')}>
        Visiting Hours
        </Button>

            <Button
            variant="outlined"
            sx={{
                borderColor:'#1FB892',
                color: '#fef7ff',
                fontSize:'15px',
                backgroundColor:'#1FB892',
                alignItems:'center',
                marginLeft:'399px',
                borderRadius:'20px',
                paddingX: 2.5,
                
                '&:hover': {
                    borderColor: '#1FB892',
                    backgroundColor: '#f8f2fa', 
                    color:'#1FB892',
                   
                },
            }}>
                Enroll Now!
            </Button>
        
          
        </Box>

        <Box id="about" sx={{ marginBottom: '40px' }}>
          <Typography variant="h5" sx={{ color: '#3f2189', fontWeight:'20px' }}>
            About School
          </Typography>
          <Typography sx={{ color:'#494552'}}>
          At XYZ Learning Centre, we believe that early childhood is a crucial time for growth and exploration. Our daycare and childcare programs are designed to provide a safe, nurturing environment where children can thrive. We focus on holistic development, offering a blend of structured learning and creative play that fosters curiosity and social skills. Our dedicated staff is passionate about early education and works closely with each child to inspire a love for learning.

            In our preschool program, we encourage exploration through hands-on activities that cater to various learning styles. Our curriculum is designed to stimulate cognitive, emotional, and physical development, preparing children for future educational success. At XYZ Learning Centre, we celebrate diversity and promote a sense of community, ensuring that every child feels valued and included. Join us in shaping bright futures and joyful memories!
          </Typography>
        </Box>

        <Box id="services" sx={{ marginBottom: '40px' }}>
          <Typography variant="h5" sx={{ color: '#3f2189' }}>
            Facilities
          </Typography>
          <div style= {{ borderBottom:'1px solid #ccc', marginBottom:'15px'}}></div>
          <ServiceIcons/>
        </Box>

        <Box id="visit" sx={{ marginBottom: '40px' }}>
          <Typography variant="h5" sx={{ color: '#3f2189' }}>
            Visiting Hours
          </Typography>
          <Typography sx={{ color:'#494552'}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </Typography>
        </Box>

        
      </Box>

      {/* CONTACT INFO */}
      <Box sx={{ width: '300px', padding: '20px', borderLeft: '1px solid #ccc' }}>
        <Typography variant="h5" sx={{ color: '#322f35', fontWeight:'bold', marginTop:'5px' }}>
          Contact Information
        </Typography >
        <div style= {{ borderBottom:'1px solid #ccc'}}></div>
        <div style={{ marginBottom: '15px' }}>  </div>

        <Typography sx={{fontSize:'18px', color:'#635881',display: 'flex', alignItems: 'flex-start'}}>
          <PhoneIcon sx={{ fontSize: 30, marginBottom:'-6px', marginRight:'6px' }}/> +91-7060777734
        </Typography>

        <div style={{ marginBottom: '15px' }}>  </div>

        <Typography sx={{fontSize:'18px', color:'#635881',display: 'flex', alignItems: 'flex-start'}}>
          <MailOutlineIcon sx={{ fontSize: 30, marginBottom:'-6px', marginRight:'7px'}}/> anushkasoni1004@gmail.com
        </Typography>
        <div style={{ marginBottom: '15px' }}>  </div>

        <Typography sx={{fontSize:'18px', color:'#635881',display: 'flex', alignItems: 'flex-start'}}>
          <BusinessIcon sx={{ fontSize: 30, marginBottom:'-6px', marginRight:'7px'}}/> XYZ Learning Centre, Jaipur, Rajasthan
        </Typography>
       
      </Box>
    </Box>
  );
};

export default AboutSchool;