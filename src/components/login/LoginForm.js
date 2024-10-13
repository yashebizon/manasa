/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import fetchMutation,  {fetchUrlEncodedMutation} from '../../util/request/fetchMutation';
import Loader from '../loader/loader'
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation'
import { Container, TextField, Button, Avatar, Typography, Box, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './LoginForm.scss'
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import Cookies from 'universal-cookie';


const LoginForm = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [errors, setErrors] = useState({});
  const [userRole, setUserRole] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value // Use the input name as the key
        });
    };

  const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    if (validateForm()) {
    setLoading(true);
    try {
        const response = await fetchUrlEncodedMutation('https://api.manoveda.health/api/login', formData);
        const {data, status, error, errors
        } = response;
        if(status && status === 200){
          toast.success('Logged in Successfully');
          const { jwtToken, name, email, gender, userRole } = data;
          setUserRole(userRole);
          cookies.set('userToken', jwtToken);
          cookies.set('userName', name);
          cookies.set('userEmail', email);
          cookies.set('userGender', gender);
          cookies.set('userRole', userRole);
          setAuthenticated(true);
        }
        else if(error) {
            const {message} = error;
            toast.error(message);
        }
        else if(errors){
            const errObj = errors[0];
            const { msg } = errObj;
            toast.error(msg);
        }
        else{
            toast.error('Something went wrong!');
        }
    } catch (error) {
        toast.error('There was an error, please try again after sometime !');

    } finally {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }
    }
      else {
        toast.error('Please fill all the required fields!');
      }
};

useEffect(() => {
    // Check if authentication state changes
    if (authenticated) {
        // Once authenticated, navigate to the dashboard
        if(userRole && userRole === 'teacher'){
            router.push('/admin-panel');
        }
        else{
            router.push('/dashboard');
        }
    }
}, [authenticated]); // Run whenever 'authenticated' state changes

const renderLoginForm = () => {
    if(loading){
        return(
            <Loader/>
        )
    }

    return(
        <Container component="main" maxWidth="xs">
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
        >
        <div className="loginBox">
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        error={!!errors.email}
                        helperText={errors.email}
                        value={formData.email || null}
                        onChange={handleChange}
                        />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        autoFocus
                        error={!!errors.password}
                        helperText={errors.password}
                        value={formData.password || null}
                        onChange={handleChange}
                        />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
            <div className='loginBtnWrap'>
                <div className='forgetPass'>
                    <Link href="#">Forget Password?</Link>
                </div>
                <div className='signUp'>
                    Dont have an account? <Link href="/register">Sign Up</Link>
                </div>
            </div>
        </div>
        </Grid>
        </Container>
    )
}

  return (
    <>
        { renderLoginForm() }
    </>
  );
};

export default LoginForm;
