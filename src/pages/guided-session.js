import React from 'react';
import { CssBaseline } from '@mui/material';
import GuidedSession from '../components/guided-session';
import withAuth from '@/components/auth/WithAuth';

const Intro = () => {
  return (
    <>
      <CssBaseline />
      <GuidedSession />
    </>
  );
};

export default Intro;