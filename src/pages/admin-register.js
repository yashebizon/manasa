import React from 'react';
import AdminSignUpForm from '../components/admin-signup/SignUp';
import { CssBaseline, Container } from '@mui/material';
import '../app/globals.scss'

const Register = () => {
  return (
    <Container component="main" maxWidth="100%" className='loginWrap'>
      <CssBaseline />
      <AdminSignUpForm />
    </Container>
  );
};

export default Register;