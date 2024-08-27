import React, {useState, useEffect} from 'react';
import './pageDetails.scss';
import Link from 'next/link';
import Image from 'next/image'; 
import userImg from '../../../src/images/page/student1.png';
import Header from '../page-header';
import { useTranslation } from 'next-i18next';
import { fetchUser } from '@/util/request/fetchQuery';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';



const PageDetails = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  const [studentData, setStudentData] = useState({});

  const cookies = new Cookies();

  const myCookie = cookies.get('userToken');

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
    fetchUserDetails();
  }, [myCookie]);

  const { name='', 
          uniquePattern='', 
          assessmentCompleted = '', 
          lastChatUsed = '', 
          studentClass = '', 
          section = ''
        } = studentData;

    return (
        <div className='pageDetails'>
          <Header />
          <div className='pageDetailsTopUser'>
              <div className='pageDetailsTopUserLf'>
                  <div className='stdName'>{t(name)}</div>   
                  <div className='stdBoxWrap'>
                    <div className='userIcn'>
                      <Image src={userImg} alt="User Icon" />
                    </div>
                    <div className='userIcnRtl'>
                      <div>{t(name)}</div>
                      <div>{t('Id')} #: {uniquePattern} | {t(`Class: ${studentClass}-${section}`)}</div>
                      <div><Link href="#">{t('Assessment Completed:')}</Link> {t(assessmentCompleted)}</div>
                      <div><Link href="#">{t('Chat Used:')}</Link>  {t(lastChatUsed)} </div>
                    </div>
                  </div>
              </div>
              <div className='pageDetailsTopUserRtl'>
                <button>{t('Recommend for Counseling')}</button>
              </div>
          </div>

          <div className='pageDetailsShrirangPatel'>
            <button className='reqChatBtn'>{t('Request Chat Transcript')}</button>
            <div><strong>{t(name)}</strong></div>
            <div><strong>{t('June 2024')}</strong></div>
            <div>
            {t('Chat Summary L2 : ')}
            {t('Academic Pressure: Did not complete the summer assignments on time causing last minute pressure. Shrirang is anxious and facing performance anxiety to be able to perform well in upcoming unit tests because of lack of preparation during summer time. Parental Pressure: Feels unloved and unheard from parents, and feels pressurised by them to contribute in house activities. They blame him for the reason of their fights. He blames himself and thinks as a burden to his family')}
              {t('Peer Pressure: Shrirang best friends are constantly asking him to bunk classes, and he feels pressure to agree to make them happy. He does not want to miss his classes. He gets cornered by his friends if he does not agree')}
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