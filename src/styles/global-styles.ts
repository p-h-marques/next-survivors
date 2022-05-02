import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.light};
    height: 100vh;
    padding: 0px;
    margin: 0px;
    font-family: 'Lato', sans-serif;
    min-width: 360px;
  }

  * {
    text-decoration: none;
    box-sizing: border-box;
    line-height: 1rem;
    padding: 0px;
    margin: 0px;
    transition: all 0.2s ease-out;
  }

  div#__next {
    height: 100%;
  }

  a,
  a:hover,
  a:active {
      text-decoration: none;
  }

  p {
      margin: 0px;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
      outline: none;
  }

  input,
  select,
  textarea,
  button {
      font-family: inherit;
  }
`;
