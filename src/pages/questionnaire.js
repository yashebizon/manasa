"use client";
import React from 'react';
import Card from '../components/questionnaire-card/cardLayout';
import { Container, Typography, RadioGroup, Box, FormControl, FormControlLabel, FormLabel, Radio, Avatar } from '@mui/material';
import '../app/globals.scss';

const Dashboard = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }} className="dashboardWrap">
        <div className='header'>
          <div className='lefSEc'>
            <h2>Hello Parth</h2>
            <p>Welcome to your safe space!</p>
          </div>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Dashboard Page
        </Typography>
        <div className='boxDas1'>
          <Card/>
        </div>
        <div className='boxDas2'>
          <Card/>
        </div>
        <div className='boxDas3'>
          <Card/>
        </div>
        <div className='boxDas4'>
        <Card/>
        </div>
      </Box>
    </Container>
  );
};

export default Dashboard;