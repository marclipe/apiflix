import { styled } from "styled-components";
import { Theme } from "../../styles/themes/default";

interface ContainerProps {
  theme: Theme;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  place-items: center;

  img {
    margin-top: 7.875rem;
  }

  h1 {
    color: ${(props) => props.theme["color-text"]};
    margin-bottom: 0.625rem;
  }

  p {
    color: ${(props) => props.theme["color-text"]};
    width: 60%;
    text-align: center;
    margin-top: 1.625rem;
  }

  button {
    margin: 0 auto;
    width: 11.25rem;
    height: 2.938rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.063rem;

    border-radius: 5px;
    border: 2px solid #1a1a1a;
    background-color: ${(props) => props.theme["background-button"]};

    color: ${(props) => props.theme["text-button-color"]};
    font-weight: 700;
    font-size: 0.75rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;