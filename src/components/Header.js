import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import useClickOutside from '../hooks/useClickOutside';
import SlideMenu from './SlideMenu';

const StyledHeader = styled.div`
  grid-area: header;
  font-size: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
  padding: 1.5rem 0;
  position: relative;
`;

const GameTitle = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const Hamburger = styled.span`
  width: 4rem;
  height: 3px;
  background-color: ${({ theme, open }) =>
    open ? 'transparent' : theme.palette.main};
  margin-right: 1.5rem;
  position: relative;
  transition: background-color 0.1s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: currentColor;
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'translateY(-10px)')};
    transition: transform 0.1s ease-in-out;
  }
  &::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: currentColor;
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'translateY(10px)')};
    transition: transform 0.1s ease-in-out;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const gameTitleRef = useRef(false);
  useClickOutside(gameTitleRef, () => setOpen(false));

  const toggleMenu = () => setOpen((open) => !open);

  return (
    <StyledHeader>
      <GameTitle onClick={toggleMenu} ref={gameTitleRef}>
        <Hamburger open={open} />
        <h3>Mix & Match</h3>
      </GameTitle>
      <SlideMenu open={open} />
    </StyledHeader>
  );
};

export default Header;
