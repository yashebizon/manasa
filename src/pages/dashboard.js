"use client";
import React from 'react';
import TopCard from '../components/dashboard/topCard';
import YourSelf from '@/components/dashboard/yourSelf';
import { Container, Box } from '@mui/material';
import Activity from '@/components/dashboard/activity';
import '../app/globals.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MiniGuidCard from '../components/mini-guide/index';
import Image from 'next/image';
import miniGuide from '../images/icon4.png'; 
import { MiniGuideLinks } from '../constant/miniGuideSession';
import Loader from '../components/loader/loader'


const Dashboard = () => {


  const renderMiniCard = () => {
    return(
       MiniGuideLinks.map((card, index) => (
        <MiniGuidCard
          key={index}
          title={card.title}
          time={card.time}
          url={card.link}
          heading={card.heading}
        />
      ))
    )
}

const renderMiniGuideList = () => {
  return(
    <main className="miniGuideWrap">
      <div className='miniGuideTop'>
        <div className='lfIcon'>
          <Image src={miniGuide} alt="Mini Guide" />
        </div>
        <div className='rlTitle'>
          <h1>Learn more with Mini guide</h1>
          <p>Self care made easy with podcast</p>
        </div>
      </div>
      <ul className='miniGuideCard'>
        {MiniGuideLinks ? renderMiniCard() : <Loader/>}
      </ul>
    </main>
  )
};

  return (
    <>
    <Header />
    <Container>
      <Box className="dashboardWrap">
        <div className='boxDasTop'>
          <TopCard />
        </div>
          <div className='boxDasYourSelf'>
            <YourSelf />
          </div>
        <div className='boxDasActivity'>
          <Activity />
        </div>
        <div>
          { renderMiniGuideList() }
        </div>
      </Box>
    </Container>
    <Footer />
    </>
  );
};

export default Dashboard;