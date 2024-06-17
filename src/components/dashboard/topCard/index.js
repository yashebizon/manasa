import './topCard.scss'; 
import Image from 'next/image';
import selfAssess from '../../../images/icon1.png'; 
import wellnessActivity from '../../../images/icon3.png'; 
import expertTherapy from '../../../images/icon2.png'; 
import miniGuide from '../../../images/icon4.png'; 

const TopCard = () => {
    return(
        <div className='TopCard'>
            <div className='TopCardBox box1'>
                <div className='icon'>
                    <Image src={selfAssess} alt="Self Assess<" />
                </div>
                <div className='text'>Self Assess</div>
            </div>
            <div className='TopCardBox box2'>
                <div className='icon'>
                    <Image src={wellnessActivity} alt="wellness Activity" />
                </div>
                <div className='text'>Wellness Activity</div>
            </div>
            <div className='TopCardBox box3'>
                <div className='icon'>
                    <Image src={expertTherapy} alt="Expert Therapy" />
                </div>
                <div className='text'>Expert Therapy</div>
            </div>
            <div className='TopCardBox box4'>
                <div className='icon'>
                    <Image src={miniGuide} alt="Mini Guide" />
                </div>
                <div className='text'>Mini Guide</div>
            </div>
        </div>
    );
}

export default TopCard;