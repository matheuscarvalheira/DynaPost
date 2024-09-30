import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

  :root {
    --toastify-color-error: ${({theme}) => theme.violetsAreBlue};
    --toastify-color-warning: ${({theme}) => theme.violetsAreBlue};
    --toastify-color-success: ${({theme}) => theme.violetsAreBlue};
    --toastify-color-info: ${({theme}) => theme.violetsAreBlue};
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${({theme}) => theme.black};
    color: ${({theme}) => theme.grayGranite};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.indigoLavander};
    border-radius: 20px;

    &:hover {
      background-color: ${({theme}) => theme.violetsAreBlue};
    }
  }

  html, body, #_next {
    height: 100%;
  }

  html, body, #__next, main {
    height: 100%;
  }

  main {
    overflow-y: auto;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    overflow-x: hidden;
    background-color: ${({theme}) => theme.black};
    color: ${({theme}) => theme.white};
  }

  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  input, textarea {
    appearance: none;
    border: none;
    outline: none;
  }
`