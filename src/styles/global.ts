import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  html {
    --scroll-behavior: smooth;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background-color: #E5E5E5;
  }
`;
