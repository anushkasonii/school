import React from 'react';
import { Box, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMediaBar = () => {
  const handleClick = (platform) => {

    console.log(`Navigating to ${platform}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1px', marginLeft:'1085px', marginTop:'-84px' }}>
      <Button 
        onClick={() => handleClick('Facebook')} 
        sx={{ 
          backgroundColor: 'white',
          color: '#49454e',
          fontSize: '20px', 
        }} 
      >
        <FacebookIcon sx={{ fontSize: '30px' }}/>
      </Button>

      <Button
       onClick={() => handleClick('Instagram')}
       sx={{ 
        backgroundColor: 'white',
        color: '#49454e',
        fontSize: '20px', 
        }} 
        >
         <InstagramIcon sx={{ fontSize: '30px' }}/>
       
      </Button>

      <Button 
      onClick={() => handleClick('YouTube')}
      sx={{ 
        backgroundColor: 'white',
        color: '#49454e',
        fontSize: '20px', 
      }} 
       >
         <YouTubeIcon sx={{ fontSize: '35px' }}/>
       
      </Button>

      <Button onClick={() => handleClick('Twitter')}
       sx={{ 
        backgroundColor: 'white',
        color: '#49454e',
        fontSize: '20px', 
      }} 
       >
         <TwitterIcon sx={{ fontSize: '30px' }}/>
       
      </Button>
      <Button onClick={() => handleClick('LinkedIn')} 
      sx={{ 
        backgroundColor: 'white',
        color: '#49454e',
        fontSize: '20px', 
      }} 
       >
         <LinkedInIcon sx={{ fontSize: '30px' }}/>
       
      </Button>
    </Box>
  );
};

export default SocialMediaBar;
