import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle