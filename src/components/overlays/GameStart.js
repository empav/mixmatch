import React, { useCallback } from 'react';
import { Title, OverlayPlay, OverlayContainer } from '../../style';
import { Logo } from '../../assets';
import { useDispatch } from '../../store';

const GameStart = () => {
  const dispatch = useDispatch();

  const onGameStart = useCallback(() => dispatch({ type: 'GAME_START' }), [
    dispatch,
  ]);

  return (
    <OverlayContainer>
      <Logo yellow width="128" />
      <Title>Mix & Match</Title>
      <OverlayPlay onClick={onGameStart}>Play</OverlayPlay>
    </OverlayContainer>
  );
};

export default GameStart;
