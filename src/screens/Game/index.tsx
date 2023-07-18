/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import SingleCard from '../../components/SingleCard';
import { useContext } from 'react';
import { useMemoryGame } from '../../hooks/useMemoryGame';
import { AppContainer, Button, CardGrid } from './styles';
import { DifficultyContext } from '../../utils/DifficultyContext';

function Game() {
  const {
    cards,
    turns,
    handleChoice,
    disabled,
    shuffleCards,
    choiceOne,
    choiceTwo,
  } = useMemoryGame();

  const { difficulty } = useContext(DifficultyContext);

  return (
    <AppContainer>
      <CardGrid columns={difficulty / 4}>
        {cards.map((card) => (
          <SingleCard
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.match}
            disabled={disabled}
            key={card.id}
          />
        ))}
      </CardGrid>
      <div>
        <Button onClick={shuffleCards}>New Game</Button>
        <p>turns: {turns}</p>
      </div>
    </AppContainer>
  );
}

export default Game;
