/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import SingleCard from '../../components/SingleCard';
import { useMemoryGame } from '../../hooks/useMemoryGame';

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
  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card) => {
          return (
            <SingleCard
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.match}
              disabled={disabled}
              key={card.id}
            />
          );
        })}
      </div>
      <p>turns: {turns}</p>
    </div>
  );
}

export default Game;
