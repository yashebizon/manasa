import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import './activity.scss';
import activity1 from '../../../images/img-1.jpeg';
import activity2 from '../../../images/img-2.jpeg';
import activity3 from '../../../images/img-3.jpeg';
import activity4 from '../../../images/img-4.jpeg';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import hindiactivity1 from '../../../images/hindi-img-3.png';
import hindiactivity2 from '../../../images/hindi-img-4.png';
import hindiactivity3 from '../../../images/hindi-img-1.png';
import hindiactivity4 from '../../../images/hindi-img-2.png';



const Activity = () => {
    const { t } = useTranslation()

    const router = useRouter()

    const { locale } = router;

    const [currentVideo, setCurrentVideo] = useState(null);
    const videoContainerRef = useRef(null);
    const iframeRef = useRef(null);
    const [youtubeLink, setYoutubeLink] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPopup = (url) => {
      setIsOpen(true);
      setYoutubeLink(url);
    };

    const handleClosePopup = () => {
      setIsOpen(false);
    };
  
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
            <h2>{t("Activities designed for you")}</h2>
            <p>{t("Learning activities to improve your mental and emotional being")}</p>
            <div className='activityInner'>
                <div className='activityBox' onClick={() => handleOpenPopup(locale === 'en' ? 'lvgM39UgHbA?si=CV27f8fmkvufqdL6' : 'PG0aFJC6iBQ?si=2kAV2HKr6weV88CB')}>
                    <div class="video-container">
                        <Image src={locale === 'en' ? activity1: hindiactivity1} alt="Self Assess<" />
                    </div>
                    <div className='title'>{t("Healing Power")}</div>
                    <div className='timeAudio'>
                        <span>10:30 m.</span>
                        <span>Audio</span>
                    </div>
                </div>  
                <div className='activityBox' onClick={() => handleOpenPopup(locale === 'en' ? '75d_29QWELk?si=0pTPkWHrbPh8xgOg' : 'Nlz8yKG0ySU?si=TatdWQYCZ3JAdVvx' )}>
                    <div class="video-container">
                        <Image src={locale === 'en' ? activity2 : hindiactivity2} alt="Self Assess<" />
                    </div>
                    <div className='title'>{t("An Antidote")}</div>
                    <div className='timeAudio'>
                        <span>6:55 m.</span>
                        <span>Audio</span>
                    </div>
                </div>  
                <div className='activityBox' onClick={() => handleOpenPopup(locale === 'en' ? 'WPPPFqsECz0?si=Sjnep6imrTpb3mQe' : '3yABSZO7HIY?si=RsEKlX2qWqioJXHe')}>
                    <div class="video-container">
                        <Image src={locale === 'en' ? activity3 : hindiactivity3} alt="Self Assess<" />
                    </div>
                    <div className='title'>{t("Change Your Life")}</div>
                    <div className='timeAudio'>
                        <span>8:10 m.</span>
                        <span>Audio</span>
                    </div>
                </div>  
                <div className='activityBox' onClick={() => handleOpenPopup(locale === 'en' ? 'Gwed919jYhw?si=GCswAGNAN-04A-L8' : 'mtoXpoHPNuM?si=qJqzcb9jSO0z3Qqu')}>
                    <div class="video-container">
                        <Image src={locale === 'en' ? activity4 : hindiactivity4} alt="Self Assess<" />
                    </div>
                    <div className='title'>{t("Getting Better")}</div>
                    <div className='timeAudio'>
                        <span>5:15 m.</span>
                        <span>Audio</span>
                    </div>
                </div>  
            </div>
              {isOpen && (
              <div className="popupVid">
                <div className="popup-inner">
                  <button className="close-btn" onClick={handleClosePopup}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-2.917 2.925q-.277.275-.704.275t-.704-.275q-.275-.275-.275-.7t.275-.7L10.6 12L7.675 9.108Q7.4 8.831 7.4 8.404t.275-.704q.275-.275.7-.275t.7.275L12 10.625L14.892 7.7q.277-.275.704-.275t.704.275q.3.3.3.713t-.3.687L13.375 12l2.925 2.917q.275.277.275.704t-.275.704q-.3.3-.712.3t-.688-.3z"/></svg>
                  </button>
                  <div className="videoContainer">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${youtubeLink}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
        </div>
    );
}

export default Activity;