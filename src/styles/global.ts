import { createGlobalStyle } from "styled-components";
import Background from "../assets/background.png";

export const GlobalStyle = createGlobalStyle`

  :root {
    --body-background: #0e0e0e;
    --color-logo: #ff5b50;
    --card-color: #252525;
    --text-color: #fff;
    --subtitle-color: #5a5757;
    --black-text: #000;
    --color-input: #0D0D0D;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body, input, textarea, button {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }

  body {
    background: var(--body-background);
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: 100% 1000px;
    color: var(--text-color);
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--body-background);
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-logo);
    border-radius: 5px;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;
