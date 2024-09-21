import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html {
    font-size: 100%; /* Esto hace que 1rem = 16px */
    overflow-y: scroll;
    overflow-x: hidden;
    overscroll-behavior: none;
    position: relative;
    scroll-behavior: smooth; /* Para una mejor experiencia al hacer scroll */
    -webkit-tap-highlight-color: transparent; /* Quitar el highlight en móviles */
  }

  body {
    font-family: 'Open-Sans', Helvetica, sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    line-height: 1.6; /* Espaciado adecuado entre líneas para mejor legibilidad */
    min-height: 100vh; /* Garantiza que el cuerpo cubra toda la altura del viewport */
    margin: 0;
    padding: 0;
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
`

export default GlobalStyle