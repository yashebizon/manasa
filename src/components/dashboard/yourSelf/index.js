import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
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
            <h2>Assess Your Self</h2>
            <p>Assess Your Self assess Your Self</p>
            <Splide aria-label="My Favorite Images"   
                options={ {
                    arrows: false
                } }
            >
                <SplideSlide>
                    <div className='AssessCard'>
                        <div className='AssessCardLeft'>
                            <div className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 14h2V7h-2zm3-1.5h2V8h-2zM8 12h2V8H8zM6 22v-4.3q-1.425-1.3-2.212-3.037T3 11q0-3.75 2.625-6.375T12 2q3.125 0 5.538 1.838t3.137 4.787l1.3 5.125q.125.475-.175.863T21 15h-2v3q0 .825-.587 1.413T17 20h-2v2h-2v-4h4v-5h2.7l-.95-3.875q-.575-2.275-2.45-3.7T12 4Q9.1 4 7.05 6.025T5 10.95q0 1.5.613 2.85t1.737 2.4l.65.6V22zm6.35-9"/></svg></div>
                        </div>
                        <div className='AssessCardRight'>
                            <h3>Assess Your Self</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='AssessCard card2'>
                        <div className='AssessCardLeft'>
                            <div className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9q-1.45 0-2.475-1.025T8.5 5.5t1.025-2.475T12 2t2.475 1.025T15.5 5.5t-1.025 2.475T12 9m0 13l-6-6q-.5-.5-.75-1.125T5 13.5q0-1.475 1.013-2.488T8.5 10q.725 0 1.338.275t1.112.775L12 12.1l1.05-1.05q.5-.5 1.113-.775T15.5 10q1.475 0 2.488 1.013T19 13.5q0 .75-.25 1.375T18 16z"/></svg></div>
                        </div>
                        <div className='AssessCardRight'>
                            <h3>Assess Your Self 2</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='AssessCard card3'>
                        <div className='AssessCardLeft'>
                            <div className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9q-1.45 0-2.475-1.025T8.5 5.5t1.025-2.475T12 2t2.475 1.025T15.5 5.5t-1.025 2.475T12 9m0 13l-6-6q-.5-.5-.75-1.125T5 13.5q0-1.475 1.013-2.488T8.5 10q.725 0 1.338.275t1.112.775L12 12.1l1.05-1.05q.5-.5 1.113-.775T15.5 10q1.475 0 2.488 1.013T19 13.5q0 .75-.25 1.375T18 16z"/></svg></div>
                        </div>
                        <div className='AssessCardRight'>
                            <h3>Assess Your Self 3</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default YourSelf;