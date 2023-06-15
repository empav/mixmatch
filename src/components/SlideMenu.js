import React from 'react';
import styled from 'styled-components';

const StyledSlideMenu = styled.aside`
  position: fixed;
  top: 8rem;
  left: ${({ open }) => (open ? '0' : '-40rem')};
  width: 40rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.slideMenu.backgroundColor};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  z-index: 10;
  transition: left 0.3s ease-in-out;
`;

const SlideMenu = ({ open }) => {
  return <StyledSlideMenu open={open} />;
};

export default SlideMenu;
