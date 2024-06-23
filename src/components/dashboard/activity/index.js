import React from 'react';

import './activity.scss'

const Activity = () => {
    return(
        <div className='activity'>
            <h2>Activities design for you</h2>
            <p>Activities design for you</p>
            <div className='activityInner'>
                <div className='activityBox'>
                    <div class="video-container">
                        <iframe width="280" height="157" src="https://www.youtube.com/embed/Gwed919jYhw?si=GCswAGNAN-04A-L8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='title'>Healing Power</div>
                    <div className='timeAudio'>
                        <span>2:30 m.</span>
                        <span>Audio</span>
                    </div>
                </div>  
                <div className='activityBox'>
                    <div class="video-container">
                        <iframe width="280" height="157" src="https://www.youtube.com/embed/WPPPFqsECz0?si=Sjnep6imrTpb3mQe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='title'>An Antidote</div>
                    <div className='timeAudio'>
                        <span>2:30 m.</span>
                        <span>Audio</span>
                    </div>
                </div>  
                <div className='activityBox'>
                    <div class="video-container">
                        <iframe width="280" height="157" src="https://www.youtube.com/embed/75d_29QWELk?si=0pTPkWHrbPh8xgOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='title'>Change Your Life</div>
                    <div className='timeAudio'>
                        <span>2:30 m.</span>
                        <span>Audio</span>
                    </div>
                </div>  
                <div className='activityBox'>
                    <div class="video-container">
                        <iframe width="280" height="157" src="https://www.youtube.com/embed/lvgM39UgHbA?si=CV27f8fmkvufqdL6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='title'>Getting Better</div>
                    <div className='timeAudio'>
                        <span>2:30 m.</span>
                        <span>Audio</span>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Activity;