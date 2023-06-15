import React from 'react';
import styled from 'styled-components';
import { useStore } from '../store';

const StyledScore = styled.h2`
  font-size: inherit;
`;

const Span = styled.span`
  color: currentColor;
`;

const Score = () => {
  const { score } = useStore();
  return (
    <StyledScore>
      Score: <Span>{score}</Span>
    </StyledScore>
  );
};

export default Score;
