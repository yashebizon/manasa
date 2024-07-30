import './topCard.scss'; 
import Image from 'next/image';
import selfAssess from '../../../images/icon1.png'; 
import wellnessActivity from '../../../images/icon3.png'; 
import expertTherapy from '../../../images/icon2.png'; 
import miniGuide from '../../../images/icon4.png'; 
import Link from 'next/link';
import { useTranslation } from 'next-i18next'

const TopCard = () => {
    const { t } = useTranslation()
    return(
        <div className='TopCard'>
            <div className='TopCardBox box1'>
            <Link href="questionnaire/1">
                <div className='icon'>
                    <Image src={selfAssess} alt="Self Assess<" />
                </div>
                <div className='text'>{t("Screening")}</div>
            </Link>
            </div>
            <div className='TopCardBox box2'>
            <Link href="guided-session-chat">
                <div className='icon'>
                    <Image src={wellnessActivity} alt="wellness Activity" />
                </div>
                <div className='text'>{t('Guided Lessons')}</div>
            </Link>
            </div>
            <div className='TopCardBox box3'>
            <Link href="chat">
                <div className='icon'>
                    <Image src={expertTherapy} alt="Expert Therapy" />
                </div>
                <div className='text'>{t('Chat with AI')}</div>
            </Link>
            </div>
            <div className='TopCardBox box4'>
            <Link href="mini-guide">
            <div className='icon'>
                    <Image src={miniGuide} alt="Mini Guide" />
                </div>
                <div className='text'>{t('Mini Guide')}</div>
            </Link>
            </div>
        </div>
    );
}

export default TopCard;