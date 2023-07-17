import styled from 'styled-components';

import Wallpaper from '../../images/gif/hxh.gif';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 105%;
  background-repeat: no-repeat;
`;

export const ContainerGame = styled.div`
  border: 1px solid red;
  border-radius: 25px;
  height: 400px;
  width: 800px;
  display: flex;
  flex-direction: column;
  background-image: url(${Wallpaper});
  align-items: center;
  justify-content: flex-end;
  background-color: rgb(255, 255, 255, 0.7);
  background-size: 105%;
  background-position: 0 90%;
`;

export const ContainerDifficulty = styled.div`
  height: 150px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonDifficulty = styled.button`
  border: 1px solid red;
`;
