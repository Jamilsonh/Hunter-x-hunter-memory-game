/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useContext, useEffect, useState } from 'react';

import '../App.css';

import helmetImage from '../images/helmet-1.png';
import potionImage from '../images/potion-1.png';
import ringImage from '../images/ring-1.png';
import scrollImage from '../images/scroll-1.png';
import shieldImage from '../images/shield-1.png';
import swordImage from '../images/sword-1.png';
import { DifficultyContext } from '../utils/DifficultyContext';

interface Card {
  src: string;
  match: boolean;
  id: number;
}

const cardImages: Card[] = [
  { src: helmetImage, match: false, id: 1 },
  { src: potionImage, match: false, id: 2 },
  { src: ringImage, match: false, id: 3 },
  { src: scrollImage, match: false, id: 4 },
  { src: shieldImage, match: false, id: 5 },
  { src: swordImage, match: false, id: 6 },
];

export const useMemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false);
  const { difficulty } = useContext(DifficultyContext);

  let numOfCards = 0;
  if (difficulty === 0) {
    numOfCards = 12; // Fácil
  } else if (difficulty === 1) {
    numOfCards = 20; // Médio
  } else if (difficulty === 2) {
    numOfCards = 28; // Difícil
  } else if (difficulty === 3) {
    numOfCards = 32; // Muito difícil
  }

  console.log(difficulty);

  // shuffling the cards
  const shuffleCards = () => {
    const selectedCards = cardImages.slice(0, numOfCards / 2);
    const duplicatedCards = [...selectedCards, ...selectedCards];

    const shuffledCards: Card[] = duplicatedCards
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    console.log(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurn(0);
  };

  // taking choices
  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare cards
  useEffect(() => {
    // MY PATCH
    if (choiceOne?.id === choiceTwo?.id) return;

    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });
        reset();
      } else {
        setTimeout(reset, 1000);
      }
      setTurn((prevState) => prevState + 1);
    }
  }, [choiceOne, choiceTwo]);

  // reset choices and increase turns
  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  // starting the game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return {
    cards,
    turns,
    handleChoice,
    disabled,
    shuffleCards,
    choiceOne,
    choiceTwo,
  };
};
