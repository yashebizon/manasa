import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './chartPage.scss';
import Link from 'next/link';
import Image from 'next/image'; 
import img from '../../../src/images/page/std.jpg';
import std1 from '../../../src/images/page/std1.jpg';
import std2 from '../../../src/images/page/std2.jpg';
import graph1 from '../../../src/images/graphs/graph1.jpg';
import graph2 from '../../../src/images/graphs/graph2.jpg';
import graph3 from '../../../src/images/graphs/graph3.jpg';
import graph4 from '../../../src/images/graphs/graph4.jpg';
import graph1hindi from '../../../src/images/graphs/graph1hindi.jpeg';
import graph2hindi from '../../../src/images/graphs/graph2hindi.jpeg';
import graph3hindi from '../../../src/images/graphs/graph3hindi.jpeg';
import graph4hindi from '../../../src/images/graphs/graph4hindi.jpeg';
import Header from '../page-header';
import StudentList from '../student-list';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'



const ChartPage = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState(new Date());
  const router = useRouter()

  const { locale } = router;

  console.log('yash', locale);

  const onChange = (newValue) => {
    setValue(newValue);
  };

    // Define image sources for different locales
  const Graph1image = {
      en: graph1,
      hi: graph1hindi,
      // Add other locales as needed
  };

  const Graph2image = {
    en: graph2,
    hi: graph2hindi,
    // Add other locales as needed
  };

  const Graph3image = {
    en: graph3,
    hi: graph3hindi,
    // Add other locales as needed
  } ;
  const Graph4image = {
    en: graph4,
    hi: graph4hindi,
    // Add other locales as needed
  };

  return (
    <div className='chartPage'>
      <Header />
      <div className='chartPageWrap'>
        <div className='chartPageLeft'>
          <div className='chartPageTopSec'>
            <div className='tpBox'>
              <Image src={img} alt="Class Image" width={50} height={50} />
              {t('Class 9-C')}
            </div>
            <div className='tpBox'>
              <Image src={img} alt="Total Students" width={50} height={50} />
              50 <br />
              {t('Total Students')}
            </div>
            <div className='tpBox'>
              <Image src={std1} alt="Appointments" width={50} height={50} />
              21 <br />
              {t('Appointment')}
            </div>
            <div className='tpBox'>
              <Image src={std2} alt="Unread Mail" width={50} height={50} />
              10 <br />
              {t('Unread Mail')}
            </div>
          </div>
          <div className='chartPageBotSec'>
            <div className='graph'>
              <Image src={Graph1image[locale] || Graph1image['en']} alt="Class Image" />
            </div>
            <div className='graph'>
              <Image src={Graph2image[locale] || Graph2image['en']} alt="Class Image" />
            </div>
            <div className='graph'>
              <Image src={Graph3image[locale] || Graph3image['en']} alt="Class Image" />
            </div>
            <div className='graph'>
              <Image src={Graph4image[locale] || Graph4image['en']} alt="Class Image" />
            </div>
          </div>
        </div>
        <div className='chartPageRight'>
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
      <StudentList />
    </div>
  );
};

export default ChartPage;
