import React, { useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import './HeroPage.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

const HeroPage = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <Box className="hero" >
      <Grid container spacing={2} sx={{ padding: { xs: "80px 10px", sm: "60px 40px" } }} data-aos="zoom-in">
        {/* Left Side - Images */}
        <Grid item xs={12} sm={6} >
          <img
            src='https://img.freepik.com/free-vector/characters-people-holding-multimedia-icons-illustration_53876-32615.jpg?t=st=1708882682~exp=1708886282~hmac=42e50032835dd1db183d3a31a1a41e029a7a1a8d447286e67e50459846fd40fa&w=1380'
            alt="Movie"
            className="hero-img"
          />
        </Grid>

        {/* Right Side - Text and Button */}
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Typography
              className="head_tagline"
              sx={{ textTransform: "uppercase", fontWeight: "bold", lineHeight: "1.5", marginBottom: "1rem" ,textAlign:"center",fontSize:{xs:"2.5rem",sm:"3rem"}}}
            >
              Dive into a Cinematic World with moviesHub
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", width: "100%", lineHeight: "1.5", marginBottom: "1rem" }}
              color="initial"
            >
              Explore a vast collection of the latest releases, timeless classics, and hidden gems on moviesHub. From thrilling action-packed blockbusters to heartwarming dramas, we curate the best for every movie enthusiast. Immerse yourself in an unparalleled cinematic experience with our diverse selection of films.
            </Typography>
            <Link to="/movies">
              <Button variant="contained" sx={{ borderRadius: "50px", padding: { xs: "8px 20px", sm: "10px 30px" }, fontSize: "1.2rem" }}>
                Start Exploring
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroPage;
