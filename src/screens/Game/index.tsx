/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import SingleCard from '../../components/SingleCard';
import { useContext } from 'react';
import { useMemoryGame } from '../../hooks/useMemoryGame';
import {
  AppContainer,
  Button,
  ButtonVoltar,
  CardGrid,
  ContainerMain,
  MenuContainer,
  MenuSubContainer,
  TimerContainer,
  TimerText,
} from './styles';
import { DifficultyContext } from '../../utils/DifficultyContext';

function Game() {
  const {
    cards,
    turns,
    handleChoice,
    disabled,
    choiceOne,
    choiceTwo,
    handlePlay,
    handleRestart,
    timer,
    formatTime,
  } = useMemoryGame();

  const { difficulty } = useContext(DifficultyContext);

  return (
    <ContainerMain>
      <AppContainer>
        <TimerContainer>
          <TimerText>Time:</TimerText>
          <TimerText>{formatTime(timer)}</TimerText>
          <p>turns: {turns}</p>
        </TimerContainer>
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
      </AppContainer>
      <MenuContainer>
        <MenuSubContainer>
          <Button onClick={handlePlay}>Play</Button>
          <Button onClick={handleRestart}>Restart</Button>
          <ButtonVoltar to='/'>Voltar</ButtonVoltar>
        </MenuSubContainer>
      </MenuContainer>
    </ContainerMain>
  );
}

export default Game;
