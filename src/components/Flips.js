import React from 'react';
import styled from 'styled-components';
import { useStore } from '../store';

const StyledFlips = styled.h3`
  font-size: inherit;
`;

const Span = styled.span`
  color: currentColor;
`;

const Flips = () => {
  const { flips } = useStore();
  return (
    <StyledFlips>
      Flips: <Span>{flips}</Span>
    </StyledFlips>
  );
};

export default Flips;
