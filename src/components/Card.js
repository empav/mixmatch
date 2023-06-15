import React from 'react';
import styled from 'styled-components';
import { Logo } from '../assets';

const StyledCard = styled.div`
  min-height: 18rem;
  background-color: transparent;
  perspective: 1000px;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledCardInner = styled.div`
  box-shadow: ${({ theme }) => theme.shadows[0]};
  background: ${({ theme }) => theme.palette.cardBackground};
  border-radius: 4px;
  border: ${({ theme }) => `3px solid ${theme.palette.main}`};
  cursor: pointer;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[1]};
  }

  position: relative;

  min-height: inherit;

  transition: transform 0.5s;
  transform-style: preserve-3d;
  transform: ${({ flip }) => (flip ? 'rotateY(0deg)' : 'rotateY(180deg)')};
`;

const StyledImg = styled.img`
  width: 65%;
`;

const Flippable = styled.div`
  position: absolute;
  min-height: inherit;
  backface-visibility: hidden;
`;

const Front = styled(Flippable)`
  display: grid;
  place-items: center;
`;

const Back = styled(Flippable)`
  transform: rotateY(180deg);
  width: 100%;
`;

const BackCardLogo = styled.div`
  backface-visibility: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: inherit;
`;

const Card = React.memo(({ card, onFlip }) => {
  return (
    <StyledCard>
      <StyledCardInner flip={card.visible} onClick={onFlip(card)}>
        <Front>
          <StyledImg src={card.default} alt={card.name} />
        </Front>
        <Back>
          <BackCardLogo>
            <Logo purple width="35%" />
          </BackCardLogo>
        </Back>
      </StyledCardInner>
    </StyledCard>
  );
});

export default Card;
