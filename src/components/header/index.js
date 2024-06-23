import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import './header.scss';
import avatar from '../../images/gamer.png';
import sosImg from '../../images/phone.png';

const Header = () => {
    return (
        <header className='headerBox'>
          <div className='lefSec'>
            <button className='back'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"/></svg>
            </button>
            <div>
              <h2>Hello Parth</h2>
              <p>Welcome to your safe space!</p>
            </div>
          </div>
          <div className='rightSec'>
            <Link href="tel:+8448440632" className='sos'>
            <button className='home-call' style={{ paddingTop: '10px' }}>
              <Image src={sosImg} alt="Self Assess<" height={30} width={30} />
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg> */}
            </button>
            </Link>
            <Image src={avatar} alt="Self Assess<" height={40} width={40} />
          </div>
        </header>
    );
  };
  
  export default Header;