import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html {
    font-size: 87.5%; 
    overflow-y: scroll;
    overflow-x: hidden;
    overscroll-behavior: none;
    position: relative;
    scroll-behavior: smooth; 
    -webkit-tap-highlight-color: transparent; // para quitar el highlight en celu
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    line-height: 1.6; 
    min-height: 100vh; 
    margin: 0;
    padding: 0;
  }
    @media(min-width: 768px) {
    html {
        font-size: 100%
      }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
