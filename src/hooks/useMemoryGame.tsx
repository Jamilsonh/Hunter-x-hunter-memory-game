/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useContext, useEffect, useState } from 'react';

import '../App.css';

import Chorollo from '../images/Chorollo.png';
import Feitan from '../images/Feitan.png';
import Ging from '../images/Ging.png';
import Gon from '../images/Gon.png';
import Hisoka from '../images/Hisoka.png';
import Illumi from '../images/Illumi.png';
import Kaito from '../images/Kaito.png';
import Killua from '../images/Killua.png';
import Kunkle from '../images/Kunkle.png';
import Kurapika from '../images/Kurapika.png';
import Neferupitou from '../images/Neferupitou.png';
import Netero from '../images/Netero.png';
import Silva from '../images/Silva.png';
import Uvogin from '../images/Uvogin.png';
import Yupi from '../images/Yupi.png';
import Zeno from '../images/Zeno.png';

import { DifficultyContext } from '../utils/DifficultyContext';

interface Card {
  src: string;
  match: boolean;
  id: number;
}

const cardImages: Card[] = [
  { src: Chorollo, match: false, id: 1 },
  { src: Feitan, match: false, id: 2 },
  { src: Ging, match: false, id: 3 },
  { src: Gon, match: false, id: 4 },
  { src: Hisoka, match: false, id: 5 },
  { src: Illumi, match: false, id: 6 },
  { src: Kaito, match: false, id: 7 },
  { src: Killua, match: false, id: 8 },
  { src: Kunkle, match: false, id: 9 },
  { src: Kurapika, match: false, id: 10 },
  { src: Neferupitou, match: false, id: 11 },
  { src: Netero, match: false, id: 12 },
  { src: Silva, match: false, id: 13 },
  { src: Uvogin, match: false, id: 14 },
  { src: Yupi, match: false, id: 15 },
  { src: Zeno, match: false, id: 16 },
];

export const useMemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false);
  const { difficulty } = useContext(DifficultyContext);

  let numOfCards = 0;
  if (difficulty === 16) {
    numOfCards = 16; // Fácil
  } else if (difficulty === 20) {
    numOfCards = 20; // Médio
  } else if (difficulty === 24) {
    numOfCards = 24; // Difícil
  } else if (difficulty === 32) {
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
    setTimer(0); // Resetting the timer
    setIsPlaying(false); // Stopping the timer
  };

  // taking choices
  const handleChoice = (card: Card) => {
    if (!isPlaying) {
      return;
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Timer logic
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId: number;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    setDisabled(false);
  };

  const handleRestart = () => {
    setIsPlaying(false);
    setTimer(0);
    shuffleCards(); // Restarting the game
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return {
    cards,
    turns,
    handleChoice,
    disabled,
    shuffleCards,
    choiceOne,
    choiceTwo,
    handlePlay,
    handleRestart,
    timer,
    formatTime,
  };
};
