import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import Score from './Score';
import Flips from './Flips';
import TimeLeft from './TimeLeft';
import { useDispatch } from '../store';
import useClickOutside from '../hooks/useClickOutside';

const StyledStatusContainer = styled.footer`
  position: fixed;
  z-index: 10;
  top: ${({ open }) => (open ? '0' : '-20rem')};
  right: 0;
  min-width: 30rem;
  min-height: 20rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.palette.main};
  opacity: 0.95;
  color: ${({ theme }) => theme.palette.purple};
  transition: top 0.3s ease-in-out;
  padding: 2rem;
  box-shadow: ${({ theme, open }) => open && theme.shadows[1]};
  font-size: ${({ theme }) => theme.typography.fontSizeBig};
`;

const Toggler = styled.div`
  position: absolute;
  z-index: 10;
  width: 10rem;
  height: 4rem;
  left: 50%;
  bottom: 0;
  text-align: center;
  transform: translate(-50%, 4rem) rotate(180deg);
  background-color: inherit;
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
`;

const ArrowUp = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  transform: ${({ open }) =>
    open ? 'translateY(0.75rem) rotate(180deg)' : 'translateY(0.75rem)'};
  cursor: pointer;
`;

const Status = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const statusRef = useRef(false);
  useClickOutside(statusRef, () => setOpen(false));

  const onGameOver = useCallback(() => {
    setOpen(false);
    dispatch({ type: 'GAME_OVER' });
  }, [dispatch]);

  const toggleStatus = () => setOpen((open) => !open);

  return (
    <StyledStatusContainer open={open} ref={statusRef}>
      <Toggler>
        <ArrowUp
          open={open}
          onClick={toggleStatus}
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 31.479 31.479"
        >
          <path
            d="M26.477,10.274c0.444,0.444,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-8.047-8.047
	v26.555c0,0.619-0.492,1.111-1.111,1.111c-0.619,0-1.127-0.492-1.127-1.111V3.813l-8.031,8.047c-0.444,0.429-1.159,0.429-1.587,0
	c-0.444-0.444-0.444-1.143,0-1.587l9.952-9.952c0.429-0.429,1.143-0.429,1.571,0L26.477,10.274z"
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </ArrowUp>
      </Toggler>
      <Score />
      <TimeLeft onGameOver={onGameOver} />
      <Flips />
    </StyledStatusContainer>
  );
};

export default Status;
