"use client";
import React from 'react';
import TopCard from '../components/dashboard/topCard';
import YourSelf from '@/components/dashboard/yourSelf';
import { Container, Box, Avatar } from '@mui/material';
import Activity from '@/components/dashboard/activity';
import Link from 'next/link';
import '../app/globals.scss';

const Dashboard = () => {
  return (
    <Container>
      <Box className="dashboardWrap">
        <div className='header'>
          <div className='lefSEc'>
            <h2>Hello Parth</h2>
            <p>Welcome to your safe space!</p>
          </div>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <div className='boxDasTop'>
          <TopCard />
        </div>
        <Link href="/questionnaire">
        <div className='boxDasYourSelf'>
          <YourSelf />
        </div> 
        </Link>
        <div className='boxDasActivity'>
          <Activity />
        </div>
      </Box>
    </Container>
  );
};

export default Dashboard;