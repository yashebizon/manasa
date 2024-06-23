import React, {useState} from 'react';
import './emojiCard.scss';
import Image from 'next/image';
import icon1 from '../../images/emoji/icon1.png';
import icon2 from '../../images/emoji/icon2.png';
import icon3 from '../../images/emoji/icon3.png';
import icon4 from '../../images/emoji/icon4.png';
import icon5 from '../../images/emoji/icon5.png';

const EmojiCard = () => {
  const [text, setText] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (content, index) => {
    setText(content);
    setActiveIndex(index);
  };

  return (
    <div className='emojiCardWrap'>
      <h3>How are you feeling today?</h3>
      <div className='emojiCard'>
        <div className='emojiCardIn'>
          <div
            className={`emojiBox ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleClick('Sad', 0)}
          >
            <Image src={icon1} alt='icon1' />
          </div>
          <div
            className={`emojiBox ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleClick('Disappointed', 1)}
          >
            <Image src={icon2} alt='icon2' />
          </div>
          <div
            className={`emojiBox ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => handleClick('Angry', 2)}
          >
            <Image src={icon3} alt='icon3' />
          </div>
          <div
            className={`emojiBox ${activeIndex === 3 ? 'active' : ''}`}
            onClick={() => handleClick('Joyful', 3)}
          >
            <Image src={icon4} alt='icon4' />
          </div>
          <div
            className={`emojiBox ${activeIndex === 4 ? 'active' : ''}`}
            onClick={() => handleClick('Blessed', 4)}
          >
            <Image src={icon5} alt='icon5' />
          </div>
        </div>
        <div className='emojiText'>{text}</div>
      </div>
    </div>
  );
};
  
export default EmojiCard;