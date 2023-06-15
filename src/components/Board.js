import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledBoard = styled.main`
  grid-area: board;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 15rem));
  grid-template-rows: auto;
  grid-gap: 1.5rem;
  justify-content: center;
`;

const Board = ({ cards }) => {
  return (
    <StyledBoard>
      {cards.map((card, idx) => (
        <Card card={card} key={idx} />
      ))}
    </StyledBoard>
  );
};

export default Board;
