"use client";
import React, { useState, useEffect } from 'react';
import Card from '../../components/questionnaire-card/cardLayout';
import { Container, Typography, Box, Grid, CircularProgress } from '@mui/material';
import '../../app/globals.scss';
import { questions1, questions2, questions3 } from '../../constant/questionnaire';
import Header from '@/components/header';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import modalAsset from '../../../public/asset-3.png';
import Image from 'next/image';
import EmojiCard from '@/components/emoji-card';
import withAuth from '@/components/auth/WithAuth';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { toast } from 'react-hot-toast';


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
  const { t } = useTranslation()
  const router = useRouter();
  const { id } = router.query;

  const [questions, setQuestions] = useState(null);
  const [pageTitle, setPageTitle] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [overallCount, setOverallCount] = useState(0);
  const [lastSelectedIndex, setLastSelectedIndex] = useState(null);


  function openModal() {
    if(overallCount === 25){
       return setIsOpen(true);
    }
    toast.error(t('Please fill all responses to sumbit !!'));
    return null;  }

  function closeModal() {
    setIsOpen(false);
  }

  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  const handleRadioSelect = (index) => {
    if (index !== lastSelectedIndex) {
        setLastSelectedIndex(index);
        setOverallCount(prevCount => prevCount + 1);
    }
};

  const renderModal = () => {
    return( 
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        id="qsnModal"
      >
        <button onClick={closeModal} className='closeBtn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-2.917 2.925q-.277.275-.704.275t-.704-.275q-.275-.275-.275-.7t.275-.7L10.6 12L7.675 9.108Q7.4 8.831 7.4 8.404t.275-.704q.275-.275.7-.275t.7.275L12 10.625L14.892 7.7q.277-.275.704-.275t.704.275q.3.3.3.713t-.3.687L13.375 12l2.925 2.917q.275.277.275.704t-.275.704q-.3.3-.712.3t-.688-.3z"/></svg>
        </button>
        <div className='imagWrap'>
          <Image src={modalAsset} alt="Mini Guide" />
        </div>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{t('Thank you for completing the screening.')}</h2>
        <p>{t('Your response has been submitted to your counselor.')}</p>
        <button className='goHome' onClick={() => router.push('/dashboard')}>{t('Go home')}</button>
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
          pageTitle = "General Initial Screening";
          break;
        case '2':
          selectedQuestions = questions2;
          pageTitle = "Strength Weaknesses Screening";
          break;
        default:
          selectedQuestions = questions3;
          pageTitle = "Peer Parents Screening";
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

  const countTotal = questions.length;  

  return (
    <Container>
      <Header showBackButton={true}/>
      <Box sx={{ my: 4 }} className="dashboardWrap">
        <Typography variant="h4" component="h1" gutterBottom>
          { t(pageTitle) }
        </Typography>
        <div>
          <EmojiCard />
        </div>
        <div className='boxDasBox'>
            {questions.map((question, index) => (
              <Card 
              key={index} 
              question={question} 
              indx={index} 
              countTotal={countTotal}                     
              onRadioSelect={handleRadioSelect}
              />
            ))}
        </div>
        <div className='submitBtn'>
          <button onClick={openModal}>{t('Submit')}</button>
            {renderModal()}
        </div>
      </Box>
    </Container>
  );
};

export async function getStaticPaths() {
  // Define the paths to pre-render based on the IDs available
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } }
  ];

  return { paths, fallback: true };
}

export async function getStaticProps({ params, locale }) {
  // Fetch translations for the locale
  const translations = await serverSideTranslations(locale);

  return {
    props: {
      ...translations
    }
  };
}

export default Dashboard;