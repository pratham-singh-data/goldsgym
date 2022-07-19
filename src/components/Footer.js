import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/images/Logo-1.png";

export const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f3">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="Logo" width="200px" height="40px"/>
        <Typography variant="h5" mt="10px">Gold's Gym Demo App</Typography>

        <Typography variant="h5">Data from <a href="https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/" style={{textDecoration: "none", color: "#ff2625"}}>ExerciseDb</a></Typography>

        <Typography variant="h5">Videos by <a href="https://rapidapi.com/h0p3rwe/api/youtube-search-and-download/" style={{textDecoration: "none", color: "#ff2625"}}>Youtube Search and Download</a></Typography>
        <Link to="/images/attributions" style={{textDecoration: "none", color: "#ff2625"}}>
          <Typography variant="h5">Image Attributions</Typography>
        </Link>
      </Stack>
    </Box>
  )
}
