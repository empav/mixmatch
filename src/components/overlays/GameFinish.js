import React, { useCallback } from 'react';
import { Title, OverlayPlay, OverlayContainer } from '../../style';
import { useStore, useDispatch, initialState } from '../../store';
import { shuffleCards } from '../../api';
import { Logo } from '../../assets';

const GameFinish = () => {
  const { cards, timeLeft, retry, gameOver, gameCompleted } = useStore();
  const dispatch = useDispatch();

  const onGameRestart = useCallback(() => {
    const newCards = cards.map((card) => ({ ...card, visible: false }));
    shuffleCards(newCards);
    dispatch({
      type: 'GAME_START',
      state: { ...initialState, cards: newCards, retry: [...retry, timeLeft] },
    });
  }, [cards, dispatch, retry, timeLeft]);

  return (
    <OverlayContainer>
      <Logo yellow width="128" />
      <Title>
        {gameCompleted ? 'asd' : gameOver ? "Time's up! Game over!" : ''}
      </Title>
      <OverlayPlay onClick={onGameRestart}>Play again</OverlayPlay>
    </OverlayContainer>
  );
};

export default GameFinish;
