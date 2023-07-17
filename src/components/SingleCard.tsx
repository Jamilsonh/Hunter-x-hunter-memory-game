import React from 'react';
import './SingleCard.css';

import cover from '../images/cover.png';

interface SingleCardProps {
  card: {
    src: string;
    match: boolean;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChoice: (card: any) => void;
  flipped: boolean;
  disabled: boolean;
}

const SingleCard: React.FC<SingleCardProps> = ({
  card,
  handleChoice,
  flipped,
  disabled,
}) => {
  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };

  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={cover}
          alt='card back'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
