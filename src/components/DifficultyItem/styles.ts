import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

//type CssType = FlattenInterpolation<ThemeProps<DefaultTheme>> | null

/*
const ItemSelected = css`
  background: ${({ theme }): string => theme.primaryText} !important;
  color: ${({ theme }): string => theme.background} !important;
`*/

export const Container = styled(NavLink)<{ isSelected: boolean }>`
  padding: 8px 24px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s ease-in-out;
  text-decoration: none;
  color: black;
  border: 2px solid black;
  width: 120px;
  background-color: rgb(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-8px);
    color: red;
  }
`;

export const DificultyName = styled.div`
  font-weight: bold;
`;

export const NumberOfCards = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
`;
