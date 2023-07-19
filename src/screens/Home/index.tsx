import { useContext } from 'react';
import DificultyItem from '../../components/DifficultyItem';
import Difficulties from '../../config/Difficulties';
import { DifficultyContext } from '../../utils/DifficultyContext';
import { Container, ContainerDifficulty, ContainerGame } from './styles';

function Home() {
  const { changeDifficulty } = useContext(DifficultyContext);

  const onSelectDifficulty = (difficulty: number) => () => {
    changeDifficulty(difficulty);
  };

  console.log(changeDifficulty);

  return (
    <Container>
      <ContainerGame>
        <ContainerDifficulty>
          <DificultyItem
            name='Easy'
            numOfCards={Difficulties.EASY}
            onClick={onSelectDifficulty(Difficulties.EASY)}
          />
          <DificultyItem
            name='Medium'
            numOfCards={Difficulties.MEDIUM}
            onClick={onSelectDifficulty(Difficulties.MEDIUM)}
          />
          <DificultyItem
            name='Hard'
            numOfCards={Difficulties.HARD}
            onClick={onSelectDifficulty(Difficulties.HARD)}
          />
          <DificultyItem
            name='Very Hard'
            numOfCards={Difficulties.VERY_HARD}
            onClick={onSelectDifficulty(Difficulties.VERY_HARD)}
          />
        </ContainerDifficulty>
      </ContainerGame>
    </Container>
  );
}

export default Home;
