import React, { useState, useEffect } from 'react';
import fetchMutation, {fetchUrlEncodedMutation} from '../../util/request/fetchMutation';
import Loader from '../loader/loader'
import { useRouter } from 'next/router';
import { Container, TextField, Button, Avatar, Typography, Box, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from './SignUp.module.scss';
import Cookies from 'universal-cookie';
import { toast } from 'react-hot-toast';
import {classNames, classSections, genders, schools} from './constant';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const AdminSignUpForm = () => {
  const [formData, setFormData] = useState({userRole: 'teacher'});
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    // validateForm();
    setFormData({
        ...formData,
        [e.target.name]: e.target.value // Use the input name as the key
    });
};

const handleAddValue = () => {
  const concatenatedValue = `${formData.studentClass} - ${formData.section}`;
  if (formData.studentClass && formData.section && formData.studentClass.trim() !== '' && formData.section.trim() !== '') {
    setValues((prevValues) => {
      const updatedValues = [...prevValues, concatenatedValue];
      
      // Ensure the formData is updated with the latest 'classes' state
      setFormData((prevFormData) => ({
        ...prevFormData,
        studentClass: '',
        section: ''
      }));
      return updatedValues;
    });
  } else {
    // Handle errors if necessary
    setErrors({
      studentClass: formData.studentClass ? '' : 'Class is required',
      section: formData.section ? '' : 'Section is required',
    });
  }
};

const handleRemoveValue = (index) => {
  setValues(values.filter((_, i) => i !== index));
};

const validateForm = () => {
  const newErrors = {};
  if (!formData.name) newErrors.name = 'First Name is required';
  if (!formData.lastName) newErrors.lastName = 'Last Name is required';
  if (!formData.email) newErrors.email = 'Email is required';
  if (!formData.password) newErrors.password = 'Password is required';
  if (!formData.schoolId) newErrors.schoolId = 'School is required';
  if (!formData.classes && !formData.studentClass) newErrors.studentClass = 'Class is required';
  if (!formData.classes && !formData.section ) newErrors.section = 'Section is required';
  if (!formData.gender ) newErrors.gender = 'Gender is required';

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const cookies = new Cookies();
  if (validateForm()) {
  setLoading(true);
  console.log('yanu12', formData);
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

useEffect(() => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    classes: values
    }));
}, [values]); // Run whenever 'authenticated' state changes

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
            <Box component="form" noValidate sx={{ mt: 1 }}>
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
                id="lastName"
                label="Last Name"
                name="lastName"
                autoFocus
                error={!!errors.lastName}
                helperText={errors.lastName}
                value={formData.lastName}
                onChange={handleChange}
                />
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="gender"
                label="Gender"
                name="gender"
                autoFocus
                error={!!errors.gender}
                helperText={errors.gender}
                value={formData.gender}
                onChange={handleChange}
                >
                {genders.map((gender, index) => (
                  <MenuItem key={index} value={gender}>
                    {gender}
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
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
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">School</InputLabel>
                <Select
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
                >
                {schools.map((school, index) => (
                  <MenuItem key={index} value={school.id}>
                    {school.name}
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Class</InputLabel>
                  <Select
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
                  >
                  {classNames.map((className, index) => (
                    <MenuItem key={index} value={className}>
                      {className}
                    </MenuItem>
                  ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Section</InputLabel>
                <Select
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
                >
                {classSections.map((classSection, index) => (
                  <MenuItem key={index} value={classSection}>
                    {classSection}
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
              <Button onClick={handleAddValue} className={styles.addButton}>
                + Add
               </Button>
               <ul className={styles.addListData}>
                  {values.map((value, index) => (
                    <li key={index}>
                      {value}
                      <button onClick={() => handleRemoveValue(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
                      </button>
                    </li>
                  ))}
                </ul>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
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

export default AdminSignUpForm;