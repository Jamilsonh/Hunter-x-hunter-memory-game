import React from 'react';
import { Container, DificultyName, NumberOfCards } from './styles';

export type DificultyItemProps = {
  name: string;
  numOfCards: number;
  className?: string;
  isSelected?: boolean;
  onClick?: () => void;
};

const DificultyItem: React.FC<DificultyItemProps> = (props) => {
  const { name, numOfCards, className, onClick } = props;

  return (
    <Container to='/game' className={className} onClick={onClick}>
      <DificultyName>{name}</DificultyName>
      <NumberOfCards>{numOfCards}</NumberOfCards>
    </Container>
  );
};

export default DificultyItem;
