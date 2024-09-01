import React, {useState} from 'react';
import './header.scss';
import Image from 'next/image'; 
import userImg from '../../../src/images/profile.png';
import femaleAvatar from '../../../src/images/girl.png';
import { useTranslation } from 'next-i18next'
import Cookies from 'universal-cookie';


const Header = () => {

  const cookies = new Cookies();

  const userName = cookies.get('userName');
  const userGender = cookies.get('userGender');

  const { t } = useTranslation()
    return (
        <header className='pageHeader'>
          <div className='pageHeaderWrap'>
              {/* Future Release */}
              {/* <div className='serchWrap'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
                  <input type='text' placeholder={t('Search anything')} className='serchBox'/>
              </div> */}
              <div className='wlcomText'>
                  {t(`Hello ${userName}, Welcome Back!`)}
              </div>
              <div className='userEmailWrap'>
                  <button className='email'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>
                  </button>
                  <button className='notification'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18t-.288.713T19 19zm7 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6T9.175 7.175T8 10z"/></svg>
                  </button>
                  <div className='user'>
                    <Image src={userGender === 'Male' ? userImg : femaleAvatar} alt="User Icon<"/>
                  </div>
              </div>
          </div>
        </header>
    );
  };
  
  export default Header;