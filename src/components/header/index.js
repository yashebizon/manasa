import React from 'react';
import Link from 'next/link';
import { Avatar } from '@mui/material';
import './header.scss'

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
            <Link href="tel:+4733378901" className='sos'>SOS</Link>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
        </header>
    );
  };
  
  export default Header;