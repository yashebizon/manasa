"use client";
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Home = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Home Page
        </Typography>
        </Box>
    </Container>
  );
};
  
export default Home;