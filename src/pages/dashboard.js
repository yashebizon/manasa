"use client";
import React from 'react';
import TopCard from '../components/dashboard/topCard';
import YourSelf from '@/components/dashboard/yourSelf';
import { Container, Box } from '@mui/material';
import Activity from '@/components/dashboard/activity';
import '../app/globals.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MiniGuidCard, { DashboardMiniGuidCard } from '../components/mini-guide/index';
import Image from 'next/image';
import miniGuide from '../images/icon4.png'; 
import { MiniGuideLinks } from '../constant/miniGuideSession';
import { DashboardMiniGuideLinks } from '../constant/dashboardMiniGuide';
import Loader from '../components/loader/loader'


const Dashboard = () => {


  const renderMiniCard = () => {
    return(
      MiniGuideLinks.slice(0, 4).map((card, index) => (
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

const renderDashboardMiniCard = () => {
  return(
    DashboardMiniGuideLinks.slice(0, 4).map((card, index) => (
      <DashboardMiniGuidCard
        key={index}
        title={card.title}
        time={card.time}
        url={card.link}
        heading={card.heading}
        imgSrc={card.imgSrc}
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

const renderDashboardMiniGuideList = () => {
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
        {DashboardMiniGuideLinks ? renderDashboardMiniCard() : <Loader/>}
      </ul>
    </main>
  )
};

  return (
    <>
    <Header showBackButton={false}/>
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
          { renderDashboardMiniGuideList() }
        </div>
      </Box>
    <Footer />
    </>
  );
};

export default Dashboard;