/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import './SingleCard.css';

import CardBack from '../images/Card-back.png';
import {
  BackImage,
  Card,
  FlippedContainer,
  FrontImage,
} from './SingleCardStyles';

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
    <Card>
      <FlippedContainer className={flipped ? 'flipped' : ''}>
        <FrontImage src={card.src} alt='card front' />
        <BackImage src={CardBack} alt='card back' onClick={handleClick} />
      </FlippedContainer>
    </Card>
  );
};

export default SingleCard;
