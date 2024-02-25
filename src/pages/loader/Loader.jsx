import React from 'react'
import './Loader.css'
import { Box } from '@mui/material'
const Loader = () => {
  return (
    <Box sx={{display:"flex",height:"100vh",justifyContent:"center", alignItems:"center"}}>
      <div class="loader"></div>
    </Box>
  )
}

export default Loader