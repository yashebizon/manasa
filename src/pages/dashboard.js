"use client";
import React from 'react';
import TopCard from '../components/dashboard/topCard';
import YourSelf from '@/components/dashboard/yourSelf';
import { Container, Box } from '@mui/material';
import Activity from '@/components/dashboard/activity';
import Link from 'next/link';
import '../app/globals.scss';
import Header from '@/components/header';

const Dashboard = () => {
  return (
    <>
    <Header />
    <Container>
      <Box className="dashboardWrap">
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
    </>
  );
};

export default Dashboard;