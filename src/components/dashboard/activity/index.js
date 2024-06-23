import React from 'react';
import Image from 'next/image';
import './activity.scss';
import activity1 from '../../../images/img-1.jpeg';
import activity2 from '../../../images/img-2.jpeg';
import activity3 from '../../../images/img-3.jpeg';
import activity4 from '../../../images/img-4.jpeg';

const Activity = () => {
    return(
        <div className='activity'>
            <h2>Activities designed for you</h2>
            <p>Learning activities to improve your mental and emotional being</p>
            <div className='activityInner'>
                <div className='activityBox'>
                    <div class="video-container">
                        <Image src={activity1} alt="Self Assess<" />
                        {/* <iframe width="280" height="157" src="https://www.youtube.com/embed/Gwed919jYhw?si=GCswAGNAN-04A-L8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                    <div className='title'>Healing Power</div>
                    <div className='timeAudio'>
                        <span>10:30 m.</span>
                        <span>Audio</span>
                    </div>
                </div>  
                <div className='activityBox'>
                    <div class="video-container">
                        <Image src={activity2} alt="Self Assess<" />
                        {/* <iframe width="280" height="157" src="https://www.youtube.com/embed/WPPPFqsECz0?si=Sjnep6imrTpb3mQe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                    <div className='title'>An Antidote</div>
                    <div className='timeAudio'>
                        <span>6:55 m.</span>
                        <span>Audio</span>
                    </div>
                </div>  
                <div className='activityBox'>
                    <div class="video-container">
                        <Image src={activity3} alt="Self Assess<" />
                        {/* <iframe width="280" height="157" src="https://www.youtube.com/embed/75d_29QWELk?si=0pTPkWHrbPh8xgOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                    <div className='title'>Change Your Life</div>
                    <div className='timeAudio'>
                        <span>8:10 m.</span>
                        <span>Audio</span>
                    </div>
                </div>  
                <div className='activityBox'>
                    <div class="video-container">
                        <Image src={activity4} alt="Self Assess<" />
                        {/* <iframe width="280" height="157" src="https://www.youtube.com/embed/lvgM39UgHbA?si=CV27f8fmkvufqdL6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                    <div className='title'>Getting Better</div>
                    <div className='timeAudio'>
                        <span>5:15 m.</span>
                        <span>Audio</span>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Activity;