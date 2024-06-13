import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import introImage from '../../../public/intro-1.png'; 

const IntroFirst = () => {
  return (
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Box sx={{ mb: 4 }}>
            <Image src={introImage} alt="Intro Image" width={300} height={300} />
          </Box>
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Elevating your therapy
          </Typography>
          <Typography component="p" variant="body1" sx={{ mb: 4 }}>
            Manasa makes your therapy more effective, by supporting you with guided sessions and personal learning under Manodarpan - Ministry of Education.
          </Typography>
        </Grid>
      </Grid>
  );
};

export default IntroFirst;
