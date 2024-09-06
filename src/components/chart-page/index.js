import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import './chartPage.scss';
import Image from 'next/image'; 
import img from '../../../src/images/page/std.jpg';
import cls from '../../../src/images/page/cls.jpg';
import std1 from '../../../src/images/page/std1.jpg';
import std2 from '../../../src/images/page/std2.jpg';
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
import { getPercentageCompletion, calculatePieChartPortions, extractUsage } from '../../util/common/common';
import Loader from '../loader/loader';

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

  function getClassSectionString(classesArray) {
    if (!Array.isArray(classesArray) || classesArray.length === 0) {
      return ""; // Return an empty string if the input is not a valid array or is empty
    }
  
    // Flatten the array to create the desired format
    return classesArray.flatMap(item => {
      const className = item.class.trim(); // Trim any extra spaces
      return item.section.map(section => `${className}-${section.trim()}`);
    }).join(', ');
  }

  const renderChartPageTopSec = () => {
    return (
      <div className='chartPageTopSec'>
        <div className='tpBox'>
          <Image src={std1} alt="Appointments" width={50} height={50} />
          School Name <br />
          {t('Ramjas')}
        </div>
        <div className='tpBox'>
          <Image src={cls} alt="Class Image" width={50} height={50} />
          {`Classes: ${getClassSectionString(teacherClasses?.classes)}`}
        </div>
        <div className='tpBox'>
          <Image src={img} alt="Total Students" width={50} height={50} />
          Total Students <br /> {/* Assuming 30 is the static student count */}
          { studentCount }
        </div>
        {/* Future Release */}
        {/* <div className='tpBox'>
          <Image src={std1} alt="Appointments" width={50} height={50} />
          21 <br />
          {t('Appointment')}
        </div>
        <div className='tpBox'>
          <Image src={std2} alt="Unread Mail" width={50} height={50} />
          10 <br />
          {t('Unread Mail')}
        </div> */}
      </div>
    );
  };

  const renderScreeningPieChart = () => {

    const { screeningModule = {} } = graphData;
    const {generalAssessment = 0, parentPeerPressure = 0, strengthWeakness = 0} = screeningModule;

    const screeningPieChartData = [
      { value: 120 },
      { value: 120 },
      { value: 120 },
    ];
  
    return (
      <div className='graph'>
        <h3>Screening Completed Per Modules</h3>
        <div className='graphRight'>
          <div className='blue'>Handle Peer Pressure 87%</div>
          <div className='org'>Manage Social Media 57%</div>  
          <div className='grn'>Manage Study Pattern 16%</div>
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
          height={240}
        />
      </div>
    );
  };

  const renderLearningPieChart = () => {

    const { screeningModule = {} } = graphData;
    const {generalAssessment = 0, parentPeerPressure = 0, strengthWeakness = 0} = screeningModule;

      // Check if the screeningModule is empty
  if (!graphData) {
    return <Loader />; // Return loader if the data is empty
  }

      // Example usage
    const values = [generalAssessment, parentPeerPressure, strengthWeakness];
    const total = 360;
    const portions = calculatePieChartPortions(values, total);
    const learningPieChartData = [
      { value: portions[0] },
      { value: portions[1] },
      { value: portions[2] },
    ];
  
    return (
      <div className='graph'>
      <h3>Learning Modules Completed</h3>
      <div className='graphRight'>
        <div className='blue'>General Assessment {getPercentageCompletion(generalAssessment, studentCount)} %</div>
        <div className='org'>Strenght and Weaknesses {getPercentageCompletion(parentPeerPressure, studentCount)} %</div>  
        <div className='grn'>Parent Peer Pressure {getPercentageCompletion(strengthWeakness, studentCount)} %</div>
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
            height={240}
        />
      </div>
    );
  };

  const renderChatUsageRate = () => {
    const { chatUsage } = graphData;
    const ChatNumbers = extractUsage(chatUsage)
    return (
      <div className='graph'>
        <h3>Chat Usage Rate</h3>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12] }]}
          series={[
            {
              data: ChatNumbers,
            },
          ]}
          height={240}
        />
      </div>
    );
  };

  const renderSessionChatUsageRate = () => {
    const { chatSession } = graphData;
    const practiceSessionNumbers = extractUsage(chatSession)
    return (
      <div className='graph'>
      <h3>Practice session Usage</h3>
      <div className='graphRight2'>Weekly</div>
      <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12] }]}
          series={[
            {
              data: practiceSessionNumbers,
            },
          ]}
          height={240}
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
