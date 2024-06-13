import React from 'react';
import SignUpForm from '../components/signup/SignUp';
import { CssBaseline, Container } from '@mui/material';
import '../app/globals.scss'

const Register = () => {
  return (
    <Container component="main" maxWidth="100%" className='loginWrap'>
      <CssBaseline />
      <SignUpForm />
    </Container>
  );
};

export default Register;