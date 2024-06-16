import React from 'react';
import LoginForm from '../components/login/LoginForm';
import { CssBaseline, Container } from '@mui/material';
import '../app/globals.scss'

const Home = () => {
  return (
    <Container component="main" maxWidth="100%" className='loginWrap'>
      <CssBaseline />
      <LoginForm />
    </Container>
  );
};

export default Home;