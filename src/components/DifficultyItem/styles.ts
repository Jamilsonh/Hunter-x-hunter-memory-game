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
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s ease-in-out;
  text-decoration: none;
  color: black;

  &:hover {
    transform: translateY(-8px);
    color: red;
  }
`;

export const DificultyName = styled.div``;

export const NumberOfCards = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
`;
