import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const About = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is the about page.
        </Typography>
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Go to Home Page
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default About;