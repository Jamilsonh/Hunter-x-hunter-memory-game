import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  width: 170px;
  display: block;
  border: 2px solid #fff;
  border-radius: 6px;
`;

export const FrontImage = styled(CardImage)`
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;
`;

export const BackImage = styled(CardImage)`
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
`;

export const FlippedContainer = styled.div`
  &.flipped {
    ${FrontImage} {
      transform: rotateY(0deg);
      transition-delay: 0.2s;
    }

    ${BackImage} {
      transform: rotateY(90deg);
      transition-delay: 0s;
    }
  }
`;
