import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import introImage from '../../../public/intro-3.png'; 

const IntroThird = () => {
  return (
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Box sx={{ mb: 4 }}>
            <Image src={introImage} alt="Intro Image" width={300} height={300} />
          </Box>
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Safe and Secure
          </Typography>
          <Typography component="p" variant="body1" sx={{ mb: 4 }}>
            Everything you discuss with Manasa is confidential and only shared with your therapist/counsellor.
          </Typography>
        </Grid>
      </Grid>
  );
};

export default IntroThird;
