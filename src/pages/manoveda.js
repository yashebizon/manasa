import React from 'react';
import Link from 'next/link';
import '../app/manoveda.scss'
import Image from 'next/image';
import logo from '../images/img2/logo.png';
import logo2 from '../images/img2/logo2.png';
import img1 from '../images/img2/2.png';
import img2 from '../images/img2/14.png';
import img3 from '../images/img2/15.png';
import img4 from '../images/img2/20.png';
import img5 from '../images/img2/17.png';
import img6 from '../images/img2/18.png';

const Login = () => {
  return (
    <div className='manovedaPageWrap'> 
        <header className='container'>
          <div className='lrftSec'>
            <Image src={logo} alt="logo" />
          </div>
          <Link href="#" className='blkBtn'>Contact us</Link>
        </header>
        <main>
          <div className='topBanner container'>
            <div className='topBannerLeft'>
                <div className='subTitle'>THE MOST TRUSTED AI  MENTAL WELLBEING PROGRAM FOR CHILDREN</div>
                <h1>AI that Empowers Minds, Making Mental Healthcare Personal</h1>
                <div className='tpDes'>Empowering students, supporting educators and parents, and fostering mental well-being for a brighter future with Manoveda's AI-driven care.</div>
                <Link href="#" className='blkBtn learn'>Learn more</Link>
            </div>
            <div className='topBannerRight'>
              <Image src={img1} alt="img1" />
            </div>
          </div>

          <div className='middleSec container'>
            <div className='des1'>How Manoveda helps Mental Wellness for students</div>
            <h2>Streamline assessments and behavioral therapy and improve mental wellness outcomes</h2>
            <div className='middleSecWarp'>
              <div className='middleSecLeft boxBg'>
                <Image src={img2} className='imgBg1' alt="img2" />
              </div>
              <div className='middleSecRight boxBg'>
                <Image src={img3} className='imgBg2' alt="img3" />
              </div>
            </div>
          </div>

          <div className='footer'>
            <div className='footerWarp container'>
              <div className='footerSecLeft'>
                <Image src={logo2} alt="logo2" className='log2'/>
                <Image src={img4} alt="img3" className='img4'/>
                <Link href="#" className='blkBtn talk'>Talk to sales</Link>
              </div>
              <div className='footerSecRight'>
                <Image src={img5} alt="img5" className='img5' />
                <Image src={img6} alt="img6" className='img6'/>
                <div className='socialbock'>
                  Contact Us: <br/>
                  about@intouchhealers.com  | +91 9717729970
                  <div className='socialbockInner'>
                    <Link href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256"/></svg>
                    </Link>
                    <Link href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"/></svg>
                    </Link>
                    <Link href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z"/></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
    </div>
  );
};

export default Login;