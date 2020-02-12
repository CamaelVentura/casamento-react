import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height:100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: #ba8571;
  }

  body, input, button, textarea {
    font-family: 'Dancing Script', cursive, sans-serif;
  }

  ul {
    list-style:none;
  }

  button {
    cursor: pointer;
  }
   @media (min-width: 320px) and (max-width:480px) {
    a {
      text-decoration:none;
      color:#ba8571;
      min-width: 80px;
      text-align: center;
    }

  }
  @media (min-width: 481px) {
    a {
      text-decoration:none;
      color:#ba8571;
      min-width: 210px;
      text-align: center;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
    width: 12px;
    background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;
