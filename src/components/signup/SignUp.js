import React, { useState, useEffect } from 'react';
import fetchMutation, {fetchUrlEncodedMutation} from '../../util/request/fetchMutation';
import Loader from '../loader/loader'
import { useRouter } from 'next/router';
import { Container, TextField, Button, Avatar, Typography, Box, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from './SignUp.module.scss';
import Cookies from 'universal-cookie';
import { toast } from 'react-hot-toast';

const SignUpForm = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    // validateForm();
    setFormData({
        ...formData,
        [e.target.name]: e.target.value // Use the input name as the key
    });
};

const validateForm = () => {
  const newErrors = {};
  if (!formData.name) newErrors.name = 'First Name is required';
  if (!formData.email) newErrors.email = 'Email is required';
  if (!formData.password) newErrors.password = 'Password is required';
  if (!formData.schoolId) newErrors.schoolId = 'School is required';
  if (!formData.studentClass) newErrors.studentClass = 'Class is required';
  if (!formData.section) newErrors.section = 'Section is required';
  if (!formData.parentName) newErrors.parentName = 'Guardian is required';
  if (!formData.parentNumber) newErrors.parentNumber = 'Phone is required';

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const cookies = new Cookies();
  if (validateForm()) {
  setLoading(true);
  try {
      const response = await fetchUrlEncodedMutation('/api/user', formData );
      const {data, status, error, errors
      } = response;
      if(status === 200){
        toast.success('User Registered Successfully');
        const { jwtToken } = data;
        cookies.set('userToken', jwtToken);
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
     toast.error('Something went wrong!');
  } finally {
      setTimeout(() => {
          setLoading(false);
      }, 1500);
  }
} else {
  toast.error('Please fill all the required fields!');
}
};

useEffect(() => {
    // Check if authentication state changes
    if (authenticated) {
        // Once authenticated, navigate to the dashboard
        router.push('/intro');
    }
}, [authenticated]); // Run whenever 'authenticated' state changes

const renderSignUpForm = () => {
  if(loading){
      return(
          <Loader/>
      )
  }
  return (
    <Container component="main" maxWidth="xs">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <div className={styles.loginBox}>
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
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="name"
                autoFocus
                error={!!errors.name}
                helperText={errors.name}
                value={formData.name}
                onChange={handleChange}
                />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
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
                autoFocus
                error={!!errors.password}
                helperText={errors.password}
                value={formData.password || null}
                onChange={handleChange}
                />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="schoolId"
                label="School Name"
                id="school"
                error={!!errors.schoolId}
                helperText={errors.schoolId}
                value={formData.schoolId}
                onChange={handleChange}
                />
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="studentClass"
                label="Class"
                id="class"
                error={!!errors.studentClass}
                helperText={errors.studentClass}
                value={formData.studentClass}
                onChange={handleChange}
                />
              </Grid>
                <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="section"
                label="Section Name"
                id="section"
                error={!!errors.section}
                helperText={errors.section}
                value={formData.section}
                onChange={handleChange}
                />
              </Grid>
              </Grid>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="parentName"
                label="Guardian Name"
                id="guardian"
                error={!!errors.parentName}
                helperText={errors.parentName}
                value={formData.parentName}
                onChange={handleChange}
                />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="parentNumber"
                label="Guardian Number"
                id="Phone"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                error={!!errors.parentNumber}
                helperText={errors.parentNumber}
                value={formData.parentNumber}
                onChange={handleChange}
                />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </div>
      </Grid>
    </Container>
  );
}
  return (
    <>
        { renderSignUpForm() }
    </>
  );

};

export default SignUpForm;