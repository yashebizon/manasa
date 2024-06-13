import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import introImage from '../../../public/intro-2.png'; 

const IntroSecond = () => {
  return (
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Box sx={{ mb: 4 }}>
            <Image src={introImage} alt="Intro Image" width={300} height={300} />
          </Box>
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Here to support you
          </Typography>
          <Typography component="p" variant="body1" sx={{ mb: 4 }}>
            Manasa is here to help you when you are struggling, and helps you to reflect on how you are feeling.
          </Typography>
        </Grid>
      </Grid>
  );
};

export default IntroSecond;
