import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import sessionImage from '../../../public/session-3.png'; 

const SessionThird = () => {
  return (
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Box sx={{ mb: 4 }}>
            <Image src={sessionImage} alt="Intro Image" width={300} height={300} />
          </Box>
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Guided Sessions Designed to help you 
          </Typography>
          <Typography component="p" variant="body1" sx={{ mb: 4 }}>
            Guided sessions are there to help you discuss or chat for your wellbeing with your AI wellbeing supprt.
          </Typography>
        </Grid>
      </Grid>
  );
};

export default SessionThird;
