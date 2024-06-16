import React from 'react';
import Link from 'next/link';
import { Avatar } from '@mui/material';
import './header.scss'

const Header = () => {
    return (
        <header className='header'>
          <div className='lefSec'>
            <h2>Hello Parth</h2>
            <p>Welcome to your safe space!</p>
          </div>
          <div className='rightSec'>
            <Link href="tel:+4733378901" className='sos'>SOS</Link>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
        </header>
    );
  };
  
  export default Header;