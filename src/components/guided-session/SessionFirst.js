import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import sessionImage from '../../../public/session-1.png'; 

const SessionFirst = () => {
  return (
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Box sx={{ mb: 4 }}>
            <Image src={sessionImage} alt="Intro Image" width={300} height={300} />
          </Box>
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Thinking, feeling and doing
          </Typography>
          <Typography component="p" variant="body1" sx={{ mb: 4 }}>
            The guided sessions are purely to walkthrough your emotions and thoughts, and to practice a guided lesson that best suits it.
          </Typography>
        </Grid>
      </Grid>
  );
};

export default SessionFirst;
