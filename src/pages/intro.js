import React from 'react';
import { CssBaseline } from '@mui/material';
import IntroIndex from '../components/program-summary';
import withAuth from '@/components/auth/WithAuth';

const Intro = () => {
  return (
    <>
      <CssBaseline />
      <IntroIndex />
    </>
  );
};

export default Intro;