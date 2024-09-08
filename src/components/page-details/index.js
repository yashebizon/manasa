import React, {useState, useEffect} from 'react';
import './pageDetails.scss';
import Link from 'next/link';
import Image from 'next/image'; 
import maleUserImg from '../../../src/images/boy.png';
import femaleUserImg from '../../../src/images/human.png';
import Header from '../page-header';
import { useTranslation } from 'next-i18next';
import { fetchUser, fetchQuery, fetchChatHistory } from '@/util/request/fetchQuery';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import { convertToHtml } from '../../util/common/common';
import Loader from '../loader/loader';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { months, years, monthNames } from './constant';

const PageDetails = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  const [studentData, setStudentData] = useState({});
  const [chatHistory, setChatHistory] = useState({});
  const [isChatLoading, setChatloading]  = useState(false);
  const [isSummaryLoading, setSummaryloading]  = useState(false);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('2024');

  const cookies = new Cookies();

  const userName = cookies.get('userName');
  const myCookie = cookies.get('userToken');

  const date = new Date();
  
  const currentMonthName = monthNames[date.getMonth()];
  const currentYear = date.getFullYear();

  function getFormattedDate(dateString) {
    if (!dateString) {
      return "NA"; // Return "NA" for empty values
    }
  
    const date = new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return "NA"; // Return "NA" for invalid date values
    }
  
    return date.toISOString().split('T')[0];
  }

  useEffect(() => {
    async function fetchUserDetails() {
      if(id){
        setSummaryloading(true);
        try {
          const response = await fetchUser('/api/user', myCookie, id);

          if (response && response.data) {
            const { data } = response;
            setStudentData(data);
            setSummaryloading(false);
          } else {
            console.error('No data returned from the API');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      
    }
  }

    fetchUserDetails();
  }, [myCookie]);

  useEffect(() => {

  async function fetchChat() {
    if(id){
      setChatloading(true);
      try {
        const response = await fetchChatHistory('/api/chat-history', myCookie, id, month, year);

        if (response && response.data) {
          const { data } = response;
          setChatHistory(data);
          setChatloading(false);
        } else {
          console.error('No data returned from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
  }
}
fetchChat();
  }, [myCookie, month, year]);

  const MarkdownConverter = ({ text }) => {
    if(isSummaryLoading){
      return(
        <Loader/>
      )
  }
  const htmlContent = convertToHtml(text);
  
    // Check if the HTML content is empty
    const isContentEmpty = !htmlContent.trim(); // Check if content is empty or contains only whitespace
  
    return (
      <div className="markdown-content">
        {isContentEmpty ? (
          <p>No summary available for the student</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        )}
      </div>
    );
  };
  

  const ChatSummary = () => {
    if(isChatLoading){
        return(
          <Loader/>
        )
    }

    if (Array.isArray(chatHistory) && chatHistory.length > 0) {
        // If chatHistory is a non-empty array, map over it and render l1Summary
        return (
            <>
                {chatHistory.map((item, index) => (
                    <div key={index}>
                        <p className='date'>{getFormattedDate(item.createdAt)}</p>   
                        <p> <MarkdownConverter text={item.l1Summary} /></p>
                        <p> <MarkdownConverter text={item.l2Summary} /></p>
                    </div>
                ))}
            </>
        );
    }

    if (!chatHistory || chatHistory.length === 0) {
      // If chatHistory is null or an empty array, return the message
      return (
          <p>No Chat Transcript available for selected month.</p>
      );
  }
};

const handleMonthChange = (event) => {
  const { name, value } = event.target;
  setMonth(value);
};

const renderMonthSelect = () => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select Month</InputLabel>
      <Select
        variant="outlined"
        margin="normal"
        id="month"
        label="Month"
        name="month"
        value={month}
        onChange={handleMonthChange}
      >
        {months.map((obj, index) => (
          <MenuItem key={index} value={obj.id}>
            {obj.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const handleYearChange = (event) => {
  const { name, value } = event.target;
  setYear(value);
};

const renderYearSelect = () => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Year</InputLabel>
      <Select
        variant="outlined"
        margin="normal"
        id="year"
        label="Year"
        name="year"
        value={year}
        onChange={handleYearChange}
      >
        {years.map((obj, index) => (
          <MenuItem key={index} value={obj.id}>
            {obj.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

  const { name='', 
          uniquePattern='', 
          assessmentCompleted = '', 
          lastChatUsed = '', 
          studentClass = '', 
          section = '',
          comments= ''
        } = studentData;

  let { gender= ''
  } = studentData;

    return (
        <div className='pageDetails'>
          <Header />
          <div className='pageDetailsTopUser'>
              <div className='pageDetailsTopUserLf'>
                  <div className='stName'>Student name</div>
                  <div className='stdBoxWrap'>
                    <div className='userIcn'>
                    <Image 
                        src={gender === 'Male' ? maleUserImg : femaleUserImg} 
                        alt="User Icon" 
                        height={50}  
                        width={50}  
                      />                    
                    </div>
                    <div className='userIcnRtl'>
                      <div><strong>{t(name)}</strong></div>
                      <div>{t('Id')} #: {uniquePattern} | {t(`Class: ${studentClass}-${section}`)}</div>
                      <div><Link href="#">{t('Assessment Completed:')}</Link> {t(assessmentCompleted)}</div>
                      <div><Link href="#">{t('Last Chat Used:')}</Link>  {getFormattedDate(lastChatUsed)} </div>
                    </div>
                  </div>
              </div>
              <div className='pageDetailsTopUserRtl'>
                <button>{t('Recommend for Counseling')}</button>
              </div>
          </div>

          <div className='pageDetailsShrirangPatel' style={{ backgroundColor: comments?.color_code }}>
            <button className='reqChatBtn'>{t('Request Chat Transcript')}</button>
            <div><strong>{t(currentMonthName + " " + currentYear)}</strong></div>
            <div><strong>{t('Screening Summary')}</strong></div>
            <div>
            <MarkdownConverter text={comments?.analysis?.detailedSummary} />
            </div>
            <div><br />
            <strong>{t('Feedback from Yoda:')}</strong> <br />
            <MarkdownConverter text={comments?.advice} />
            </div>
            <br/> 
          </div>
          <div className='pageDetailsShrirangPatel accodian' style={{ backgroundColor: 'white', padding: '20px', borderRadius: '50px 50px 0 0' }}>
            <div className='chatTranscript'>
                <p><strong>Chat transcript</strong></p>
                { renderMonthSelect() }
                { renderYearSelect() }
                <div className='summary'>
                    {ChatSummary()}
                </div>
              </div>
          </div>
        </div>
    );
  };
  
  export default PageDetails;