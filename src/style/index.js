import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const lightTheme = {
  ///////////////////// Main palette ////////////////////////////
  palette: {
    background: 'linear-gradient(to right, #512DA8, #673AB7)',
    cardBackground: 'linear-gradient(to right, #fdc830, #F37335)',
    main: '#fdc830',
    black: '#000',
    white: '#fff',
    purple: '#512DA8',
    orange: '#f27121',
    yellow: '#fdc830',
  },
  shadows: [
    '0 7px 14px rgba(0,0,0,0.12), 0 5px 5px rgba(0,0,0,0.24)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 14px 28px rgba(255,255,255,0.25), 0 10px 10px rgba(255,255,255,0.22)',
  ],
  ///////////////////// Typography ////////////////////////////
  typography: {
    fontFamily: 'Lemonada, Helvetica, sans-serif',
    fontWeight: 300,
    fontWeightBold: 700,
    fontWeightSemiBold: 500,
    fontSizeRoot: '62.5%',
    fontSizeBig: '2rem',
    fontSize: '1.6rem',
    fontSizeSmall: '1.4rem',
    fontSizeXSmall: '1.2rem',
    lineHeight: '1.6',
  },
  slideMenu: {
    backgroundColor: '#512DA8',
    main: '#fdc830',
  },
};

const darkTheme = {
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    main: 'white',
    background: 'linear-gradient(to right, #000000, #434343)',
    cardBackground: 'linear-gradient(to right, #c9d6ff, #e2e2e2)',
  },
  slideMenu: {
    backgroundColor: lightTheme.palette.black,
    main: lightTheme.palette.purple,
  },
};

const GlobalStyle = createGlobalStyle`
/* Reset styles */
  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  html {
      font-size: ${({ theme }) => theme.typography.fontSizeRoot};
      box-sizing: border-box;
  }

  @font-face {
    font-family: 'Lemonada';
    src: url('/fonts/Lemonada.ttf');
  }

  body {
      box-sizing: inherit;
      font-family: ${({ theme }) => theme.typography.fontFamily};
      font-size: ${({ theme }) => theme.typography.fontSize};
      color: ${({ theme }) => theme.palette.main};
      text-shadow: ${({ theme }) => `1px 1px 1px ${theme.palette.black}`};
      background: ${({ theme }) => theme.palette.background};
      line-height: ${({ theme }) => theme.typography.lineHeight};
  }

  ul {
    list-style: none;
  }

  @keyframes infiniteScale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;

const Title = styled.div`
  grid-area: header;
  font-size: 4em;
  display: flex;
  justify-content: center;
`;

const OverlayPlay = styled.h2`
  font-size: 50px;
  cursor: pointer;
  &:hover {
    animation: infiniteScale 1s infinite;
  }
`;

const OverlayContainer = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.palette.background};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export {
  lightTheme,
  darkTheme,
  GlobalStyle,
  Title,
  OverlayPlay,
  OverlayContainer,
};
