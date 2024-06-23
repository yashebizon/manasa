import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import './activity.scss';
import activity1 from '../../../images/img-1.jpeg';
import activity2 from '../../../images/img-2.jpeg';
import activity3 from '../../../images/img-3.jpeg';
import activity4 from '../../../images/img-4.jpeg';

const Activity = () => {

    const [currentVideo, setCurrentVideo] = useState(null);
    const videoContainerRef = useRef(null);
    const iframeRef = useRef(null);
  
    const handleActivityBoxClick = (videoId) => {
      setCurrentVideo(videoId);
    };
  
    const handleCloseVideo = () => {
      setCurrentVideo(null);
    };

    useEffect(() => {
        if (currentVideo) {
          const videoContainer = videoContainerRef.current;
          const iframe = iframeRef.current;
    
          if (videoContainer && iframe) {
            videoContainer.style.display = 'block';
    
            if (iframe.requestFullscreen) {
              iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) { // Firefox
              iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
              iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { // IE/Edge
              iframe.msRequestFullscreen();
            }
          }
        }
      }, [currentVideo]);

    return(
        <div className='activity'>
            <h2>Activities designed for you</h2>
            <p>Learning activities to improve your mental and emotional being</p>
            <div className='activityInner'>
                <div className='activityBox' onClick={() => handleActivityBoxClick('Gwed919jYhw?si=GCswAGNAN-04A-L8')}>
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
                <div className='activityBox' onClick={() => handleActivityBoxClick('WPPPFqsECz0?si=Sjnep6imrTpb3mQe')}>
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
                <div className='activityBox' onClick={() => handleActivityBoxClick('Gwed919jYhw?si=GCswAGNAN-04A-L8')}>
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
                <div className='activityBox' onClick={() => handleActivityBoxClick('lvgM39UgHbA?si=CV27f8fmkvufqdL6')}>
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
            {currentVideo && (
                <div ref={videoContainerRef} style={{ display: 'none', position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                    <iframe
                    ref={iframeRef}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    src={`https://www.youtube.com/embed/${currentVideo}`}
                    allow="fullscreen"
                    onBlur={handleCloseVideo}
                    ></iframe>
                </div>
        )}
        </div>
    );
}

export default Activity;