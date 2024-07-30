import React, {useState} from 'react';
import './pageDetails.scss';
import Link from 'next/link';
import Image from 'next/image'; 
import userImg from '../../../src/images/page/student1.png';
import Header from '../page-header';
import { useTranslation } from 'next-i18next'

const PageDetails = () => {
  const { t } = useTranslation()

    return (
        <div className='pageDetails'>
          <Header />
          <div className='pageDetailsTopUser'>
              <div className='pageDetailsTopUserLf'>
                  <div className='stdName'>{t('Student Name')}</div>   
                  <div className='stdBoxWrap'>
                    <div className='userIcn'>
                      <Image src={userImg} alt="User Icon" />
                    </div>
                    <div className='userIcnRtl'>
                      <div>{t('Shrirang Patel')}</div>
                      <div>{t('Id')} #: A12345 | {t('Class: 9-C')}</div>
                      <div><Link href="#">{t('Assessment Completed:')}</Link> {t('Yes')}</div>
                      <div><Link href="#">{t('Chat Used:')}</Link>  {t('2024-06-25')} </div>
                    </div>
                  </div>
              </div>
              <div className='pageDetailsTopUserRtl'>
                <button>{t('Recommend for Counseling')}</button>
              </div>
          </div>

          <div className='pageDetailsShrirangPatel'>
            <button className='reqChatBtn'>{t('Request Chat Transcript')}</button>
            <div><strong>{t('Shrirang Patel')}</strong></div>
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