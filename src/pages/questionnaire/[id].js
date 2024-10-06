/* eslint-disable react-hooks/exhaustive-deps */
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
import fetchMutation,  {fetchUrlEncodedMutation} from '../../util/request/fetchMutation';
import fetchQuery from '../../util/request/fetchQuery';

import Cookies from 'universal-cookie';

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

  const [questions, setQuestions] = useState([]);
  const [pageTitle, setPageTitle] = useState('');
  const [questionnaireType, setQuestionnaireType] = useState(''); 
  const [modalIsOpen, setIsOpen] = useState(false);
  const [overallCount, setOverallCount] = useState(0);
  const [lastSelectedIndex, setLastSelectedIndex] = useState(null);
  const [optionValue, setOptionValue] = useState([]);
  const [questionnaireResponse, setQuestionnaireResponse] = useState([]);
  const [submitDisable, setSubmitDisable] = useState(false);

  const cookies = new Cookies();

  const myCookie = cookies.get('userToken');

  async function openModal() {
    setSubmitDisable(false)
    const userRespones = {questionnaires: questionnaireResponse}
    if(questionnaireResponse.length === questions.length){
      setIsOpen(true);
      const questionnaireSubmit = await fetchMutation('/api/create-user-questionnaires', userRespones, myCookie)
      if(questionnaireSubmit && questionnaireSubmit.status === 200 || questionnaireSubmit.status === 201){
        return setSubmitDisable(true)
     } else {
      return(  
          toast.error(t('Something went wrong!!! Please try again after sometime'))
        );
      }
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

  const handleRadioSelect = (responseId, questionId, category) => {
    setQuestionnaireResponse(prevState => {
      // Check if questionId already exists in the state
      const existingResponseIndex = prevState.findIndex(response => response.questionId === questionId);
  
      const newResponse = {
        responseId,
        questionId,
        category
      };
  
      if (existingResponseIndex !== -1) {
        // Update the existing response if questionId is found
        const updatedResponse = [...prevState];
        updatedResponse[existingResponseIndex] = newResponse;
        return updatedResponse;
      } else {
        // Append the new response if questionId is not found
        return [...prevState, newResponse];
      }
    });
  
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
    async function fetchData() {
      if (id) {
        let selectedQuestions;
        let pageTitle;
        let questionnaireType;
  
        switch (id) {
          case '1':
            selectedQuestions = questions1;
            pageTitle = "General Initial Screening";
            questionnaireType = "general";
            break;
          case '2':
            selectedQuestions = questions2;
            pageTitle = "Strength & Weakness Screening";
            questionnaireType = "strengthWeakness";
            break;
          default:
            selectedQuestions = questions3;
            pageTitle = "Peer Parents Screening";
            questionnaireType = "peerParents";
            break;
        }
  
        setPageTitle(pageTitle);
        setQuestionnaireType(questionnaireType);
  
        if (questionnaireType && myCookie) {
          const categoryData = { category: questionnaireType };
  
          try {
            const response = await fetchUrlEncodedMutation('/api/questionnaires', categoryData, myCookie);
  
            if (response && response.data) {
              const { data } = response;
              setQuestions(data);
            } else {
              console.error('No data returned from the API');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }

        try {
          const response = await fetchQuery('/api/questionnaires-response', myCookie);

          if (response && response.data) {
            const { data } = response;
            setOptionValue(data);
          } else {
            console.error('No data returned from the API');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
  
    fetchData();
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
              question={question.question} 
              indx={index} 
              countTotal={countTotal}                     
              onRadioSelect={handleRadioSelect}
              options={optionValue}
              questionId={question._id}
              category={questionnaireType}
              />
            ))}
        </div>
        <div className='submitBtn'>
          <button disabled={submitDisable} onClick={openModal}>{t('Submit')}</button>
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