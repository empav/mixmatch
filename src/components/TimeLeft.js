import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStore } from '../store';

const StyledTimeLeft = styled.h3`
  font-size: inherit;
`;

const Span = styled.span`
  color: currentColor;
`;

const TimeLeft = ({ onGameOver }) => {
  const [int, setInt] = useState(false);
  const { timeLeft: tl, gameOver } = useStore();
  const [timeLeft, setTimeleft] = useState(tl);

  useEffect(() => {
    if (!int && !gameOver) {
      setInt(
        setInterval(() => {
          setTimeleft((prev) => prev - 1);
        }, 1000)
      );
    }
    if (timeLeft === 0 && !gameOver) {
      clearInterval(int);
      setInt(false);
      onGameOver();
    }
  }, [int, onGameOver, gameOver, timeLeft]);

  return (
    <StyledTimeLeft>
      Time Left: <Span>{timeLeft}</Span>
    </StyledTimeLeft>
  );
};

export default TimeLeft;
