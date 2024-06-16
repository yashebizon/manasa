import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import sessionImage from '../../../public/session-2.png'; 

const SessionSecond = () => {
  return (
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Box sx={{ mb: 4 }}>
            <Image src={sessionImage} alt="Intro Image" width={300} height={300} />
          </Box>
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Not a replacement for therapist 
          </Typography>
          <Typography component="p" variant="body1" sx={{ mb: 4 }}>
            These sessions are not a replacement to your therapist or counselor and its suggested to book a session for them following this guided session if necessary.
          </Typography>
        </Grid>
      </Grid>
  );
};

export default SessionSecond;
