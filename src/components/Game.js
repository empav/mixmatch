import React, { useState, useCallback } from 'react';
import Card from './Card';
import { darkTheme, lightTheme, GlobalStyle } from '../style';
import GameFinish from './overlays/GameFinish';
import GameStart from './overlays/GameStart';
import styled, { ThemeProvider } from 'styled-components';
import useDarkMode from '../hooks/useDarkMode';
import useCards from '../hooks/useCards';
import { useStore, useDispatch, initialState } from '../store';
import Menu from './Header';
import Status from './Status';

const GameContainer = styled.div`
  display: grid;
  grid-template-columns: 3rem auto auto 3rem;
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
    '. header header .'
    '. board board .';
`;

const Board = styled.main`
  grid-area: board;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 15rem));
  grid-gap: 1.5rem;
  justify-content: space-around;
  padding-bottom: 1.5rem;
`;

const Game = () => {
  const isDark = useDarkMode();
  // Clicking the screen are disallowed
  const [noClick, setNoClick] = useState(false);
  const [timeoutNoFlip, setTimeoutNoFlip] = useState(false);
  // React state
  const {
    cards,
    gameStart,
    gameOver,
    gameCompleted,
    cardToCheck,
    delayUnflipPair,
  } = useStore();
  const dispatch = useDispatch();

  const [, isLoading, error] = useCards(initialState.cardNumber);

  const onFlip = useCallback(
    (card) => () => {
      if (!card.visible && !noClick) {
        dispatch({ type: 'FLIP_CARD', card });
        if (cardToCheck) {
          setNoClick(true);
          setTimeout(() => {
            dispatch({
              type: 'CHECK_CARDS',
              card,
            });
            clearTimeout(timeoutNoFlip);
            setTimeoutNoFlip(false);
            setNoClick(false);
          }, delayUnflipPair);
        } else {
          setTimeoutNoFlip(
            setTimeout(
              () => dispatch({ type: 'NO_FLIP', card }),
              initialState.timeoutNoFlip
            )
          );
        }
      }
    },
    [cardToCheck, delayUnflipPair, dispatch, noClick, timeoutNoFlip]
  );

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>error</div>
      ) : !gameStart ? (
        <GameStart />
      ) : (
        <GameContainer>
          <Menu />
          <Board>
            {cards.map((card, idx) => (
              <Card card={card} key={idx} onFlip={onFlip} />
            ))}
          </Board>
          {(gameOver || gameCompleted) && <GameFinish />}
          <Status />
        </GameContainer>
      )}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Game;
