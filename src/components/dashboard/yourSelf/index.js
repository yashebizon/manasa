import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import Link from 'next/link';
import selfAssess from '../../../images/icon5.png'; 
import './yourSelf.scss'
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';


const YourSelf = () => {
    return(
        <div className='yourSelf'>
            <div className='yourSelfInner'>
                <div className='icon'>
                    <Image src={selfAssess} alt="Self Assess<" />
                </div>
                <div className='yourSelfWrap'>
                    <h2>Assess Your Self</h2>
                    <p>Assess Your Self assess Your Self</p>
                </div>
            </div>
            <Splide aria-label="My Favorite Images"   
                options={ {
                    arrows: false
                } }
            >
                <SplideSlide>
                    <Link href="/questionnaire/1">
                        <div className='AssessCard'>
                            <div className='AssessCardLeft'>
                                <div className='iconIn'>
                                    <Image src={selfAssess} alt="Self Assess<" />   
                                </div>
                            </div>
                            <div className='AssessCardRight'>
                                <h3>Assess Your Self</h3>
                                <p>Next few questions will help you know more about your mental well being</p>
                            </div>
                        </div>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <Link href="/questionnaire/2">
                        <div className='AssessCard card2'>
                            <div className='AssessCardLeft'>
                                <div className='iconIn'>
                                    <Image src={selfAssess} alt="Self Assess<" />   
                                </div>
                            </div>
                            <div className='AssessCardRight'>
                                <h3>Assess Your Self 2</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <Link href="/questionnaire/3">
                        <div className='AssessCard card3'>
                            <div className='AssessCardLeft'>
                                <div className='iconIn'>
                                    <Image src={selfAssess} alt="Self Assess<" />   
                                </div>
                            </div>
                            <div className='AssessCardRight'>
                                <h3>Assess Your Self 2</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>
                    </Link>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default YourSelf;