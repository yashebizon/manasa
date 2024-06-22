import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import Link from 'next/link';
import selfAssess from '../../../images/icon5.png'; 
import assest_1 from '../../../images/assest-1.png'
import assest_2 from '../../../images/assest-2.png'

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
                    <h2>General Screening Module</h2>
                    <p>Pre screening for self reflection</p>
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
                                <h3>General Initial Screening</h3>
                                <p>Next few questions will help to ascertain more about your mental well being.</p>
                            </div>
                        </div>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <Link href="/questionnaire/2">
                        <div className='AssessCard card2'>
                            <div className='AssessCardLeft'>
                                <div className='iconIn'>
                                    <Image src={assest_2} alt="Self Assess<" />   
                                </div>
                            </div>
                            <div className='AssessCardRight'>
                                <h3>Strength Weaknesses Screening</h3>
                                <p>Next few questions will help to conduct a screening of your overall strength and weaknesses and help your counselor help you better.</p>
                            </div>
                        </div>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <Link href="/questionnaire/3">
                        <div className='AssessCard card3'>
                            <div className='AssessCardLeft'>
                                <div className='iconIn'>
                                    <Image src={assest_1} alt="Self Assess<" />   
                                </div>
                            </div>
                            <div className='AssessCardRight'>
                                <h3>Peer Parents Screening</h3>
                                <p>Next few questions will help to assess an initial impact of the influence of your peers and parents on your mental wellbeing.</p>
                            </div>
                        </div>
                    </Link>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default YourSelf;