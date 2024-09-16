import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    overflow-y: scroll;
    overflow-x: hidden;
    overscroll-behavior: none;
    position: relative;
  }
  html,
  body,
  #root {
    height: 100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    letter-spacing: .3px;
    touch-action: pan-x pan-y;
  }
    body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle