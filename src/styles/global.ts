import { createGlobalStyle } from "styled-components";
import { Theme } from "./themes/default";

interface GlobalStylesProps {
  theme: Theme
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1000px){
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${(props) => props.theme.background};
    background-repeat: no-repeat;
    background-size: contain;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    background-attachment: fixed;
  }

  body, input, button, textarea {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;