import styled from 'styled-components';

import Wallpaper from '../../images/gif/hxh.gif';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerGame = styled.div`
  border: 1px solid red;
  border-radius: 25px;
  height: 350px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(255, 255, 255, 0.5);
  margin-top: 250px;
`;

export const ContainerDifficulty = styled.div`
  height: 250px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TitleContainerGame = styled.h1``;

export const ButtonDifficulty = styled.button`
  border: 1px solid red;
`;
