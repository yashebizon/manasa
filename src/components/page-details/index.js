import React, {useState, useEffect} from 'react';
import './pageDetails.scss';
import Link from 'next/link';
import Image from 'next/image'; 
import userImg from '../../../src/images/page/student1.png';
import Header from '../page-header';
import { useTranslation } from 'next-i18next';
import { fetchUser, fetchQuery } from '@/util/request/fetchQuery';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';



const PageDetails = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  const [studentData, setStudentData] = useState({});
  const [chatHistory, setChatHistory] = useState({});

  const cookies = new Cookies();

  const userName = cookies.get('userName');
  const myCookie = cookies.get('userToken');

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
        try {
          const response = await fetchUser('/api/user', myCookie, id);

          if (response && response.data) {
            const { data } = response;
            setStudentData(data);
          } else {
            console.error('No data returned from the API');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      
    }
  }

  async function fetchChatHistory() {
    if(id){
      try {
        const response = await fetchUser('/api/chat-history', myCookie);

        if (response && response.data) {
          const { data } = response;
          setChatHistory(data);
        } else {
          console.error('No data returned from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
  }
}
    fetchUserDetails();
    fetchChatHistory();
  }, [myCookie]);

  console.log('yanu11', chatHistory, studentData);

  const { name='', 
          uniquePattern='', 
          assessmentCompleted = '', 
          lastChatUsed = '', 
          studentClass = '', 
          section = '',
          comments= ''
        } = studentData;

    return (
        <div className='pageDetails'>
          <Header />
          <div className='pageDetailsTopUser'>
              <div className='pageDetailsTopUserLf'>
                  <div className='stdBoxWrap'>
                    <div className='userIcn'>
                      <Image src={userImg} alt="User Icon" />
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

          <div className='pageDetailsShrirangPatel'>
            <button className='reqChatBtn'>{t('Request Chat Transcript')}</button>
            <div><strong>{t('June 2024')}</strong></div>
            <div>
            {t(comments)}
            </div>
            <div><br />
            {t('Feedback from Yoda:')} <br />

            {t('Shrirang is facing similar issues for the last 3 months and its recommended for him to go see a counselor.')} 
            </div>
          </div>
        </div>
    );
  };
  
  export default PageDetails;