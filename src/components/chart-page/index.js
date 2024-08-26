import React, { useState, useEffect } from 'react';
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
import { useRouter } from 'next/router';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import fetchQuery from '@/util/request/fetchQuery';
import Cookies from 'universal-cookie';
import { fetchUrlEncodedMutation } from '../../util/request/fetchMutation';


const ChartPage = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState(new Date());
  const router = useRouter();
  const [graphData, setGraphData] = useState({});
  const [teacherClasses, setTeacherClasses] = useState([]);
  const [studentCount, setStudentCount] = useState(0);

  const cookies = new Cookies();

  const myCookie = cookies.get('userToken');

  const { locale } = router;

  const onChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function fetchDashboardDetails() {
        try {
          const response = await fetchQuery('/api/teacher-dashboard', myCookie);

          if (response && response.data) {
            const { data } = response;
            console.log('yanu11', data);
            setTeacherClasses(data[0]);
            setStudentCount(data[1].studentsCount);
          } else {
            console.error('No data returned from the API');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      
    }
    async function fetchGraphDetails() {

      const payload = {
        filter: ''
      };
      try {
        const response = await fetchUrlEncodedMutation('/api/teacher-dashboard-graph', payload, myCookie);

        if (response && response.data) {
          const { data } = response;
          setGraphData(data[0]);
        } else {
          console.error('No data returned from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
  }
  
    fetchDashboardDetails();
    fetchGraphDetails();
  }, [myCookie]);

  console.log('yanu12', graphData, teacherClasses, studentCount);

  const renderChartPageTopSec = () => {
    return (
      <div className='chartPageTopSec'>
        <div className='tpBox'>
          <Image src={img} alt="Class Image" width={50} height={50} />
          {t('Class 9-C')}
        </div>
        <div className='tpBox'>
          <Image src={img} alt="Total Students" width={50} height={50} />
          { studentCount } <br /> {/* Assuming 30 is the static student count */}
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
    );
  };

  const renderScreeningPieChart = () => {
    const screeningPieChartData = [
      { value: 120 },
      { value: 120 },
      { value: 120 },
    ];
  
    return (
      <div className='graph'>
        <h3>Screening Completed Per Modules</h3>
        <div className='graphRight'>
          <div className='blue'>General Assessment 87%</div>
          <div className='org'>Strength and Weaknesses 57%</div>  
          <div className='grn'>Parent Peer Pressure 16%</div>
        </div>
        <PieChart
          series={[
            {
              data: screeningPieChartData,
              innerRadius: 20,
              outerRadius: 80,
              paddingAngle: 0,  // No gaps between the segments
              cornerRadius: 5,
              startAngle: 0,    // Start the pie chart at 0 degrees
              endAngle: 360,    // End the pie chart at 360 degrees to form a full circle
              cx: 84,
              cy: 140,
            }
          ]}
          height={270}
        />
      </div>
    );
  };

  const renderLearningPieChart = () => {
    const learningPieChartData = [
      { value: 120 },
      { value: 120 },
      { value: 120 },
    ];
  
    return (
      <div className='graph'>
      <h3>Learning Modules Completed</h3>
      <div className='graphRight'>
        <div className='blue'>General Assessment 87%</div>
        <div className='org'>Strenght and Weaknesses 57</div>  
        <div className='grn'>Parent Peer Pressure 16%</div>
      </div>
        <PieChart
          series={[
            {
              data: learningPieChartData,
              innerRadius: 20,
              outerRadius: 80,
              paddingAngle: 0,  // Set paddingAngle to 0 to avoid gaps
              cornerRadius: 5,
              startAngle: 0,    // Start at 0 degrees
              endAngle: 360,    // End at 360 degrees to make a full circle
              cx: 84,
              cy: 140,
            }
            ]}
            height={270}
        />
      </div>
    );
  };

  const renderChatUsageRate = () => {
    return (
      <div className='graph'>
        <h3>Chat Usage Rate</h3>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          height={270}
        />
      </div>
    );
  };

  const renderSessionChatUsageRate = () => {
    return (
      <div className='graph'>
      <h3>Practice session Usage</h3>
      <div className='graphRight2'>Weekly</div>
      <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          height={270}
        />
      </div>
    );
  };

  return (
    <div className='chartPage'>
      <Header />
      <div className='chartPageWrap'>
        <div className='chartPageLeft'>
            { renderChartPageTopSec() }
          <div className='chartPageBotSec'>
            { renderScreeningPieChart() }
            { renderChatUsageRate() }
            { renderLearningPieChart() }
            { renderSessionChatUsageRate() }
          </div>
        </div>
        <div className='chartPageRight'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
        </div>
      </div>
      <StudentList />
    </div>
  );
};

export default ChartPage;
