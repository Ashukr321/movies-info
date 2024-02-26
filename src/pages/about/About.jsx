import React, { useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import Aos  from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '80px 20px', sm: '120px 40px' },
      }}
      data-aos="zoom-in"
    >
     
        <Typography variant="h4" textAlign="center" fontWeight="bold" marginBottom="2rem">
          About Us
        </Typography>
        <Typography paragraph>
          Welcome to our platform! We are passionate about movies and TV shows, and our mission is to provide
          comprehensive information about a wide range of audiovisual content.
        </Typography>
        <Typography paragraph>
          At our core, we believe in the power of storytelling and how it can connect people from different walks
          of life. Our database is meticulously curated to offer you the most accurate and up-to-date information
          about your favorite movies and TV series.
        </Typography>
        <Typography paragraph>
          Our team of dedicated individuals works tirelessly to ensure that you have a seamless experience while
          exploring our platform. Whether you're a casual viewer or a film buff, we've got something for
          everyone.
        </Typography>
        <Typography paragraph>
          Feel free to explore, discover, and immerse yourself in the world of entertainment with us. Thank you
          for being a part of our community!
        </Typography>
    </Container>
  );
};

export default About;
