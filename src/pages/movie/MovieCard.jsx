import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Aos from 'aos'
import 'aos/dist/aos.css'
const MovieCard = ({ poster, title, type, year }) => {
  useEffect(()=>{
    Aos.init();
  },
  )
  return (
    <Card sx={{ width: 345, height: 290 }} data-aos="fade-up">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          image={poster}
          alt="Movie Poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {type} - {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
