import React from 'react';
import LogoYellow from './logoYellow.svg';
import LogoPurple from './logoPurple.svg';
import LogoOriginal from './logo.svg';
import styled from 'styled-components';

const Image = styled.img`
  grid-area: logo;
`;

const Logo = ({ purple, yellow, ...props }) => {
  return (
    <Image
      src={yellow ? LogoYellow : purple ? LogoPurple : LogoOriginal}
      alt="Logo Mix & Match"
      {...props}
    />
  );
};

export default Logo;
