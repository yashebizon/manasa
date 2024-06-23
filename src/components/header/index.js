import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import './header.scss';
import Modal from 'react-modal';
import avatar from '../../images/gamer.png';
import sosImg from '../../images/phone.png';
import backAsset from '../../images/backAsset.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }


  const renderModal = () => {
    return( 
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={openModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        id='chatPopup'
      >
        <button className="closeBtn" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-2.917 2.925q-.277.275-.704.275t-.704-.275q-.275-.275-.275-.7t.275-.7L10.6 12L7.675 9.108Q7.4 8.831 7.4 8.404t.275-.704q.275-.275.7-.275t.7.275L12 10.625L14.892 7.7q.277-.275.704-.275t.704.275q.3.3.3.713t-.3.687L13.375 12l2.925 2.917q.275.277.275.704t-.275.704q-.3.3-.712.3t-.688-.3z"/></svg>
        </button>
        <div className='imgWrap'>
          <Image src={backAsset} alt="Mini Guide" />
        </div>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Are you sure?</h2>
        <p>You want to cancel this screening ?</p>
        <div className='btnWrap'>
          <Link href="/dashboard">Yes</Link>
          <button onClick={closeModal}>No</button>
        </div>
      </Modal>
    );
  }

    return (
        <header className='headerBox'>
          <div className='lefSec'>
            <button className='back' onClick={openModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"/></svg>
            </button>
              {renderModal()}
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