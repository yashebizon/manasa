"use client";
import React from 'react';
import TopCard from '../components/dashboard/topCard';
import YourSelf from '@/components/dashboard/yourSelf';
import { Container, Box } from '@mui/material';
import Activity from '@/components/dashboard/activity';
import '../app/globals.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';

const Dashboard = () => {
  return (
    <>
    <Header />
    <Container>
      <Box className="dashboardWrap">
        <div className='boxDasTop'>
          <TopCard />
        </div>
          <div className='boxDasYourSelf'>
            <YourSelf />
          </div>
        <div className='boxDasActivity'>
          <Activity />
        </div>
      </Box>
    </Container>
    <Footer />
    </>
  );
};

export default Dashboard;