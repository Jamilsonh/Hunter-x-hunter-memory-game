import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  border: 1px solid black;
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

interface CardGridProps {
  columns: number;
}

export const CardGrid = styled.div<CardGridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 15px;
`;
