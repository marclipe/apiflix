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
    border: none;
    background-color: ${(props) => props.theme["background-button"]};

    color: ${(props) => props.theme["text-button-color"]};
    font-weight: 700;
    font-size: 0.75rem;

    &:hover {
      background-color: #e6dfd8;
    }
  }

  .classDivs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 599px) {
    img {
      margin-top: 3.125rem;
    }
  }
`;

export const ContainerMovie = styled.div<ContainerProps>`
  margin: 2rem 0;

  .containerInfoMovies {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-left: 22rem;

    h2 {
      font-size: 1.25rem;
      color: ${(props) => props.theme["color-text"]};
      font-weight: 700;
    }

    p {
      margin-top: 1.188rem;
      color: ${(props) => props.theme["color-text"]};
      font-size: 1rem;
      text-align: left;
    }

    img {
      margin-top: 1rem;
      width: 8.313;
      height: 15.188rem;
      border-radius: 4px;
    }

    @media screen and (min-width: 600px) and (max-width: 959px) {
      margin-left: 12rem;
    }

    @media screen and (max-width: 599px) {
      flex-direction: column;
      margin-left: auto;
      gap: 1rem;

      h2, p {
        width: auto;
        padding: 0 20px;
      }
    }
  }
`;