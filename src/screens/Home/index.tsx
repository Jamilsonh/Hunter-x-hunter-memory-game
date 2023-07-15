import { useContext } from 'react';
import DificultyItem from '../../components/DifficultyItem';
import Difficulties from '../../config/Difficulties';
import { DifficultyContext } from '../../utils/DifficultyContext';
import {
  ButtonDifficulty,
  Container,
  ContainerGame,
  TitleContainerGame,
} from './styles';
import { Link } from 'react-router-dom';

function Home() {
  const { changeDifficulty } = useContext(DifficultyContext);

  const onSelectDifficulty = (difficulty: number) => () => {
    changeDifficulty(difficulty);
  };

  console.log(changeDifficulty);

  return (
    <Container>
      <ContainerGame>
        <TitleContainerGame>Escolha a dificuldade</TitleContainerGame>
        <DificultyItem
          name='Easy'
          numOfCards={Difficulties.EASY}
          onClick={onSelectDifficulty(Difficulties.EASY)}
          //isSelected={selectedDifficulty === Difficulties.EASY}
        />
        <Link to='/game'>game</Link>
        <ButtonDifficulty>Medium 24</ButtonDifficulty>
        <ButtonDifficulty>Hard 30</ButtonDifficulty>
        <ButtonDifficulty>Very Hard 36</ButtonDifficulty>
      </ContainerGame>
    </Container>
  );
}

export default Home;
