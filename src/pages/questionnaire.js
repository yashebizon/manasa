"use client";
import React from 'react';
import Card from '../components/questionnaire-card/cardLayout';
import { Container, Typography, RadioGroup, Box, FormControl, FormControlLabel, FormLabel, Radio, Avatar } from '@mui/material';
import '../app/globals.scss';
import { questions } from '../constant/questionnaire-1';

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
          General Screening
        </Typography>
        <div className='boxDas1'>
            {questions.map((question, index) => (
              <Card key={index} question={question} />
            ))}
        </div>
      </Box>
    </Container>
  );
};

export default Dashboard;