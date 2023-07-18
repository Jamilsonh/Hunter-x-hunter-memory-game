import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerMain = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 200px;
`;

export const TimerText = styled.p`
  font-size: 24px;
  background-color: white;
  color: black;
  border-radius: 25px;
  padding: 2px 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const AppContainer = styled.div`
  max-width: 1500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  max-height: 900px;
  padding: 10px;
`;

interface CardGridProps {
  columns: number;
}

export const CardGrid = styled.div<CardGridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 15px;
  justify-items: center;
`;

export const MenuContainer = styled.div`
  display: fixed;
  width: 50%;
  margin: auto;
  border-radius: 25px;
  padding: 10px;
`;

export const MenuSubContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  background: none;
  border: 2px solid #fff;
  padding: 6px 12px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background: #c23866;
    color: #fff;
  }
`;

export const ButtonVoltar = styled(NavLink)`
  background: none;
  border: 2px solid #fff;
  padding: 6px 12px;
  border-radius: 4px;
  color: black;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 1em;
  text-decoration: none;

  &:hover {
    background: #c23866;
    color: #fff;
  }
`;
