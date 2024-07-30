import React, {useState} from 'react';
import Link from 'next/link';
import { Avatar } from '@mui/material';
import './header.scss';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Image from 'next/image';
import backAsset from '../../images/backAsset.png';
import boyAsset from '../../images/boy.png';
import avt1 from '../../images/avt1.png';
import avt2 from '../../images/avt2.png';
import avt3 from '../../images/avt3.png';
import avt4 from '../../images/avt4.png';
import avt5 from '../../images/avt5.png';
import avt6 from '../../images/avt6.png';
import avt7 from '../../images/avt7.png';
import avt8 from '../../images/avt8.png';
import avt9 from '../../images/avt9.png';
import { TextField } from '@mui/material';
import { useTranslation } from 'next-i18next'


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
  const [modalAvatarIsOpen, setAvatarIsOpen] = useState(false);
  const [name, setName] = useState('');
  let subtitle;
  const { t } = useTranslation()


  const router = useRouter();

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

  function openAvatarModal() {
    setAvatarIsOpen(true);
  }

  function closeAvatarModal() {
    setAvatarIsOpen(false);
  }

  function afterAvatarOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function redirectToDashboard() {
    router.push('/dashboard');
  }

  function setUserName(e) {
    setName(e.target.value);
  }

  function submitAvatar() {
    setIsOpen(false);
    localStorage.setItem('avatarName', name);
  }

  function handleImageClick(e) {
    console.log(e.target); // Display the image URL when the image is clicked
  };

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
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{t("Are you sure?")}</h2>
        <p>{t("You want to cancel this chat ?")}</p>
        <div className='btnWrap'>
          <Link href="dashboard">Yes</Link>
          <button onClick={closeModal}>No</button>
        </div>
      </Modal>
    );
  }

  const renderAvatarModal = () => {
    return( 
      <Modal
      isOpen={modalAvatarIsOpen}
      onAfterOpen={openAvatarModal}
      onRequestClose={closeAvatarModal}
      // style={customStyles}
      contentLabel="Avatar Modal"
      id='avatarPopup'
    >
      <button className="closeBtn" onClick={closeAvatarModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-2.917 2.925q-.277.275-.704.275t-.704-.275q-.275-.275-.275-.7t.275-.7L10.6 12L7.675 9.108Q7.4 8.831 7.4 8.404t.275-.704q.275-.275.7-.275t.7.275L12 10.625L14.892 7.7q.277-.275.704-.275t.704.275q.3.3.3.713t-.3.687L13.375 12l2.925 2.917q.275.277.275.704t-.275.704q-.3.3-.712.3t-.688-.3z"/></svg>
      </button>
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Select your name and Avatar</h2>
       <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="Name"
          label="Name"
          name="Name"
          autoFocus
          value={name}
          onChange={setUserName}
        />
        <div className='avatarText'>
          Select Avatar
        </div>
        <div className='avatarImgs'>
          <div className='imgWrp'><Image src={avt1} onClick={handleImageClick} alt="boy"  height={80} width={80}/> </div>
          <div className='imgWrp'><Image src={avt2} onClick={handleImageClick} alt="gamer"  height={80} width={80} /></div>
          <div className='imgWrp'><Image src={avt3} onClick={handleImageClick} alt="girl"   height={80} width={80}/></div>
          <div className='imgWrp'><Image src={avt4} onClick={handleImageClick} alt="human"  height={80} width={80}/></div>
          <div className='imgWrp'><Image src={avt5} onClick={handleImageClick} alt="profile"  height={80} width={80}/></div>
          <div className='imgWrp'><Image src={avt6} onClick={handleImageClick} alt="boy"  height={80} width={80}/></div>
          <div className='imgWrp'><Image src={avt7} onClick={handleImageClick} alt="gamer"  height={80} width={80}/></div>
          <div className='imgWrp'><Image src={avt8} onClick={handleImageClick} alt="girl"   height={80} width={80}/></div>
          <div className='imgWrp'><Image src={avt9} onClick={handleImageClick} alt="human"  height={80} width={80}/></div>
          <div className='imgWrp'><Image src={avt1} onClick={handleImageClick} alt="profile"  height={80} width={80}/></div>
        </div>
        <div className='btnWrap'>
          <button onClick={submitAvatar}>Submit</button>
        </div>
    </Modal>
  );
  }
    return (
        <header className='header'>
          <div className='lefSec'>
            <button className='back'  onClick={openModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"/></svg>
            </button>
              {renderModal()}
              {renderAvatarModal()}
            <div className='userIcon' onClick={openAvatarModal}></div>
            <div className='userWrap'>
              <div className='userText'>Yoda AI</div>
              <div className='userActive'>Acive now</div>
            </div>
          </div>
          <div className='rightSec'>
            <button className='call'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
            </button>
          </div>
        </header>
    );
  };
  
  export default Header;