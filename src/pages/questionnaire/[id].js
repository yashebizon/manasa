"use client";
import React, { useState, useEffect } from 'react';
import Card from '../../components/questionnaire-card/cardLayout';
import { Container, Typography, RadioGroup, Box, FormControl, FormControlLabel, FormLabel, Radio, Avatar } from '@mui/material';
import '../../app/globals.scss';
import { questions1, questions2, questions3 } from '../../constant/questionnaire';
import Header from '@/components/header';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const Dashboard = () => {

  const router = useRouter();
  const { id } = router.query;

  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    if (id) {
      let selectedQuestions;
      switch (id) {
        case '1':
          selectedQuestions = questions1;
          break;
        case '2':
          selectedQuestions = questions2;
          break;
        default:
          selectedQuestions = questions3;
          break;
      }
      setQuestions(selectedQuestions);
    }
  }, [id]);

  if (!questions) {
    return (
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }

  
  return (
    <Container>
      <Header />
      <Box sx={{ my: 4 }} className="dashboardWrap">
        <Typography variant="h4" component="h1" gutterBottom>
          { `General Screening ${id}` }
        </Typography>
        <div className='boxDasBox'>
            {questions.map((question, index) => (
              <Card key={index} question={question} />
            ))}
        </div>
      </Box>
    </Container>
  );
};

export default Dashboard;