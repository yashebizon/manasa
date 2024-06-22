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
import Modal from 'react-modal';
import modalAsset from '../../../public/asset-3.png';
import Image from 'next/image';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Dashboard = () => {

  const router = useRouter();
  const { id } = router.query;

  const [questions, setQuestions] = useState(null);
  const [pageTitle, setPageTitle] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  const renderModal = () => {
    return( 
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
        <Image src={modalAsset} alt="Mini Guide" />
        </div>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Thanks for your feedback!</h2>
        <button onClick={closeModal}>close</button>
        <p>By making your voice heard, you help us</p>
        <p>improve Feastify</p>
        <button>Go home</button>
      </Modal>
    );
  }

  useEffect(() => {
    if (id) {
      let selectedQuestions;
      let pageTitle;
      switch (id) {
        case '1':
          selectedQuestions = questions1;
          pageTitle = "General Initial Screening"
          break;
        case '2':
          selectedQuestions = questions2;
          pageTitle = "Strength Weaknesses Screening"
          break;
        default:
          selectedQuestions = questions3;
          pageTitle = "Peer Parents Screening"
          break;
      }
      setQuestions(selectedQuestions);
      setPageTitle(pageTitle);
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

  let subtitle;

  const countTotal = questions.length;  

  return (
    <Container>
      <Header />
      <Box sx={{ my: 4 }} className="dashboardWrap">
        <Typography variant="h4" component="h1" gutterBottom>
          { pageTitle }
        </Typography>
        <div className='boxDasBox'>
            {questions.map((question, index) => (
              <Card key={index} question={question} indx={index} countTotal={countTotal} />
            ))}
        </div>
        <div>
          <button onClick={openModal}>Submit</button>
            {renderModal()}
        </div>
      </Box>
        
    </Container>
  );
};

export default Dashboard;